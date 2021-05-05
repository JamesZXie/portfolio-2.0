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
  let outerHeight = 867;
  let columns = [];
  let rows = [];

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

    const { width, height } = dimensions;
    const gutter = 16;
    const numColumns = 12;
    const numRows = 11;

    columns = [];
    rows = [];

    // assign points to the columns and rows
    const sampleFactor = 20; // how many points do you want per line

    // columns (goes across half the width, full height)
    for (let x = 0; x <= width / 2; x += width / numColumns) {
      const leftColumn = [];
      const rightColumn = [];

      for (let y = height; y >= 0; y -= height / numRows / sampleFactor) {
        leftColumn.push({ x: x - gutter / 2, y });
        rightColumn.push({ x: x + gutter / 2, y });
      }

      columns.push(leftColumn);
      columns.push(rightColumn);
    }

    // rows (goes over full height, full width)
    for (let y = outerHeight; y >= 0; y -= outerHeight / numRows) {
      const topRow = [];
      const bottomRow = [];

      for (let x = 0; x <= width; x += width / numColumns / sampleFactor) {
        topRow.push({ x, y: y - gutter / 2 });
        bottomRow.push({ x, y: y + gutter / 2 });
      }

      rows.push(topRow);
      rows.push(bottomRow);
    }

    console.log(JSON.stringify(rows));

    p.redraw();
  };

  const setup = (p, canvasParentRef) => {
    canvas = p.createCanvas(
      10, 10, // these will be changed in the scss to 100% the second its rendered
    ).parent(canvasParentRef);

    setDimensions(p, canvasParentRef);

    window.addEventListener('resize', (e) => { // TODO: add a removeEventListener
      setDimensions(p, canvasParentRef);
    }, true);
  };

  const draw = (p) => {
    p.clear();

    if (!dimensions || stopDrawing) return;

    const gradientIntensyity = 3;

    /**-------------------------------------------
     * ------------- START DRAWING ---------------
     * -------------------------------------------
     */

    p.noFill();

    const rMouseX = p.mouseX;
    const rMouseY = p.mouseY;
    const gradientCutoff = 240;

    columns.map((column) => {
      const strokeWeight = column[0].x / gradientIntensyity;
      if (strokeWeight < gradientCutoff) {
        p.stroke(strokeWeight);
        p.beginShape();
        column.map((pt, i) => {
          const mouseScaleDistance = 0.3
        / (
          1 + Math.abs(p.dist(rMouseX, rMouseY, pt.x, pt.y))
        );
          const mouseScaleCap = 0.05;
          const mouseScale = mouseScaleDistance > mouseScaleCap
            ? mouseScaleCap : mouseScaleDistance;
          const noiseScale = 500;

          p.vertex(
            pt.x + (p.noise(p.frameCount / 40 + i / 10) - 0.5) * noiseScale * mouseScale,
            pt.y + (p.noise(p.frameCount / 40 + i / 10) - 0.5) * noiseScale * mouseScale,
          );
        });
        p.endShape();
      }
    });

    rows.map((row) => {
      const strokeWeight = row[0].y / (gradientIntensyity * 0.75);

      if (strokeWeight < gradientCutoff) {
        p.stroke(strokeWeight);

        p.beginShape();
        row.map((pt, i) => {
          const mouseScaleDistance = 0.3
          / (
            1 + Math.abs(p.dist(rMouseX, rMouseY, pt.x, pt.y))
          );
          const mouseScaleCap = 0.05;
          const mouseScale = mouseScaleDistance > mouseScaleCap
            ? mouseScaleCap : mouseScaleDistance;
          const noiseScale = 500;

          p.vertex(
            pt.x + (p.noise(p.frameCount / 40 + i / 10) - 0.5) * noiseScale * mouseScale,
            pt.y + (p.noise(p.frameCount / 40 + i / 10) - 0.5) * noiseScale * mouseScale,
          );
        });
        p.endShape();
      }
    });
  };

  return (
    <Box className="hero__background" id="helloo">
      <Sketch setup={setup} draw={draw} />
    </Box>
  );
};

Background.propTypes = {};

export default Background;
