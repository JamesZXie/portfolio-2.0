import React, { useEffect } from 'react';
import Sketch from 'react-p5';
import './background.scss';
import {
  Box, Circle,
} from '@chakra-ui/react';
import Poppins from '../../assets/fonts/Poppins/Poppins-Bold.ttf';

const Background = (props) => {
  let canvas;
  let font;
  const speed = 12;
  const textSize = 300;
  let box = { height: window.innerHeight - 32, width: window.innerWidth - 32 };
  let stopDrawing = false;
  const boxOffset = 22;

  const findRandomX = () => 100;
  const findRandomY = () => window.innerHeight / 2 - textSize / 2;
  const findRandomDir = () => ['left', 'right', 'up', 'down'][Math.floor(Math.random() * 4)];

  let text = [
    {
      l: 'J',
      x: findRandomX(),
      y: findRandomY(),
      currDirection: { x: speed, y: 0, d: 'left' },
      newDirection: undefined,
    },
    {
      l: 'A',
      x: findRandomX(),
      y: findRandomY(),
      currDirection: { x: speed, y: 0, d: 'left' },
      newDirection: undefined,
    },
    {
      l: 'M',
      x: findRandomX(),
      y: findRandomY(),
      currDirection: { x: speed, y: 0, d: 'left' },
      newDirection: undefined,
    },
    {
      l: 'E',
      x: findRandomX(),
      y: findRandomY(),
      currDirection: { x: speed, y: 0, d: 'left' },
      newDirection: undefined,
    },
    {
      l: 'S',
      x: findRandomX(),
      y: findRandomY(),
      currDirection: { x: speed, y: 0, d: 'left' },
      newDirection: undefined,
    },
    {
      l: 'X',
      x: findRandomX(),
      y: findRandomY(),
      currDirection: { x: speed, y: 0, d: 'left' },
      newDirection: undefined,
    },
    {
      l: 'I',
      x: findRandomX(),
      y: findRandomY(),
      currDirection: { x: speed, y: 0, d: 'left' },
      newDirection: undefined,
    },
    {
      l: 'E',
      x: findRandomX(),
      y: findRandomY(),
      currDirection: { x: speed, y: 0, d: 'left' },
      newDirection: undefined,
    },
  ];

  const setDimensions = (p, canvasParent) => {
    if (window.innerWidth <= 1028) {
      stopDrawing = true;
    }
    if (stopDrawing && window.innerWidth > 1028) stopDrawing = false;

    canvas = p.createCanvas(
      window.innerWidth, window.innerHeight,
    ).parent(canvasParent);

    box = { height: window.innerHeight - 32, width: window.innerWidth - 32 };
  };

  const preload = (p) => {
    font = p.loadFont(Poppins);
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
    const shadowOffset = 8;

    text.map((l) => {
      // p.fill(255, 0, 0);
      // p.text(l.l, l.x + shadowOffset, l.y + shadowOffset);
      // p.fill(300);
      p.text(l.l, l.x, l.y);
    });
  };

  const getCollision = (p, l, force = false) => {
    let colliding = force;
    const collisions = [];
    const padding = 120;

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
      if (newDirection === undefined && Math.floor(Math.random() * 40) === 0) newDirection = getCollision(p, l, true);
      if (newDirection) direction = adjustDirection(p, l, newDirection);

      return ({
        ...l, x: l.x + direction.x, y: l.y + direction.y, currDirection: direction,
      });
    });
  };

  const drawDashedBox = (p, rect, offset = { x: 0, y: 0 }) => {
    // blah
    // take a scale, multiply it with the box + rectangle grid to cover up and create dashes
    const xGutter = 31;
    const yGutter = 32;
    p.push();
    p.noFill();
    p.translate(offset.x, offset.y);
    p.stroke(255, 138, 0);
    p.strokeWeight(2);
    p.rect(0, 0, rect.width, rect.height);
    p.fill(0, 71, 255);
    p.noStroke();
    p.push();
    p.translate(0, -10);
    for (let i = 10; i < rect.width - 10; i += xGutter) {
      p.rect(i, 0, 10, rect.height + 20);
    }
    p.pop();
    p.push();
    p.translate(-10, -0);
    for (let i = 10; i < rect.height - 10; i += yGutter) {
      p.rect(0, i, rect.width + 20, 10);
    }
    p.pop();
    p.pop();
  };

  const draw = (p) => {
    // const transformScale = p.sin(p.frameCount / (2 * transformSpeed));
    // const sizeScaleA = p.map(p.cos(p.frameCount / (2 * transformSpeed) / 2), -1, 1, 50, 100);
    // const sizeScaleB = p.map(p.cos(p.frameCount / (2 * transformSpeed) / 2 + p.PI / 2), -1, 1, 50, 100);
    if (!stopDrawing) {
      p.clear(); // no background needed, in scss.
      // p.fill(300);
      p.stroke(300);
      p.noFill();
      p.translate(-85, 120);
      drawText(p);
      animateText(p);
    }
  };

  return (
    <Box
      display={['none', 'inherit', 'inherit']}
      className="hero__background"
      role="heading"
    >
      <Box className="dashed-background" />
      <Sketch setup={setup} draw={draw} preload={preload} />
    </Box>
  );
};

Background.propTypes = {};

export default Background;
