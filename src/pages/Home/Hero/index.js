import React, { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Image,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import './hero.scss';
import Background from '../../../components/Background';
import ArrowDown from '../../../components/ArrowDown';

const Hero = (props) => {
  const [isBlurbOpen, setIsBlurbOpen] = useState(false);

  return (
    <Box className="hero" id="hero">
      <Background />
      <Flex className="hero__container" justify="center" align="center">
        <Flex wrap="wrap">
          <Box width="100%">
            <Text as="h4" paddingBottom="1rem">Hello</Text>
          </Box>

          <Box className="container__solid-rectangle hero__intro-container">
            <Text paddingBottom="1rem">
              I’m James Xie, a user experience designer at IBM with a background in engineering.
            </Text>
            <Text paddingBottom="1rem">
              Below you’ll find three projects that show:
            </Text>
            <OrderedList>
              <ListItem>
                how I work
              </ListItem>
              <ListItem>
                how I play
              </ListItem>
              <ListItem>
                how I give back
              </ListItem>
            </OrderedList>
          </Box>
        </Flex>
      </Flex>
      <ArrowDown />
    </Box>
  );
};

Hero.propTypes = {};

export default Hero;
