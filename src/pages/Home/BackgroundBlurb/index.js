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
        This is a set of equations representing the design process. Can you spot cycles of insight and iteration?
        <br />
        <br />
        If you stick on this page for a bit, you&apos;ll start to see some very interesting formations as the
        design process refines our product. Feel free to ask me how the math behind this works!

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
