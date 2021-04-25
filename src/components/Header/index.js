import React from 'react';
import Sketch from 'react-p5';

const header = () => {
  const a = 300;
  const b = 300;
  const setup = (p5, canvasParentRef) => {
    // Canvas of size 1000x800
    const xyz = p5.createCanvas(1000, 800).parent(canvasParentRef);
  };
  const draw = (p5) => {
    p5.background('rgb(100%,0%,10%)');
  };
  return (
    <div className="App">
      <Sketch setup={setup} draw={draw} className="App" />
    </div>
  );
};

export default header;
