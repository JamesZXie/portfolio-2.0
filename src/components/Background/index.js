import React, { useEffect } from 'react';
import Sketch from 'react-p5';
import './background.scss';
import {
  Box, Circle,
} from '@chakra-ui/react';
import RobotoCondensed from '../../assets/fonts/RobotoCondensed/RobotoCondensed-Regular.ttf';

const Background = (props) => {
  let canvas;
  let font;
  const speed = 10;
  const textSize = 48;
  let dimensions;
  let stopDrawing = false;
  let outerHeight;
  let text = [
    {
      l: 'J', x: 50, y: 50, currDirection: { x: speed, y: 0, d: 'right' }, newDirection: undefined,
    },
    // {
    //   l: 'A', x: 40, y: 0, currDirection: 'right', newDirection: undefined,
    // },
    // {
    //   l: 'M', x: 88, y: 0, currDirection: 'right', newDirection: undefined,
    // },
    // {
    //   l: 'E', x: 143, y: 0, currDirection: 'right', newDirection: undefined,
    // },
    // {
    //   l: 'S', x: 190, y: 0, currDirection: 'right', newDirection: undefined,
    // },
  ];

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

  const preload = (p) => {
    font = p.loadFont(RobotoCondensed);
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
    p.textFont(font);
    p.textSize(textSize);
  };

  const drawText = (p) => {
    text.map((l) => {
      p.text(l.l, l.x, l.y);
    });
  };

  const getCollision = (p, l, force = false) => {
    let colliding = force;
    const collisions = [];

    if (l.currDirection.d === 'left' && l.x - speed < textSize) colliding = true;
    if (l.currDirection.d === 'right' && l.x + speed > dimensions.width - textSize) colliding = true;
    if (l.currDirection.d === 'up' && l.y - speed < textSize) colliding = true;
    if (l.currDirection.d === 'down' && l.y + speed > dimensions.height - textSize) colliding = true;

    if (colliding) {
      if (l.currDirection.d === 'right' || l.x - speed < textSize) collisions.push('left');
      if (l.currDirection.d === 'left' || l.x + speed > dimensions.width - textSize) collisions.push('right');
      if (l.currDirection.d === 'up' || l.y + speed > dimensions.height - textSize) collisions.push('down');
      if (l.currDirection.d === 'down' || l.y - speed < textSize) collisions.push('up');

      const directions = ['up', 'down', 'left', 'right'].filter((d) => !collisions.includes(d));
      return directions[Math.floor(Math.random() * directions.length)];
    }

    return undefined;
  };

  const adjustDirection = (p, newDirection) => {
    let direction;
    if (newDirection === 'left') direction = { x: -speed, y: 0, d: 'left' };
    if (newDirection === 'right') direction = { x: speed, y: 0, d: 'right' };
    if (newDirection === 'down') direction = { x: 0, y: speed, d: 'down' };
    if (newDirection === 'up') direction = { x: 0, y: -speed, d: 'up' };
    return direction;
  };

  const animateText = (p) => {
    text = text.map((l, i) => {
      // check for collisions
      let direction = l.currDirection;
      let newDirection = getCollision(p, l);
      if (newDirection === undefined && Math.floor(Math.random() * 10) === 9) newDirection = getCollision(p, l, true);
      if (newDirection) direction = adjustDirection(p, newDirection);

      return ({
        ...l, x: l.x + direction.x, y: l.y + direction.y, currDirection: direction,
      });
    });
  };

  const draw = (p) => {
    // const transformScale = p.sin(p.frameCount / (2 * transformSpeed));
    // const sizeScaleA = p.map(p.cos(p.frameCount / (2 * transformSpeed) / 2), -1, 1, 50, 100);
    // const sizeScaleB = p.map(p.cos(p.frameCount / (2 * transformSpeed) / 2 + p.PI / 2), -1, 1, 50, 100);
    if (!stopDrawing) {
      p.background(0, 71, 255);
      p.fill(300);
      p.stroke(300);
      p.strokeWeight(2);
      drawText(p);
      animateText(p);

      // J - 40 - A - 48 - M - 55 - E - 47 - S
      // p.text('J', 0, 10);
      // p.text('A', 40, 10);
      // p.text('M', 88, 10);
      // p.text('E', 143, 10);
      // p.text('S', 190, 10);
    }
  };

  return (
    <Box display={['none', 'inherit', 'inherit']} className="hero__background" role="heading">
      <Sketch setup={setup} draw={draw} preload={preload} />
    </Box>
  );
};

Background.propTypes = {};

export default Background;
