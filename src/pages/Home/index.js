import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Hero from './Hero';
import './home.scss';
import './Projects/projects.scss';
import AustinColdTile from './Projects/Tiles/AustinColdTile';
import PowerGloveTile from './Projects/Tiles/PowerGloveTile';
import DwAnswersTile from './Projects/Tiles/DwAnswersTile';

const Home = (props) => (
  <Box className="home" id="home">
    <Hero />
    <DwAnswersTile />
    <PowerGloveTile />
    <AustinColdTile />
  </Box>
);

Home.propTypes = {
};

export default Home;
