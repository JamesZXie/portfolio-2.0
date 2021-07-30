import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';
import {
  Box, Button,
} from '@chakra-ui/react';

const Smile = ({}) => {
  const [stopDrawing, setStopDrawing] = useState(false);
  const [capture, setCapture] = useState(undefined);
  const [cTracker, setCTracker] = useState(undefined);
  const [startSketch, setStartSketch] = useState(false);

  const onResize = () => {
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      setStartSketch(false);
    };
  }, [onResize]);

  const setDimensions = (p, canvasParent) => {
    if (window.innerWidth <= 1028) {
      setStopDrawing(true);
    }
    if (stopDrawing && window.innerWidth > 1028) setStopDrawing(false);

    p.createCanvas(
      window.innerWidth, window.innerHeight,
    ).parent(canvasParent);
  };

  const setup = (p, canvasParentRef) => {
    p.createCanvas(
      window.innerWidth, window.innerHeight,
    ).parent(canvasParentRef);

    setDimensions(p, canvasParentRef);

    window.addEventListener('resize', (e) => { // TODO: add a removeEventListener
      setDimensions(p, canvasParentRef);
    }, true);
    const cap = p.createCapture(p.VIDEO);
    cap.size(window.innerWidth, window.innerHeight);
    cap.hide();
    setCapture(cap);

    const ct = new clm.tracker();
    ct.init();
    ct.start(cap.elt);
    setCTracker(ct);
    p.frameRate(30);
  };

  const draw = (p) => {
    if (!stopDrawing) {
      p.background(300);
      p.translate(window.innerWidth, 0);
      const positions = cTracker.getCurrentPosition();
      if (positions) {
        positions.map((pos) => {
          p.fill(255, 0, 0);
          p.noStroke();
          p.circle(pos[0] * -1, pos[1], 3);
        });
      }
    }
  };

  return (
    <Box
      display={['none', 'inherit', 'inherit']}
      className="sketches__canvas sketch__dew"
      id="power-glove__sketches"
      role="heading"
      height="100vh"
    >
      <Box
        position="absolute"
        top="3rem"
        left="1rem"
      >
        Allow access to camera.
      </Box>
      <Button onClick={() => setStartSketch(true)}>
        hiiiii
      </Button>
      <Sketch draw={draw} setup={setup} />
      {/* {startSketch ? <Sketch draw={draw} setup={setup} /> : ''} */}
    </Box>
  );
};

export default Smile;
