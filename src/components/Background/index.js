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
  const numLeaves = 1;
  let leaves = [];
  const leafSize = 15;
  const maxOffset = 2;

  const setDimensions = (p, canvasParent) => {
    dimensions = document.getElementsByClassName('hero__background')[0].getBoundingClientRect();
    if (dimensions.width <= 768) {
      stopDrawing = true;
    }
    if (stopDrawing && dimensions.width > 768) stopDrawing = false;
    canvas = p.createCanvas(
      dimensions.width, dimensions.height,
    ).parent(canvasParent);
    outerHeight = window.outerHeight;
  };

  const createLeaf = (p, vector, offset = 0) => {
    // offset is a number between -maxOffset to maxOffset
    p.push();
    p.translate(vector.x, vector.y);
    p.translate(offset, 0);
    p.rotate(offset);
    p.noFill();
    p.stroke(0);
    p.arc(
      0,
      2.5,
      leafSize,
      leafSize,
      -p.PI / 180 * 30, p.PI / 180 * 210,
    );
    p.arc(
      0,
      -2.5,
      leafSize,
      leafSize, p.PI / 180 * 12, p.PI / 180 * 168,
    );
    p.pop();
  };

  const createLeaves = (p) => {
    leaves.map((leaf) => {
      createLeaf(p, leaf, leaf.offset);
    });
  };

  const animateLeaves = (p) => {
    leaves = leaves.map((leaf) => ({
      x: leaf.x,
      y: leaf.y + 1,
      offset: p.map(p.noise(leaf.x, leaf.y), 0, 1, -maxOffset, maxOffset),
    }));
  };

  const setup = (p, canvasParentRef) => {
    canvas = p.createCanvas(
      10, 10, // these will be changed in the scss to 100% the second its rendered
    ).parent(canvasParentRef);

    setDimensions(p, canvasParentRef);

    for (let i = 0; i < numLeaves; i += 1) {
      leaves.push({
        x: p.int(p.random(0, dimensions.width)),
        y: 100,
        offset: 0,
      });
    }

    window.addEventListener('resize', (e) => { // TODO: add a removeEventListener
      setDimensions(p, canvasParentRef);
    }, true);
  };

  const draw = (p) => {
    p.background(300);
    createLeaves(p);
    animateLeaves(p);
  };

  return (
    <Box display={['none', 'inherit', 'inherit']} className="hero__background" role="heading">
      {/* <Sketch setup={setup} draw={draw} /> */}
    </Box>
  );
};

Background.propTypes = {};

export default Background;
