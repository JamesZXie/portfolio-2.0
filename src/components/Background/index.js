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
  const speed = 5;
  const textSize = 48;
  const changeDelay = 0;
  const box = { height: 200, width: 400 };
  const currDelay = 0;
  let dimensions;
  let stopDrawing = false;
  let outerHeight;
  let text = [
    {
      l: 'J', x: 20, y: 50, currDirection: { x: speed, y: 0, d: 'right' }, newDirection: undefined,
    },
    {
      l: 'A', x: 60, y: 50, currDirection: { x: speed, y: 0, d: 'right' }, newDirection: undefined,
    },
    {
      l: 'M', x: 108, y: 50, currDirection: { x: speed, y: 0, d: 'right' }, newDirection: undefined,
    },
    {
      l: 'E', x: 163, y: 50, currDirection: { x: speed, y: 0, d: 'right' }, newDirection: undefined,
    },
    {
      l: 'S', x: 210, y: 50, currDirection: { x: speed, y: 0, d: 'right' }, newDirection: undefined,
    },
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
    const padding = textSize;

    if (l.currDirection.d === 'left' && l.x - speed < padding) colliding = true;
    if (l.currDirection.d === 'right' && l.x + speed > box.width - padding) colliding = true;
    if (l.currDirection.d === 'up' && l.y - speed < padding) colliding = true;
    if (l.currDirection.d === 'down' && l.y + speed > box.height - padding) colliding = true;

    if (colliding) {
      if (l.currDirection.d === 'right' || l.x - speed < padding) collisions.push('left');
      if (l.currDirection.d === 'left' || l.x + speed > box.width - padding) collisions.push('right');
      if (l.currDirection.d === 'up' || l.y + speed > box.height - padding) collisions.push('down');
      if (l.currDirection.d === 'down' || l.y - speed < padding) collisions.push('up');

      const directions = ['up', 'down', 'left', 'right'].filter((d) => !collisions.includes(d));
      return directions[Math.floor(Math.random() * directions.length)];
    }

    return undefined;
  };

  const adjustDirection = (p, l, newDirection) => {
    let direction;

    // if it has a newDirection e.g. it's not the first letter.

    if (newDirection === 'left') {
      direction = { x: -speed, y: 0, d: 'left' };
    }
    if (newDirection === 'right') {
      direction = { x: speed, y: 0, d: 'right' };
    }
    if (newDirection === 'down') {
      direction = { x: 0, y: speed, d: 'down' };
    }
    if (newDirection === 'up') {
      direction = { x: 0, y: -speed, d: 'up' };
    }
    return direction;
  };

  const animateText = (p) => {
    text = text.map((l, i) => {
      // check for collisions
      let direction = l.currDirection;
      let newDirection = getCollision(p, l);
      // Randomly adjustdirection for the lead letter (J)
      if (newDirection === undefined && Math.floor(Math.random() * 50) === 0) newDirection = getCollision(p, l, true);
      if (newDirection) direction = adjustDirection(p, l, newDirection);

      return ({
        ...l, x: l.x + direction.x, y: l.y + direction.y, currDirection: direction,
      });
    });
  };

  const drawDashedBox = (p, rect, offset = { x: 0, y: 0 }) => {
    // blah
    // take a scale, multiply it with the box + rectangle grid to cover up and create dashes
    const gutter = 30;
    p.push();
    p.noFill();
    p.translate(offset.x, offset.y);
    p.stroke(300);
    p.strokeWeight(2);
    p.rect(0, 0, rect.width, rect.height);
    p.fill(0, 71, 255);
    p.noStroke();
    p.translate(0, -10);
    for (let i = 5; i < rect.width; i += gutter) {
      p.rect(i, 0, 10, rect.height + 20);
    }
    p.pop();
  };

  const draw = (p) => {
    // const transformScale = p.sin(p.frameCount / (2 * transformSpeed));
    // const sizeScaleA = p.map(p.cos(p.frameCount / (2 * transformSpeed) / 2), -1, 1, 50, 100);
    // const sizeScaleB = p.map(p.cos(p.frameCount / (2 * transformSpeed) / 2 + p.PI / 2), -1, 1, 50, 100);
    if (!stopDrawing) {
      p.background(0, 71, 255);
      p.strokeWeight(2);
      p.translate(dimensions.width / 2 - box.width - 20, window.outerHeight / 2 - box.height);
      p.fill(300);
      p.stroke(300);

      drawDashedBox(p, { width: box.width - 20, height: box.height - 30 }, { x: 20, y: 0 });
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
