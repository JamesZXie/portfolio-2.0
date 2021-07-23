import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';
import {
  Box, Button,
} from '@chakra-ui/react';
import LoadFont from '../../../../../assets/fonts/Knewave/Knewave-Regular.ttf';

const Hello = ({}) => {
  const [stopDrawing, setStopDrawing] = useState(false);
  const [font, setFont] = useState();
  //   let font;
  let pg;

  const onResize = () => {
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [onResize]);

  const setDimensions = (p, canvasParent) => {
    if (window.innerWidth <= 1028) {
      setStopDrawing(true);
    }
    if (stopDrawing && window.innerWidth > 1028) setStopDrawing(false);

    p.createCanvas(
      window.innerWidth, window.innerHeight, p.WEBGL,
    ).parent(canvasParent);
  };

  const size = 12;

  const setup = (p, canvasParentRef) => {
    p.createCanvas(
      window.innerWidth, window.innerHeight, p.WEBGL,
    ).parent(canvasParentRef);

    setDimensions(p, canvasParentRef);

    window.addEventListener('resize', (e) => { // TODO: add a removeEventListener
      setDimensions(p, canvasParentRef);
    }, true);

    setFont(p.loadFont(LoadFont));
  };

  const renderText = (p, delay) => {
    p.push();
    p.rotateZ(-p.PI / 12);
    p.fill(0);
    p.translate(-36, 5, 150);
    p.translate(-150 * p.cos(p.frameCount * 0.01 + delay), 0);
    if (p.sin(p.frameCount * 0.01 + delay) >= 0) { p.text('HELLO WORLD', 0, 0); }
    p.pop();
  };

  const renderRibbon = (p) => {
    p.push();
    p.rotateZ(-p.PI / 12);
    // p.rotateX(p.PI / 2);
    p.stroke(0);
    p.fill(300);
    const x = 100;
    const y = 10;
    const z = 150;
    p.quad(-x, y, z, x, y, z, x, -y, z, -x, -y, z);
    p.noStroke();
    p.quad(-2 * x, y, z + 0.1, -x, y, z + 0.1, -x, -y, z + 0.1, -2 * x, -y, z + 0.1);
    p.quad(x, y, z + 0.1, 2 * x, y, z + 0.1, 2 * x, -y, z + 0.1, x, -y, z + 0.1);
    p.pop();
  };

  const renderWorld = (p) => {
    p.push();
    p.rotateZ(-p.PI / 12);
    p.rotateY(p.frameCount * 0.01);
    p.sphere(100);
    p.pop();
  };

  const draw = (p) => {
    p.textFont(font, size);
    p.background(300);
    p.noStroke();
    p.noFill();
    p.stroke(0);
    renderWorld(p);
    renderRibbon(p);
    renderText(p, 0);
    renderText(p, p.PI / 2);
    renderText(p, p.PI);
    renderText(p, 3 * p.PI / 2);
    renderText(p, 2 * p.PI);
  };

  return (
    <Box
      display={['none', 'inherit', 'inherit']}
      className="sketches__canvas sketch__dew"
      id="power-glove__sketches"
      role="heading"
    >

      <Sketch draw={draw} setup={setup} />
    </Box>
  );
};

export default Hello;
