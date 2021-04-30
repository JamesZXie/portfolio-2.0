import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Hero from './Hero';
import Projects from './Projects';
import './home.scss';

const Home = (props) => (
  <Box>
    <Hero />
    <Box className="home">
      <Projects />
    </Box>
  </Box>
);

Home.propTypes = {
};

export default Home;
