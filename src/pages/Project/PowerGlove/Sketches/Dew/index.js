import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';
import {
  Box, Button,
} from '@chakra-ui/react';

const Oysters = ({}) => {
  const [stopDrawing, setStopDrawing] = useState(false);

  const setDimensions = (p, canvasParent) => {
    if (window.innerWidth <= 1028) {
      setStopDrawing(true);
    }
    if (stopDrawing && window.innerWidth > 1028) setStopDrawing(false);

    p.createCanvas(
      window.innerWidth, window.innerHeight, p.WEBGL,
    ).parent(canvasParent);
  };

  const createCircle = (p, x, y, radius) => {
    p.stroke(x * 3, y * 4 + radius * 2, radius * 12);
    p.ellipse(x, y, radius, radius);
    if (radius > 14) {
      // createCircle(x, y - (3/4 * radius), radius/2);
      // createCircle(x+ (1/4 * radius), y, radius/2);
      // createCircle(x-(1/4*radius), y, radius/2)
      createCircle(p, x + 1 / 3 * radius, y, radius / 2);
      createCircle(p, x - 1 / 3 * radius, y, radius / 2);
      createCircle(p, x, y - radius / 2, radius / 2);
      createCircle(p, x, y + radius / 4, radius / 2);
    }
  };

  const setup = (p, canvasParentRef) => {
    p.createCanvas(
      window.innerWidth, window.innerHeight, p.WEBGL,
    ).parent(canvasParentRef);

    setDimensions(p, canvasParentRef);

    window.addEventListener('resize', (e) => { // TODO: add a removeEventListener
      setDimensions(p, canvasParentRef);
    }, true);

    p.background(0);
    p.noFill();
    p.stroke(300);
    createCircle(p, 0, 0, 200);
  };

  return (
    <Box
      display={['none', 'inherit', 'inherit']}
      className="sketches__canvas sketch__dew"
      id="power-glove__sketches"
      role="heading"
    >

      <Sketch setup={setup} />
    </Box>
  );
};

export default Oysters;
