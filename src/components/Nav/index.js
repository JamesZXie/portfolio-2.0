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
    <>
      <Box className="home-button-container">
        <Button className="home-button" onClick={() => handleLink('/')}>
          <Text color={location.pathname === '/' ? 'white' : 'black'}>james xie</Text>
        </Button>
      </Box>
    </>
  );
};

export default Nav;
