import React from 'react';
import Sketch from 'react-p5';
import Roboto from '../../assets/fonts/Roboto/Roboto-Regular.ttf';

const header = (props) => {
  // const a = 300;
  // const b = 300;
  // const setup = (p, canvasParentRef) => {
  //   console.log({ ...p });
  //   // Canvas of size 1000x800
  //   const xyz = createCanvas(1000, 800).parent(canvasParentRef);
  // };
  // const draw = (p) => {
  //   p.background('rgb(100%,0%,10%)');
  // };

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
    font = p.loadFont(props.font ? props.font : Roboto);
  };

  const setup = (p, canvasParentRef) => {
    canvasInfo = document.getElementById(props.id ? props.id : 'default-header').getBoundingClientRect();
    pts = font.textToPoints(props.title ? props.title : 'missing title', 0, 0, props.size ? props.size : 50, {
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
    const { bg } = props;
    if (bg) p.background(bg.r, bg.g, bg.b);
    else p.background(300);
    p.translate(xTranslate, yTranslate);
    p.noFill();
    p.stroke(100);
    p.beginShape();

    const rMouseX = p.mouseX;
    const rMouseY = p.mouseY;

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
    p.endShape(p.CLOSE);
  };
  return (
    <div className="header" id={props.id ? props.id : 'default-header'}>
      <Sketch preload={preload} setup={setup} draw={draw} />
    </div>
  );
};

export default header;
