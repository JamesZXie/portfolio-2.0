import React, { useState } from 'react';
import './nav.scss';
import {
  Box,
} from '@chakra-ui/react';

const Nav = (props) => {
  const [test, setTest] = useState('hello');

  return (
    <Box className="nav-container">
      <Box className="nav" />
    </Box>
  );
};

export default Nav;
