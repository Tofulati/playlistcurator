import path from 'node:path';
import { fileURLToPath } from 'url';

// Get the directory of the current module (ESM)
const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  cacheDirectory: './node_modules/.cache/remix',
  ignoredRouteFiles: ['**/.*', '**/*.test.{js,jsx,ts,tsx}'],
  publicPath: '/_static/build/',
  server: 'server.ts',
  serverBuildPath: 'server/index.mjs',
  serverModuleFormat: 'esm',
  getRoutes: async () => {
    const routes = [];

    // Define your regular routes here
    routes.push(
      { path: '/', module: await import('./src/routes/Home.tsx') },
      { path: '/callback', module: await import('./src/routes/Callback.tsx') }
    );

    if (process.env.NODE_ENV !== 'production') {
      console.log('⚠️ Test routes enabled.');

      const appDir = path.join(__dirname, 'app');

      routes.push({
        path: '__tests/create-user',
        module: await import(path.relative(appDir, 'cypress/support/test-routes/create-user.ts')),
      });
    }

    return routes;
  },
};
