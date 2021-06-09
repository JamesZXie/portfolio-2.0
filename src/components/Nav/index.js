import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './nav.scss';
import {
  Box, Button, Text, Flex, Image,
} from '@chakra-ui/react';

import logo from '../../assets/images/Logo.png';

const Nav = (props) => {
  const history = useHistory();
  const location = useLocation();

  const handleLink = (link) => {
    if (location.pathname === link) { return; }
    history.push(link);
  };

  return (
    <Box className="nav-container">
      <Flex
        className="nav"
        justifyContent="space-between"
      >
        <Box>
          <Button onClick={() => handleLink('/')}>
            <Text>james xie</Text>
          </Button>
        </Box>
        <Box>
          <Button onClick={() => handleLink('/about')}>about</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Nav;
