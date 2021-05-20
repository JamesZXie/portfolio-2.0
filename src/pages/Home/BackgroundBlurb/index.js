import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';

import './background-blurb.scss';

const BackgroundBlurb = ({ isOpen, onClose }) => (
  <Flex
    className="background-blurb-container"
    justify="center"
    align="center"
    display={isOpen ? 'flex' : 'none'}
  >
    <Box
      position="relative"
      className="background-blurb"
      width={['100%', '50%', '50%']}
    >
      <Text>
        A graph of a set of equations I found that represents my experience with the design process.
        <br />
        <br />
        The big picture is always unclear when first defining the problem. Once the frame forms, we
        get into the cycle of breaking the product down, building, exploring, and then after we draw insights
        we refine the product - catching a brief glimpse of clarity. Then we iterate, and everything becomes
        messy again, the product becomes more complex... and so on.
        <br />
        <br />
        But as you know, doing good design is not an art. It&apos;s methodical, rooted in research, and reproducible.
        It&apos;s a science.
        <br />
        <br />
        If you&apos;re into math, the set of equations is:
        <br />
        <br />
        x = cos(i) - cos(t * i)^3
        <br />
        y = sin(i) - cos(t/2 * i)^3
        <br />
        <br />
        where t is time and i is the index.
      </Text>

      <Button
        className="close-button"
        position="absolute"
        colorScheme="gray"
        backgroundColor="transparent"
        borderRadius="0"
        mr={3}
        onClick={onClose}
        top=".5rem"
        right="0"
      >
        X
      </Button>
    </Box>
  </Flex>
);

BackgroundBlurb.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BackgroundBlurb;
