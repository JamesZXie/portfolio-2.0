import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './nav.scss';
import {
  Box, Button, Text, Flex, Image,
} from '@chakra-ui/react';

import logo from '../../assets/images/Home/logo.png';
import logo2 from '../../assets/images/Home/logo2.png';

const Nav = (props) => {
  const history = useHistory();
  const location = useLocation();

  const handleLink = (link) => {
    if (location.pathname === link) { return; }
    history.push(link);
  };

  return (
    <Box className="home-button-container">
      <Box
        cursor="pointer"
        padding="1rem"
        className="home-button"
        onClick={() => handleLink('/')}
      >
        <Image
          display={location.pathname === '/' ? 'none' : 'inline-block'}
          verticalAlign="top"
          src={logo}
          alt="logo"
          height="1.5rem"
          marginRight=".5rem"
        />
        <Image
          display={location.pathname === '/' ? 'inline-block' : 'none'}
          verticalAlign="top"
          src={logo2}
          alt="logo"
          height="1.5rem"
          marginRight=".5rem"
        />
        <Box
          display="inline-block"
          paddingTop="1px"
        >
          <Text
            color={location.pathname === '/' ? '#FAFAFA' : '#1A202C'}
          >
            XIE
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
