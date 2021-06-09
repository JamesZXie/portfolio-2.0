import React from 'react';
import './projects.scss';
import AustinColdTile from './Tiles/AustinColdTile';
import PowerGloveTile from './Tiles/PowerGloveTile';
import DwAnswersTile from './Tiles/DwAnswersTile';

const Projects = (props) => (
  <div className="projects">
    <AustinColdTile />
    {/* <PowerGloveTile />
    <DwAnswersTile /> */}
  </div>
);

export default Projects;
