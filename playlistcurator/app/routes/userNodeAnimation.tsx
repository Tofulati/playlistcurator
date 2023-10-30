import React, { useEffect, useRef } from "react";
import Navbar from "~/Components/Navbar";

import * as d3 from "d3";

export default function UserNodeAnimation() {
  const svgRef = useRef(null);

  const names = ["Abby", "Patrick", "Hajin", "Albert", "Sophia", "Liam", "Olivia", "Ava", "Mason", "James", "Ella", "Lucas", "Mia", "Charlotte", "Benjamin", "Amelia", "Harper", "Evelyn", "David", "Madison"];

  useEffect(() => {
    //set canvas size
    const w = window.innerWidth * 0.8;
    const h = window.innerHeight * 0.75;
    const svg = d3.select(svgRef.current).attr("width", w).attr("height", h);

    const friction = 0.95;
    const waves = [];
    const songCircle = { x: w / 2, y: h / 2, radius: 60, dx: 0, dy: 0 }
    svg.selectAll("*").remove();

    //gerenate user circles.
    const circles = [];
    for (let i = 0; i < 20; i++) {
      circles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: 15 + Math.random() * 15,
        dx: 0,
        dy: 0,
        ddx: 0,
        ddy: 0,
        target: getRandomPoint()
      });
    }

    //blur filter
    svg.append("defs")
      .append("filter")
      .attr("id", "blurFilter")
      .append("feGaussianBlur")
      .attr("stdDeviation", 3);

    //glow filter
    const glowFilter = svg.append("defs")
    .append("filter")
    .attr("id", "glowFilter")
    .attr("x", "-50%")       
    .attr("y", "-50%")       
    .attr("width", "200%")   
    .attr("height", "200%");    
    glowFilter.append("feGaussianBlur").attr("stdDeviation", 8).attr("result", "coloredBlur");
    glowFilter.append("feMerge").selectAll("feMergeNode").data(["coloredBlur", "SourceGraphic"]).enter().append("feMergeNode").attr("in", d => d);

    const names = ["Abby", "Patrick", "Hajin", "Albert", "Sophia", "Liam", "Olivia", "Ava", "Mason", "James", "Ella", "Lucas", "Mia", "Charlotte", "Benjamin", "Amelia", "Harper", "Evelyn", "David", "Madison"];

    const circleElements = svg.selectAll(".regularCircle")  // Target the class
      .data(circles)
      .enter()
      .append("circle")
      .classed("regularCircle", true)  // Assign a class for these circles
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", d => d.radius)
      .attr("fill", "#1DB954")
      .attr("filter", "url(#glowFilter)")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    const textElements = svg.selectAll(".circleText")
      .data(circles)
      .enter()
      .append("text")
      .classed("circleText", true)
      .attr("x", d => d.x)
      .attr("y", d => d.y)
      .style("pointer-events", "none")
      .attr("text-anchor", "middle")  // To center the text on the circle
      .attr("dy", ".35em")  // To vertically center the text on the circle
      .attr("fill", "white")  // Setting the text color to white

      .attr("font-size", d => {
        const nameLength = names[circles.indexOf(d)].length;
        return `${d.radius / nameLength * 3}px`;// fit texts into circle
      })
      .text((d, i) => names[i]);

    svg.append("defs")
      .append("pattern")
      .attr("id", "btsImage")
      .attr("x", "0")
      .attr("y", "0")
      .attr("width", "1")
      .attr("height", "1")
      .attr("patternUnits", "objectBoundingBox")
      .append("image")
      .attr("xlink:href", "https://ibighit.com/bts/images/bts/discography/butter/butter-cover.jpg")
      .attr("width", songCircle.radius * 1.6)
      .attr("height", songCircle.radius * 1.6)
      .attr("x", "0")
      .attr("y", "0");

    const songCircleBackgroundElement = svg.append("circle")
      .classed("songCircleBackground", true)
      .attr("cx", songCircle.x)
      .attr("cy", songCircle.y)
      .attr("r", songCircle.radius)
      .attr("fill", "lightgreen")
      .attr("filter", "url(#glowFilter)");

    // The smaller circle (80% of the size) with the image as fill
    const songCircleElement = svg.append("circle")
      .classed("songCircle", true)
      .attr("cx", songCircle.x)
      .attr("cy", songCircle.y)
      .attr("r", songCircle.radius * 0.8)
      .attr("fill", "url(#btsImage)")
      .attr("opacity", 0.9)
      ;

    //green circles move towards random point 
    function getRandomPoint() {
      const centerX = w / 2;
      const centerY = h / 2;
      const maxRadius = h * 0.2;

      const angle = Math.random() * 2 * Math.PI;
      // const radius = Math.sqrt(Math.random()) * maxRadius;
      const radius = maxRadius;


      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      return { x, y };
    }

    //accerlate green circles
    function setDirectionTowardsTarget(circle) {
      const diffx = circle.target.x - circle.x;
      const diffy = circle.target.y - circle.y;
      const distance = Math.sqrt(diffx * diffx + diffy * diffy);

      if (distance < 50) {
        circle.target = getRandomPoint();
      } else {
        circle.ddx *= 0.99;
        circle.ddy *= 0.99;
        circle.ddx += diffx / distance / 1200;
        circle.ddy += diffy / distance / 1200;
        circle.dx += circle.ddx;
        circle.dy += circle.ddy;
        circle.dx *= friction;
        circle.dy *= friction;
      }
    }

    //computer centerof mass
    function centerOfMass(circles) {
      let totalX = 0;
      let totalY = 0;
      for (let circle of circles) {
        totalX += circle.x;
        totalY += circle.y;
      }
      return {
        x: totalX / circles.length,
        y: totalY / circles.length,
      };
    }

    //the song circle move towards the center of mass.
    function movesongCircle() {
      const com = centerOfMass(circles);
      const diffx = com.x - songCircle.x;
      const diffy = com.y - songCircle.y;
      songCircle.dx = diffx * 0.01;
      songCircle.dy = diffy * 0.01;
      songCircle.x += songCircle.dx;
      songCircle.y += songCircle.dy;
    }

    //the song circle has antigravity and boundary conditions.
    function drawsongConnections() {
      const maxDistanceForEffect = 200;

      for (let circle of circles) {
        const diffx = circle.x - songCircle.x;
        const diffy = circle.y - songCircle.y;
        const distanceSquared = diffx * diffx + diffy * diffy;
        const distance = Math.sqrt(distanceSquared);

        // if (distance < maxDistanceForEffect) {
        const baseAntiGravityStrength = 0.12;
        const antiGravityStrength = baseAntiGravityStrength / (distance * distance);
        const angle = Math.atan2(diffy, diffx);
        circle.ddx += diffx * antiGravityStrength;
        circle.ddy += diffy * antiGravityStrength;

        // Line drawing
        const lineWeightFactor = (maxDistanceForEffect - distance) / maxDistanceForEffect;
        const lineWidth = 1 + lineWeightFactor * 8;

        //line drawn from edge of each circle
        const startX = songCircle.x + (songCircle.radius * Math.cos(angle));
        const startY = songCircle.y + (songCircle.radius * Math.sin(angle));
        const endX = circle.x - (circle.radius * Math.cos(angle));
        const endY = circle.y - (circle.radius * Math.sin(angle));

        svg.append("line")
          .attr("x1", startX)
          .attr("y1", startY)
          .attr("x2", endX)
          .attr("y2", endY)
          .attr("stroke", "gray")
          .attr("stroke-width", lineWidth)
          .style("stroke-opacity", 1.33 - distance / 150)
          ;

        const overlap = circle.radius + songCircle.radius - distance;

        if (overlap > 0) {
          const angle = Math.atan2(diffy, diffx);

          // Calculate normal and tangent vectors at the point of collision
          const nx = Math.cos(angle);
          const ny = Math.sin(angle);
          const tx = -ny;
          const ty = nx;

          const dp1n = circle.dx * nx + circle.dy * ny;
          const dp1t = circle.dx * tx + circle.dy * ty;

          const v1n = -dp1n;

          // Recompose the velocity of the green circle
          circle.dx = tx * dp1t + nx * v1n;
          circle.dy = ty * dp1t + ny * v1n;
          circle.ddx *= nx;
          circle.ddy *= ny;

          const moveBy = overlap;
          circle.x += moveBy * nx;
          circle.y += moveBy * ny;
        }
      }
    }

      function boundaryConditions(circle) {
        if (circle.x + circle.radius > w) {
          circle.x = w - circle.radius;
          circle.dx *= -1;
          circle.ddx *= -1;

        }
        if (circle.y + circle.radius > h) {
          circle.y = h - circle.radius;
          circle.dy *= -1;
          circle.ddy *= -1;

        }
        if (circle.x - circle.radius < 0) {
          circle.x = circle.radius;
          circle.dx *= -1;
          circle.ddx *= -1;

        }
        if (circle.y - circle.radius < 0) {
          circle.y = circle.radius;
          circle.dy *= -1;
          circle.ddy *= -1;

        }
      }
  
      function drawConnections() {
        for (let i = 0; i < circles.length; i++) {
          for (let j = i + 1; j < circles.length; j++) {
            const circle = circles[i];
            const otherCircle = circles[j];
  
            const diffx = circle.x - otherCircle.x;
            const diffy = circle.y - otherCircle.y;
            const distance = diffx * diffx + diffy * diffy;
            if (distance <= 20000) {
              svg.append("line")
                .attr("x1", circle.x)
                .attr("y1", circle.y)
                .attr("x2", otherCircle.x)
                .attr("y2", otherCircle.y)
                .attr("stroke", "#1DB954")
                .attr("stroke-width", 4)
                .style("stroke-opacity", 0.8 - distance / 25000)
              // .style("stroke-dasharray", `${(1 - distance / 20000) ** 2 * 100 + 1}, 2`);
  
              const overlap = circle.radius + otherCircle.radius - Math.sqrt(distance);
  
              if (overlap > 0) {
                const moveBy = overlap / 2;
                const angle = Math.atan2(diffy, diffx);
  
                // Calculate normal and tangent vectors at the point of collision
                const nx = Math.cos(angle);
                const ny = Math.sin(angle);
                const tx = -ny;
                const ty = nx;
  
                // Decompose the velocities into components along the normal and tangent vectors
                const dp1n = circle.dx * nx + circle.dy * ny;
                const dp1t = circle.dx * tx + circle.dy * ty;
                const dp2n = otherCircle.dx * nx + otherCircle.dy * ny;
                const dp2t = otherCircle.dx * tx + otherCircle.dy * ty;
  
                // Swap the normal components of the velocities
                const m1 = Math.PI * circle.radius * circle.radius;  // Assuming uniform density
                const m2 = Math.PI * otherCircle.radius * otherCircle.radius;
                const v1n = (dp1n * (m1 - m2) + 2 * m2 * dp2n) / (m1 + m2);
                const v2n = (dp2n * (m2 - m1) + 2 * m1 * dp1n) / (m1 + m2);

circle.ddx *= nx;
circle.ddy *= ny;
otherCircle.ddx *= nx;
otherCircle.ddy *= ny;
  
                // Recompose the velocities from the swapped and untouched components
                circle.dx = tx * dp1t + nx * v1n;
                circle.dy = ty * dp1t + ny * v1n;
                otherCircle.dx = tx * dp2t + nx * v2n;
                otherCircle.dy = ty * dp2t + ny * v2n;
  
                // Separate the overlapping circles
                circle.x += moveBy * nx;
                circle.y += moveBy * ny;
                otherCircle.x -= moveBy * nx;
                otherCircle.y -= moveBy * ny;
  
                // Update the circles array
                circles[i] = circle;
                circles[j] = otherCircle;
              }
  
              if (distance <= 19000) {
                circle.ddx += diffx / distance / 50;
                circle.ddy += diffy / distance / 50;
                otherCircle.ddx -= diffx / distance / 50;
                otherCircle.ddy -= diffy / distance / 50;
              }
              else if (distance > 19000) {
                circle.ddx -= diffx / distance / 1300;
                circle.ddy -= diffy / distance / 1300;
                otherCircle.ddx += diffx / distance / 1300;
                otherCircle.ddy += diffy / distance / 1300;
              }
  
            }
          }
        }
      }

    function dragstarted(event, d) {
      d3.select(this).raise().attr("stroke", "black");
    }

    function dragged(event, d) {
      d.x = event.x;
      d.y = event.y;
      d3.select(this).attr("cx", d.x).attr("cy", d.y);
    }

    function dragended(event, d) {
      d3.select(this).attr("stroke", null);
    }

    function animate() {
      // 1. Update Green Circles
      circles.forEach((circle) => {
        setDirectionTowardsTarget(circle);
        circle.x += circle.dx;
        circle.y += circle.dy;
        boundaryConditions(circle);
      });

      // 2. Render Green Connections
      svg.selectAll("line").remove();
      drawConnections();

      // 3. Render Green Circles
      circleElements
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", d => d.radius);

      // 4. Render Texts on top of the circles
      textElements
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        .raise();

      // 5. Update, Render, and Add Waves
      svg.selectAll(".waveCircle").remove();
      waves.forEach((wave, index) => {
        wave.radius *= 1.015;
        wave.opacity -= 0.080;
        // wave.strokeWidth *= 0.9;
        svg.append("circle")
          .classed("waveCircle", true)
          .attr("cx", songCircle.x)
          .attr("cy", songCircle.y)
          .attr("r", wave.radius)
          .attr("fill", "none")
          .attr("stroke", "lightgreen")
          .attr("stroke-width", wave.strokeWidth)
          .attr("stroke-opacity", wave.opacity)
          .attr("filter", "url(#blurFilter)")
          
          ;
        if (wave.opacity <= 0) {
          waves.splice(index, 1);
        }
      });

      if (Math.random() < 0.03) {
        waves.push({
          radius: songCircle.radius,
          opacity: .7,
          strokeWidth: 5
        });
      }

      drawsongConnections();
      svg.select(".songCircle")
        .attr("cx", songCircle.x)
        .attr("cy", songCircle.y)
        .raise();
      songCircleBackgroundElement
        .attr("cx", songCircle.x)
        .attr("cy", songCircle.y);
      movesongCircle();

      requestAnimationFrame(animate);
    }

    animate();

  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <div style={{ backgroundColor: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <svg ref={svgRef} style={{
          backgroundColor: '#000000',
          display: 'block',
          margin: 'auto'
        }}></svg>
      </div>
        <div className="flex text-[#1eb760] justify-center">
          Your friends:
          {names.map(o => <p key={o}>{o}</p>)}
        </div>
    </div>
  );
}