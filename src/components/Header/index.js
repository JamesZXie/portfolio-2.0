import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Sketch from 'react-p5';
import {
  Box,
} from '@chakra-ui/react';
import Knewave from '../../assets/fonts/Knewave/Knewave-Regular.ttf';

import './header.scss';

const Header = ({
  id, ariaLevel, title, center, fontSize, fontColor, strokeWeight, loadFont,
}) => {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    updateState();
  });

  let pts;
  let font;

  let xmin = 0;
  let xmax = 0;
  let ymin = 0;
  let ymax = 0;

  const padding = 10;

  let xTranslate;
  let yTranslate;

  let canvas;
  let canvasInfo;
  const mouseOnCanvas = true;

  const preload = (p) => {
    font = p.loadFont(loadFont);
  };

  const setup = (p, canvasParentRef) => {
    canvasInfo = document.getElementById(id).getBoundingClientRect();
    pts = font.textToPoints(title, 0, 0, fontSize, {
      sampleFactor: 0.5,
      simplifyThreshold: 0,
    });
    // iterate through pts, getting the smallest x value,
    // largest x value, smallest y value, largest y value - and then store them.
    pts.map((pt) => {
      if (pt.x > xmax) xmax = pt.x;
      if (pt.x < xmin) xmin = pt.x;
      if (pt.y > ymax) ymax = pt.y;
      if (pt.y < ymin) ymin = pt.y;
    });
    canvas = p.createCanvas(
      xmax - xmin + padding * 2, ymax - ymin + padding * 2,
    ).parent(canvasParentRef);

    // canvas.mouseOver(() => mouseOnCanvas = true);
    // canvas.mouseOut(() => mouseOnCanvas = false);
    xTranslate = padding - xmin;
    yTranslate = padding - ymin;
  };

  const draw = (p) => {
    p.clear();
    p.translate(xTranslate, yTranslate);
    p.noFill();
    p.stroke(fontColor.r, fontColor.g, fontColor.b);
    p.strokeWeight(strokeWeight);
    p.beginShape();

    const rMouseX = p.mouseX;
    const rMouseY = p.mouseY;

    if (!pts) forceUpdate();
    else {
      for (let i = 0; i < pts.length; i += 1) {
        if (i > 0) {
          const distanceCheck = p.dist(pts[i].x, pts[i].y, pts[i - 1].x, pts[i - 1].y);
          if (distanceCheck > 3) {
            p.endShape(p.CLOSE);
            p.beginShape();
          }
        }

        if (mouseOnCanvas) {
          const mouseScaleDistance = 0.3
          / (
            1 + Math.abs(p.dist(rMouseX, rMouseY, pts[i].x + xTranslate, pts[i].y + yTranslate))
          );
          const mouseScaleCap = 0.05;

          const mouseScale = mouseScaleDistance > mouseScaleCap ? mouseScaleCap : mouseScaleDistance;

          const noiseScale = 500;

          // if the mouse is close to a point, it should be more heavily distorted.
          // base + noise(time + displacement) * noiseScale
          p.vertex(
            pts[i].x + (p.noise(p.frameCount / 40 + i / 10) - 0.5) * noiseScale * mouseScale,
            pts[i].y + (p.noise(p.frameCount / 40 + i / 10) - 0.5) * noiseScale * mouseScale,
          );
        } else {
          p.vertex(
            pts[i].x,
            pts[i].y,
          );
        }
      }
    }
    p.endShape(p.CLOSE);
  };

  return (
    <>
      <Box display={['inherit', 'none', 'none']} className="header">
        <h1>{title}</h1>
      </Box>
      <Box display={['none', 'inherit', 'inherit']} className="header" id={id} role="heading" aria-level={ariaLevel} aria-label={title}>
        <Sketch preload={preload} setup={setup} draw={draw} className={`react-p5--center-${center}`} />
      </Box>
    </>
  );
};

Header.propTypes = {
  id: PropTypes.string,
  loadFont: PropTypes.string,
  fontSize: PropTypes.number,
  title: PropTypes.string.isRequired,
  fontColor: PropTypes.object,
  strokeWeight: PropTypes.number,
  ariaLevel: PropTypes.number,
  center: PropTypes.bool,
};

Header.defaultProps = {
  id: 'default-header',
  loadFont: Knewave,
  fontSize: 50,
  fontColor: { r: 0, g: 0, b: 0 },
  strokeWeight: 1,
  ariaLevel: 2,
  center: false,
};

export default Header;
