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

  // let timer;

  // const handleScroll = () => {
  //   if (timer) {
  //     clearTimeout(timer);
  //   }
  //   timer = setTimeout(() => {
  //     const height = window.innerHeight;
  //     const breakPoints = [-height / 2, height / 2, height + height / 2, height * 2 + height / 2];

  //     for (let bp = 1; bp < breakPoints.length - 1; bp += 1) {
  //       if (breakPoints[bp - 1] < window.scrollY && window.scrollY <= breakPoints[bp]) {
  //         window.scroll({
  //           behavior: 'smooth',
  //           top: (breakPoints[bp] + breakPoints[bp - 1]) / 2,
  //         });
  //       }
  //     }
  //   }, 500);
  // };

  // useEffect(() => {
  //   document.addEventListener('scroll', handleScroll);
  //   return () => document.removeEventListener('scroll', handleScroll);
  // }, []);

  const handleLink = (link) => {
    if (location.pathname === link) { return; }
    history.push(link);
  };

  // const test = () => {
  //   document.getElementById('tile--austin-cold').scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <>
      <Box className="nav-container">
        <Flex
          className="nav"
          justifyContent="space-between"
        >
          <Box>
            <Button onClick={() => handleLink('/')}>
              <Text color={location.pathname === '/' ? 'white' : 'black'}>james xie</Text>
            </Button>
          </Box>
          {/* <Box>
          <Button onClick={test}>
          <Text>test button</Text>
          </Button>
        </Box> */}
          {/* <Box>
            <Button onClick={() => handleLink('/about')}>about</Button>
          </Box> */}
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
