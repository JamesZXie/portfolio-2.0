import React, { useEffect, useState } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import Hero from './Hero';
import './home.scss';
import './Projects/projects.scss';
import RendezvousTile from './Projects/Tiles/RendezvousTile';
import AustinColdTile from './Projects/Tiles/AustinColdTile';
import PowerGloveTile from './Projects/Tiles/PowerGloveTile';
import DwAnswersTile from './Projects/Tiles/DwAnswersTile';
import ProvisioningTile from './Projects/Tiles/ProvisioningTile';
import PoolsTile from './Projects/Tiles/PoolsTile';

const Home = (props) => {
  const total = 4;
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
    if (home) setCurrSection(Math.round(home.scrollTop / window.innerHeight));
    if (document.activeElement?.parentElement?.id === 'side-menu') {
      document.activeElement.blur();
    }
  };

  useEffect(() => {
    document.fonts.onloadingdone = setLoadedFont(true);
  }, [loadedFont, loading, numLoaded]);

  useEffect(() => {
    const home = document.getElementById('home');
    home.addEventListener('scroll', debounce(handleScroll, 100));
    return home.removeEventListener('scroll', debounce(handleScroll, 100));
  }, [currSection]);

  const renderSideMenu = () => {
    const handleClick = (id) => {
      document.getElementById(id).scrollIntoView();
    };

    const right = '6rem';
    const background = '#FF8A00';

    return (
      <Flex
        className="side-menu-container"
        display={['none', 'flex']}
      >
        <Flex
          direction="column"
          className="side-menu"
          id="side-menu"
          color="white"
        >
          <Button
            className="side-menu__item"
            onClick={() => handleClick('hero')}
            id={currSection === 0 ? 'current-section' : ''}
          >
            About
          </Button>
          <Button
            className="side-menu__item"
            onClick={() => handleClick('tile--pools')}
            id={currSection === 1 ? 'current-section' : ''}
          >
            PSVS Pools
          </Button>
          <Button
            className="side-menu__item"
            onClick={() => handleClick('tile--provisioning')}
            id={currSection === 2 ? 'current-section' : ''}
          >
            Provisioning
          </Button>
          <Button
            className="side-menu__item"
            onClick={() => handleClick('tile--power-glove')}
            id={currSection === 3 ? 'current-section' : ''}
          >
            Powerglove
          </Button>
          {/* <Button
            className="side-menu__item"
            onClick={() => handleClick('tile--rendezvous')}
            id={currSection === 4 ? 'current-section' : ''}
          >
            Rendezvous
          </Button> */}
          <Button
            className="side-menu__item"
            onClick={() => handleClick('tile--austin-cold')}
            id={currSection === 4 ? 'current-section' : ''}
          >
            Austincold
          </Button>
        </Flex>
      </Flex>
    );
  };

  return (
    <Box className="home" id="home">
      <Box className="home__fix">
        {/* {renderSideMenu()} */}
        <Hero
          total={total}
          numLoaded={numLoaded}
          loading={loading}
        />
        <PoolsTile
          onLoad={onLoad}
        />
        <ProvisioningTile
          onLoad={onLoad}
        />
        <PowerGloveTile
          onLoad={onLoad}
        />
        {/* <RendezvousTile
          onLoad={onLoad}
        /> */}
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
