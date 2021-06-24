import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Hero from './Hero';
import Projects from './Projects';
import Background from '../../components/Background';
import './home.scss';
import './Projects/projects.scss';
import AustinColdTile from './Projects/Tiles/AustinColdTile';
import PowerGloveTile from './Projects/Tiles/PowerGloveTile';
import DwAnswersTile from './Projects/Tiles/DwAnswersTile';

const Home = (props) => (
  <Box>
    <Box className="home">
      <Hero />
      <DwAnswersTile />
      <AustinColdTile />
    </Box>
  </Box>
);

Home.propTypes = {
};

export default Home;
