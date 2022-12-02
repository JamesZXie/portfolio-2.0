import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';
import './background.scss';
import {
  Box, Button,
} from '@chakra-ui/react';

const Background = (props) => {
  let kaja = false;

  // p5 variables
  let canvas;
  let font;
  const speed = 10;
  const textSize = 16;
  const boxOffset = 22;
  const numLetters = 60;
  let stopDrawing = false;
  let box = { height: window.innerHeight - 32, width: window.innerWidth - 32 };

  const findRandomX = () => 100;
  const findRandomY = () => window.innerHeight / 2 - textSize / 2;
  const findRandomDir = () => ['left', 'right', 'up', 'down'][Math.floor(Math.random() * 4)];
  const findRandomLetter = () => ['J', 'X'][Math.floor(Math.random() * 2)];

  const [text, setText] = useState([]);

  const createText = () => {
    const newText = [];
    for (let i = 0; i < numLetters; i += 1) {
      newText.push(
        {
          l: 'x',
          x: findRandomX(),
          y: findRandomY(),
          currDirection: { x: speed, y: 0, d: findRandomDir() },
          newDirection: undefined,
        },
      );
    }
    setText(newText);
  };

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

  const setup = (p, canvasParentRef) => {
    const d = document.documentElement.getBoundingClientRect();
    canvas = p.createCanvas(
      d.x, d.y,
    ).parent(canvasParentRef);

    setDimensions(p, canvasParentRef);
    createText();

    window.addEventListener('resize', (e) => { // TODO: add a removeEventListener
      setDimensions(p, canvasParentRef);
    }, true);
    // p.textFont(font);
    p.textSize(textSize);
    p.frameRate(60);
  };

  const drawText = (p) => {
    const shadowOffset = 2;

    text.map((l) => {
      // p.text(l.l, l.x + shadowOffset, l.y + shadowOffset);
      // p.fill(300);
      p.text(l.l, l.x, l.y);
    });
  };

  const getCollision = (p, l, force = false) => {
    let colliding = force;
    const collisions = [];
    const padding = 32;

    if (l.currDirection.d === 'left' && l.x - speed < padding) colliding = true;
    if (l.currDirection.d === 'right' && l.x + speed > box.width - padding) colliding = true;
    if (l.currDirection.d === 'up' && l.y - speed < padding) colliding = true;
    if (l.currDirection.d === 'down' && l.y + speed > box.height - padding) colliding = true;

    if (colliding) {
      // Line below reads:
      //   if the projectile is going in the direction "right",
      //   or if it is hitting the left edge, don't let it go "left".
      if (l.currDirection.d === 'right' || l.x - speed < padding) collisions.push('left');
      if (l.currDirection.d === 'left' || l.x + speed > box.width - padding) collisions.push('right');
      if (l.currDirection.d === 'up' || l.y + speed > box.height - padding) collisions.push('down');
      if (l.currDirection.d === 'down' || l.y - speed < padding) collisions.push('up');

      // if the mouse is to the right of projectile and 'right' is not excluded, toss a coin. If heads, go towards the mouse.
      if (p.mouseX > l.x && !collisions.includes('right')) collisions.push('left');
      if (p.mouseX < l.x && !collisions.includes('left')) collisions.push('right');
      if (p.mouseY > l.y && !collisions.includes('down')) collisions.push('up');
      if (p.mouseY < l.y && !collisions.includes('up')) collisions.push('down');

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
    const collisionFrequency = 7;
    const newText = text.map((l, i) => {
      // check for collisions
      let direction = l.currDirection;
      let newDirection = getCollision(p, l);
      // Randomly adjustdirection for the lead letter (J)
      if (!kaja) {
        if (newDirection === undefined && Math.floor(Math.random() * collisionFrequency) === 0) newDirection = getCollision(p, l, true);
        if (newDirection) direction = adjustDirection(p, l, newDirection);
      }

      return ({
        ...l, x: l.x + direction.x, y: l.y + direction.y, currDirection: direction,
      });
    });
    setText(newText);
  };

  const everybodyKaja = () => {
    kaja = true;
    const newText = text.map((l) => ({
      ...l,
      currDirection: { x: 0, y: -speed, d: 'up' },
    }));
    setText(newText);
  };

  const handleScroll = async (e) => {
    if (window.scrollY === 0) {
      createText();
      kaja = false;
    }
    if (kaja === false && window.scrollY > 100) {
      everybodyKaja();
    }
  };

  // useEffect(() => {
  //   document.addEventListener('scroll', handleScroll);
  //   return () => document.removeEventListener('scroll', handleScroll);
  // });

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
      p.push();
      p.stroke(20, 0, 255);
      p.strokeWeight(1);
      p.noFill();
      p.ellipse(p.mouseX, p.mouseY, 15, 15);
      p.pop();
      p.fill(93, 93, 93);
      p.noStroke();
      p.translate(8, 16);
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
      <Sketch setup={setup} draw={draw} />
    </Box>
  );
};

Background.propTypes = {};

export default Background;
