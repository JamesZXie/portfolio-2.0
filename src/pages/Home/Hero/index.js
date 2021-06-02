import React, { useState } from 'react';
import {
  Box, Text, Button,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import Header from '../../../components/Header';
import BackgroundBlurb from '../BackgroundBlurb';
import './hero.scss';

const Hero = (props) => {
  const [isBlurbOpen, setIsBlurbOpen] = useState(false);

  return (
    <Box className="hero">
      <Box className="hero__name-header">
        <Header
          title="JAMES XIE"
          fontSize={100}
          ariaLevel={1}
          fontColor={{ r: 255, g: 255, b: 255 }}
          key={isBlurbOpen}
        />
        <Text className="hero__caption" fontWeight="bold">
          design ~ technology
        </Text>
      </Box>
    </Box>
  );
};

Hero.propTypes = {};

export default Hero;
