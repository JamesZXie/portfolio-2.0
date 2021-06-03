import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './nav.scss';
import {
  Box, Button, Text, Flex, Image,
} from '@chakra-ui/react';

import logo from '../../assets/images/Logo.png';

const Nav = (props) => {
  const [opacity, setOpacity] = useState(0);
  const history = useHistory();
  const location = useLocation();

  const handleScroll = () => {
    setOpacity(window.scrollY / window.innerHeight);
  };

  const handleLink = (link) => {
    if (location.pathname === link) { return; }
    history.push(link);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => { document.removeEventListener('scroll', handleScroll); };
  });

  return (
    <Box className="nav-container">
      <Flex
        className="nav"
        backgroundColor="rgba(0, 71, 255)"
        boxShadow={`0px 4px 6px 0px rgba(20, 20, 20, ${opacity > 0.3 ? 0.3 : opacity})`}
        justifyContent="space-between"
      >
        <Box>
          <Button onClick={() => handleLink('/')}>
            <Image src={logo} display="inline-block" height="30px" marginRight="1rem" />
            <Text>james xie</Text>
          </Button>
        </Box>
        <Box>
          <Button>work</Button>
          <Button>about</Button>
          <Button>contact</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Nav;
