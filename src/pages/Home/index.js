import React, { useState } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import Hero from './Hero';
import './home.scss';
import './Projects/projects.scss';
import AustinColdTile from './Projects/Tiles/AustinColdTile';
import PowerGloveTile from './Projects/Tiles/PowerGloveTile';
import DwAnswersTile from './Projects/Tiles/DwAnswersTile';

const lineBreakPadding = '1rem';
const sectionBreakPadding = '2rem';
const colStart = [0, 4];
const colSpan = [12, 6];
const colEnd = [13, 10];

const Home = (props) => {
  const renderSideMenu = () => {
    const handleClick = (id) => {
      document.getElementById(id).scrollIntoView();
    };

    return (
      <Flex
        className="side-menu-container"
        display={['none', 'flex']}
      >
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
            1. work
          </Button>
          <Button
            className="side-menu__item"
            onClick={() => handleClick('tile--power-glove')}
          >
            2. play
          </Button>
          <Button
            className="side-menu__item"
            onClick={() => handleClick('tile--austin-cold')}
          >
            3. give
          </Button>
        </Flex>
      </Flex>
    );
  };

  return (
    <Box className="home" id="home">
      {renderSideMenu()}
      <Hero
        lineBreakPadding={lineBreakPadding}
        sectionBreakPadding={sectionBreakPadding}
        colStart={colStart}
        colSpan={colSpan}
        colEnd={colEnd}
      />
      <DwAnswersTile
        lineBreakPadding={lineBreakPadding}
        sectionBreakPadding={sectionBreakPadding}
        colStart={colStart}
        colSpan={colSpan}
        colEnd={colEnd}
      />
      <PowerGloveTile
        lineBreakPadding={lineBreakPadding}
        sectionBreakPadding={sectionBreakPadding}
        colStart={colStart}
        colSpan={colSpan}
        colEnd={colEnd}
      />
      <AustinColdTile
        lineBreakPadding={lineBreakPadding}
        sectionBreakPadding={sectionBreakPadding}
        colStart={colStart}
        colSpan={colSpan}
        colEnd={colEnd}
      />
    </Box>
  );
};

Home.propTypes = {
};

export default Home;
