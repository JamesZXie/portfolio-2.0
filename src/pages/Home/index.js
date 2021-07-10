import React, { useState } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import Hero from './Hero';
import './home.scss';
import './Projects/projects.scss';
import AustinColdTile from './Projects/Tiles/AustinColdTile';
import PowerGloveTile from './Projects/Tiles/PowerGloveTile';
import DwAnswersTile from './Projects/Tiles/DwAnswersTile';

const Home = (props) => {
  const renderSideMenu = () => {
    const handleClick = (id) => {
      document.getElementById(id).scrollIntoView();
    };

    return (
      <Flex className="side-menu-container">
        <Flex
          direction="column"
          className="side-menu"
          color="white"
        >
          <Button
            className="side-menu__item"
            onClick={() => handleClick('hero')}
          >
            intro
          </Button>
          <Button
            className="side-menu__item"
            onClick={() => handleClick('tile--dw-answers')}
          >
            work
          </Button>
          <Button
            className="side-menu__item"
            onClick={() => handleClick('tile--power-glove')}
          >
            grow
          </Button>
          <Button
            className="side-menu__item"
            onClick={() => handleClick('tile--austin-cold')}
          >
            give
          </Button>
        </Flex>
      </Flex>
    );
  };

  return (
    <Box className="home" id="home">
      {renderSideMenu()}
      <Hero />
      <DwAnswersTile />
      <PowerGloveTile />
      <AustinColdTile />
    </Box>
  );
};

Home.propTypes = {
};

export default Home;
