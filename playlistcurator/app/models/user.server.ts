import arc from "@architect/functions";
import bcrypt from "bcryptjs";
import invariant from "tiny-invariant";

export interface User {
  id: `email#${string}`;
  email: string;
  access_token: string;
}
export interface Password {
  password: string;
}

export async function getUserById(id: User["id"]): Promise<User | null> {
  const db = await arc.tables();
  const result = await db.user.query({
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: { ":pk": id },
  });

  const [record] = result.Items;
  if (record) return { id: record.pk, email: record.email, access_token: record.access_token };
  return null;
}

export async function getUserByEmail(email: User["email"]) {
  return getUserById(`email#${email}`);
}

async function getUserPasswordByEmail(email: User["email"]) {
  const db = await arc.tables();
  const result = await db.password.query({
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: { ":pk": `email#${email}` },
  });

  console.log(result.Items);
  const [record] = result.Items;

  if (record) return { hash: record.password };
  return null;
}

export async function createUser(
  email: User["email"],
  password: Password["password"],
) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const db = await arc.tables();
  await db.password.put({
    pk: `email#${email}`,
    password: hashedPassword,
  });

  await db.user.put({
    pk: `email#${email}`,
    email,
  });

  const user = await getUserByEmail(email);
  invariant(user, `User not found after being created. This should not happen`);

  console.log(user);

  return user;
}


export async function deleteUser(email: User["email"]) {
  const db = await arc.tables();
  await db.password.delete({ pk: `email#${email}` });
  await db.user.delete({ pk: `email#${email}` });
}

export async function verifyLogin(
  email: User["email"],
  password: Password["password"],
) {
  const userPassword = await getUserPasswordByEmail(email);

  if (!userPassword) {
    return undefined;
  }

  const isValid = await bcrypt.compare(password, userPassword.hash);
  if (!isValid) {
    return undefined;
  }

  return getUserByEmail(email);
}


export async function setAccessToken(access_token, id: User["id"]): Promise<User | null>{
    const db = await arc.tables();
    console.log(access_token);

    const result = await db.user.query({
        KeyConditionExpression: "pk = :pk",
        ExpressionAttributeValues: { ":pk": id },
      });

      //console.log(result.Items);
      const [record] = result.Items;

    await db.user.update({
        pk: id,
        email: record.email,
        access_token: 'BQB8nEkQYTtJtTNWF0RQOiiNAnKa2I8_vMLa0H4HcQwCViSwj65-f33OzJWY0zG3wRke2zvu3LNGZpF9JutVCS5aSgmcYNkAwNFYCBOlCkFWEDO2gzFa17TX9S_4dpPyW2atmgei4TSDYqMLKpYmVIA0XhHNwIGhnUWQ7u1D_HgY4B7JcSgTVUCrbnLoXRXg-rWZOzWfXrDUyEzSOb9MDF3gMl3HrvHiGThoT7NNqOXjDukGT-ZD7vjHKKwJ0zOI7M4',
    });
    return { id: record.pk, email: record.email, access_token: record.access_token };
}
