import React from 'react';
import Sketch from 'react-p5';
import './background.scss';

import {
  Box,
} from '@chakra-ui/react';

const Background = (props) => {
  let canvas;
  let dimensions;
  let stopDrawing = false;
  let outerHeight;

  const setDimensions = (p, canvasParent) => {
    dimensions = document.documentElement.getBoundingClientRect();
    if (dimensions.width <= 768) {
      stopDrawing = true;
    }
    if (stopDrawing && dimensions.width > 768) stopDrawing = false;
    canvas = p.createCanvas(
      dimensions.width, dimensions.height,
    ).parent(canvasParent);
    outerHeight = window.outerHeight;
  };

  const setup = (p, canvasParentRef) => {
    const d = document.documentElement.getBoundingClientRect();
    canvas = p.createCanvas(
      d.x, d.y,
    ).parent(canvasParentRef);

    setDimensions(p, canvasParentRef);

    window.addEventListener('resize', (e) => { // TODO: add a removeEventListener
      setDimensions(p, canvasParentRef);
    }, true);
  };

  const noise = (p, i) => {
    const scale = 3;
    const speed = 10;
    return 3 * p.map(p.noise(i + p.frameCount / 10), 0, 1, -1, 1);
  };
  const transformSpeed = 40;

  // x = cos(at) - cos(bt)^j;
  // y = sin(ct) - sin(dt)^k;
  const addVertexA = (p, i, scale) => {
    const j = 3;
    const k = 3;
    const a = 1;
    const b = p.frameCount / transformSpeed;
    const c = 1;
    const d = p.frameCount / transformSpeed;

    const x = p.cos(a * i) - p.pow(p.cos(b * i), j);
    const y = p.sin(c * i) - p.pow(p.sin(d * i), k);
    p.curveVertex(scale * x, scale * y);
  };

  // x = cos(at) - cos(bt)^j;
  // y = sin(ct) - sin(dt)^k;
  const addVertexB = (p, i, scale) => {
    const j = 3;
    const k = 3;
    const a = p.frameCount / transformSpeed;
    const b = 1;
    const c = p.frameCount / transformSpeed;
    const d = 1;

    const x = p.cos(a * i) - p.pow(p.cos(b * i), j);
    const y = p.sin(c * i) - p.pow(p.sin(d * i), k);
    p.curveVertex(scale * x, scale * y);
  };

  const draw = (p) => {
    const transformScale = p.sin(p.frameCount / (2 * transformSpeed));
    const sizeScaleA = p.map(p.cos(p.frameCount / (2 * transformSpeed) / 2), -1, 1, 50, 100);
    const sizeScaleB = p.map(p.cos(p.frameCount / (2 * transformSpeed) / 2 + p.PI / 2), -1, 1, 50, 100);
    if (!stopDrawing) {
      p.background(300);
      p.noFill();

      p.push();
      p.beginShape();
      p.translate(dimensions.width / 2 - dimensions.width / 3, outerHeight / 2);
      p.strokeWeight(0.5);
      p.stroke(0);
      for (let i = -5; i < 5; i += 0.01) {
        addVertexA(p, i, 100);
      }
      p.endShape();
      p.pop();
      p.push();
      p.beginShape();
      p.translate(dimensions.width / 2 + dimensions.width / 3, outerHeight / 2);
      p.strokeWeight(0.5);
      for (let i = -5; i < 5; i += 0.01) {
        addVertexB(p, i, 100);
      }
      p.endShape();
      p.pop();
    }
  };

  return (
    <Box display={['none', 'inherit', 'inherit']} className="hero__background" role="heading">
      <Sketch setup={setup} draw={draw} />
    </Box>
  );
};

Background.propTypes = {};

export default Background;
