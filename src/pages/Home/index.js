import React, { useEffect, useState } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import Hero from './Hero';
import './home.scss';
import './Projects/projects.scss';
import AustinColdTile from './Projects/Tiles/AustinColdTile';
import PowerGloveTile from './Projects/Tiles/PowerGloveTile';
import DwAnswersTile from './Projects/Tiles/DwAnswersTile';

const Home = (props) => {
  const total = 3;
  const [loadedFont, setLoadedFont] = useState(false);
  const [numLoaded, setNumLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currSection, setCurrSection] = useState(0);

  const onLoad = () => {
    if (numLoaded + 1 === total && loadedFont) {
      setLoading(false);
    }
    setNumLoaded(numLoaded + 1);
  };

  const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  };

  const handleScroll = () => {
    const home = document.getElementById('home');
    setCurrSection(Math.round(home.scrollTop / window.innerHeight));
    document.activeElement.blur();
  };

  useEffect(() => {
    document.fonts.onloadingdone = setLoadedFont(true);
  }, [loadedFont, loading, numLoaded]);

  useEffect(() => {
    const home = document.getElementById('home');
    home.addEventListener('scroll', debounce(handleScroll, 100));
  }, [currSection]);

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
            boxShadow={currSection === 0 ? '-.5rem 0px 0px 0px #FF8A00' : 'none'}
            onClick={() => handleClick('hero')}
          >
            intro
          </Button>
          <Button
            className="side-menu__item"
            boxShadow={currSection === 1 ? '-.5rem 0px 0px 0px #FF8A00' : 'none'}
            onClick={() => handleClick('tile--dw-answers')}
          >
            1. work
          </Button>
          <Button
            className="side-menu__item"
            boxShadow={currSection === 2 ? '-.5rem 0px 0px 0px #FF8A00' : 'none'}
            onClick={() => handleClick('tile--power-glove')}
          >
            2. play
          </Button>
          <Button
            className="side-menu__item"
            boxShadow={currSection === 3 ? '-.5rem 0px 0px 0px #FF8A00' : 'none'}
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
      <Box className="home__fix">
        {renderSideMenu()}
        <Hero
          total={total}
          numLoaded={numLoaded}
          loading={loading}
        />
        <DwAnswersTile
          onLoad={onLoad}
        />
        <PowerGloveTile
          onLoad={onLoad}
        />
        <AustinColdTile
          onLoad={onLoad}
        />
      </Box>

    </Box>
  );
};

Home.propTypes = {
};

export default Home;
