import React, { useState } from 'react';
import {
  Box, Text, Button,
} from '@chakra-ui/react';
import Header from '../../../components/Header';
import BackgroundBlurb from '../BackgroundBlurb';
import './hero.scss';
import { InfoOutlineIcon } from '@chakra-ui/icons';

const Hero = (props) => {
  const [isBlurbOpen, setIsBlurbOpen] = useState(false);

  return (
    <Box className="hero">
      <Box className="hero__name-header">
        <Header
          title="JAMES XIE"
          fontSize={100}
          ariaLevel={1}
          key={isBlurbOpen}
        />
        <Text>
          design ~ technology
        </Text>
      </Box>
      <Button
        className="hero__anim-tooltip"
        colorScheme="gray"
        border="2px dashed orange"
        borderRadius="0"
        backgroundColor="white"
        onClick={() => setIsBlurbOpen(true)}
      >
        What am I looking at?
        <InfoOutlineIcon marginLeft="1rem" />
      </Button>
      <BackgroundBlurb isOpen={isBlurbOpen} onClose={() => setIsBlurbOpen(false)} />
    </Box>
  );
};

Hero.propTypes = {};

export default Hero;
