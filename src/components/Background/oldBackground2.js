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
  const numLeaves = 30;
  let leaves = [];
  const offsetScale = 5;

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

  const createLeaf = (p, leaf) => {
    // offset is a number between -maxOffset to maxOffset
    p.push();
    p.translate(leaf.x, leaf.y);
    p.translate(leaf.offset, 0);
    // p.rotate();
    p.noFill();
    p.stroke(0);
    p.circle(0, 0, leaf.leafSize);
    p.pop();
  };

  const createLeaves = (p) => {
    leaves.map((l) => {
      const leaf = l;
      if (leaf.y > dimensions.height) leaf.y = p.int(p.random(-dimensions.height, 0));
      createLeaf(p, leaf);
    });
  };

  const animateLeaves = (p) => {
    leaves = leaves.map((leaf) => ({
      x: leaf.x,
      y: leaf.y + p.map(leaf.initialOffset, -offsetScale, offsetScale, 1, 2),
      offset: leaf.offset + offsetScale * p.sin(p.frameCount * 0.1 + leaf.initialOffset),
      initialOffset: leaf.initialOffset,
      leafSize: leaf.leafSize,
    }));
  };

  const setup = (p, canvasParentRef) => {
    const d = document.documentElement.getBoundingClientRect();
    canvas = p.createCanvas(
      d.x, d.y, // these will be changed in the scss to 100% the second its rendered
    ).parent(canvasParentRef);

    setDimensions(p, canvasParentRef);

    for (let i = 0; i < numLeaves; i += 1) {
      leaves.push({
        x: p.int(p.random(0, dimensions.width)),
        y: p.int(p.random(-dimensions.height, 0)),
        offset: 0,
        initialOffset: p.int(p.random(-offsetScale, offsetScale)),
        leafSize: p.int(p.random(5, 20)),
      });
    }

    window.addEventListener('resize', (e) => { // TODO: add a removeEventListener
      setDimensions(p, canvasParentRef);
    }, true);
  };

  const draw = (p) => {
    if (!stopDrawing) {
      p.background(300);
      createLeaves(p);
      animateLeaves(p);
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
