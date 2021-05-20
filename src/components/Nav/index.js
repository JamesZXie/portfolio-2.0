import React, { useState } from 'react';
import './nav.scss';
import {
  Box,
} from '@chakra-ui/react';

const Nav = (props) => {
  const [test, setTest] = useState('hello');

  return (
    <Box className="nav-container" paddingLeft="4rem" paddingRight="4rem">
      <Box className="nav">
        You&apos;re watching the cookie get made. Please excuse the mess...
      </Box>
    </Box>
  );
};

export default Nav;
