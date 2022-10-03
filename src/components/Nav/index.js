import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './nav.scss';
import {
  Box, Button, Text, Flex, Image, IconButton,
} from '@chakra-ui/react';

import logo from '../../assets/images/Home/logo.png';
import logo2 from '../../assets/images/Home/logo2.png';
import InstaWhite from '../../assets/images/Home/navIcons/instagram_white.svg';
import LinkedWhite from '../../assets/images/Home/navIcons/linkedin_white.svg';

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
        padding="1rem"
        className="home-button"
        width="100%"
      >
        <Box
          cursor="pointer"
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
              color={location.pathname === '/' ? '#FFFFFF' : '#1D1D1D'}
            >
              XIE
            </Text>
          </Box>
        </Box>
        <Box paddingRight="1rem">
          <Box
            display={location.pathname === '/' ? 'inline-block' : 'none'}
            className="nav__social-icon"
          >
            <IconButton
              className="nav__social-icon__button"
              aria-label="Go to linkedin"
              icon={<Image src={LinkedWhite} />}
              onClick={() => window.open('https://www.linkedin.com/in/jameszexie/', '_blank')}
            />
          </Box>
          {/* <Box
            display={location.pathname === '/' ? 'inline-block' : 'none'}
            className="nav__social-icon"
          >
            <IconButton
              className="nav__social-icon__button"
              aria-label="Go to instagram"
              icon={<Image src={InstaWhite} />}
              onClick={() => window.open('https://www.instagram.com/kalbi.dsgn/', '_blank')}
            />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
