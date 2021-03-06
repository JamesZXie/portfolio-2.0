import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';
import {
  Box, Button,
} from '@chakra-ui/react';

const Oysters = ({}) => {
  const [stopDrawing, setStopDrawing] = useState(false);
  const [faces, setFaces] = useState([]);

  const setDimensions = (p, canvasParent) => {
    if (window.innerWidth <= 1028) {
      setStopDrawing(true);
    }
    if (stopDrawing && window.innerWidth > 1028) setStopDrawing(false);

    p.createCanvas(
      window.innerWidth, window.innerHeight,
    ).parent(canvasParent);
  };

  const createFaces = () => {
    const rows = 4;
    const cols = 5;
    const tempFaces = [];

    const xInc = window.innerWidth / cols;
    const yInc = window.innerHeight / rows;

    const randomColor = () => `rgb(${Math.floor(Math.random() * 300)},${Math.floor(Math.random() * 300)},${Math.floor(Math.random() * 300)})`;

    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
        const width = 100 + 50 * Math.random();
        const height = 50 + 50 * Math.random();
        tempFaces.push({
          width,
          height,
          x: j * xInc + xInc / 2,
          y: i * yInc + yInc / 2,
          color: randomColor(),
        });
        tempFaces.push({
          width: width - 25,
          height: height - 30,
          x: j * xInc + xInc / 2,
          y: i * yInc + yInc / 2,
          color: randomColor(),
        });
        tempFaces.push({
          width: width - 50,
          height: height - 40,
          x: j * xInc + xInc / 2,
          y: i * yInc + yInc / 2,
          color: randomColor(),
        });
      }
    }
    setFaces(tempFaces);
  };

  const setup = (p, canvasParentRef) => {
    p.createCanvas(
      window.innerWidth, window.innerHeight,
    ).parent(canvasParentRef);

    setDimensions(p, canvasParentRef);

    window.addEventListener('resize', (e) => { // TODO: add a removeEventListener
      setDimensions(p, canvasParentRef);
    }, true);

    p.frameRate(60);
    createFaces(p);
  };

  //   const drawEyes = (p) => {
  //     const rotation = 45;
  //     const x = 10;
  //     const y = 10;
  //     const width = 12;
  //     const height = 10;

  //     p.push();
  //     p.translate(-x, x);
  //     p.rotate(-rotation);
  //     p.ellipse(0, 0, width, height);
  //     p.pop();
  //     p.push();
  //     p.translate(x, y);
  //     p.rotate(rotation);
  //     p.ellipse(0, 0, width, height);
  //     p.pop();
  //   };

  const drawFace = (p, {
    x, y, width, height, color,
  }) => {
    const increment = 3;
    const a = width / 2;
    const b = height / 2;

    p.push();
    p.translate(x, y);
    // y = b/a sqrt(a^2 - x^2)
    p.beginShape();
    p.fill(color);

    for (let i = -a; i < a; i += increment) {
      const j = b / a * Math.sqrt(a * a - i * i);
      const noise = 0.5 + p.noise(x * 0.02 + i * 0.02 + p.frameCount * 0.01, y * 0.02 + j * 0.02 + p.frameCount * 0.01);
      p.curveVertex(i * noise, j * noise);
    }

    // must be separate loop, we want to go in the opposite direction!!!
    // yes, we can fit this into one loop with clever coding but it doesn't change
    // the O factor and just makes it more confusing.
    for (let i = a; i > -a; i -= increment) {
      const j = -b / a * Math.sqrt(a * a - i * i);
      const noise = 0.5 + p.noise(x * 0.02 + i * 0.02 + p.frameCount * 0.01, y * 0.02 + j * 0.02 + p.frameCount * 0.01);
      p.curveVertex(i * noise, j * noise);
    }
    p.endShape(p.CLOSE);
    // drawEyes(p);
    p.pop();
  };

  const draw = (p) => {
    if (!stopDrawing) {
      p.clear(); // no background needed, in scss.
      p.noStroke();

      p.noFill();

      faces.map((face) => {
        drawFace(p, face);
      });
    }
  };

  return (
    <Box
      display={['none', 'inherit', 'inherit']}
      className="power-glove__sketches"
      id="power-glove__sketches"
      role="heading"
    >
      <Sketch setup={setup} draw={draw} />
    </Box>
  );
};

export default Oysters;
