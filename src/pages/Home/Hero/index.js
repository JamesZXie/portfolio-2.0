import React, { useState } from 'react';
import {
  Box, Text, Button, Image,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import Header from '../../../components/Header/oldHeader';
import './hero.scss';
import logo from '../../../assets/images/Logo.png';

const Hero = (props) => {
  const [isBlurbOpen, setIsBlurbOpen] = useState(false);

  return (
    <Box className="hero">
      <Box className="hero__name-header">
        <Image src={logo} height="50px" marginBottom="1rem" />
        <Text as="h2">I&apos;m James,</Text>
        <Text className="hero__caption">
          a product designer with a background in engineering. I bridge the gap between design and development, bringing out the full potential of my team by enabling their imaginations to push the boundaries of technical feasibility.
        </Text>
      </Box>
    </Box>
  );
};

Hero.propTypes = {};

export default Hero;
