import React, { useState } from 'react';
import {
  Box, Text, Button, Image,
} from '@chakra-ui/react';
import './hero.scss';

const Hero = (props) => {
  const [isBlurbOpen, setIsBlurbOpen] = useState(false);

  return (
    <Box className="hero">
      <Box className="hero__name-header">
        <Text as="h2">I&apos;m James,</Text>
        <Text className="hero__caption">
          a product designer with a background in engineering.
        </Text>
      </Box>
    </Box>
  );
};

Hero.propTypes = {};

export default Hero;
