import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import Header from '../../../components/Header';
import Background from '../../../components/Background';
import './hero.scss';

const Hero = (props) => (
  <Box className="hero">
    <Background />
    <Box className="hero__name-header">
      <Header
        title="JAMES XIE"
        fontSize={100}
        ariaLevel={1}
      />
      design ~ technology
    </Box>
  </Box>
);

Hero.propTypes = {};

export default Hero;
