import React from 'react';
import Sketch from 'react-p5';
import Header from '../../../components/Header';
import './hero.scss';

const Hero = (props) => {
  let canvas;
  let dimensions;

  const setDimensions = (ref) => {
    dimensions = ref.childNodes[0].getBoundingClientRect();
  };

  const setup = (p, canvasParentRef) => {
    canvas = p.createCanvas(
      1, 1, // these will be changed in the scss to 100% the second its rendered
    ).parent(canvasParentRef);

    setDimensions(canvasParentRef);

    window.addEventListener('resize', (e) => {
      setDimensions(canvasParentRef);
    }, true);
  };

  const draw = (p) => {
    p.background(300);
    p.stroke(0);
    const { width, height } = dimensions;
    const padding = 10;
    const columns = 5;

    // create vertical grid
    for (let x = 0; x <= width; x += width / columns) {
      p.line(x, 0, x, height);
    }
  };

  return (
    <div className="hero">
      <div className="hero__name-header">
        <Header title="JAMES XIE" />
        design and technology
      </div>
      <div className="hero__background" id="helloo">
        <Sketch setup={setup} draw={draw} />
      </div>
    </div>
  );
};

Hero.propTypes = {};

export default Hero;
