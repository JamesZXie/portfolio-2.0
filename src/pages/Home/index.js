import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Hero from './Hero';
import Projects from './Projects';
import Background from '../../components/Background';
import './home.scss';

const Home = (props) => (
  <Box>
    <Hero />
    <Background />
    <Box className="home">
      <Projects />
    </Box>
  </Box>
);

Home.propTypes = {
};

export default Home;
