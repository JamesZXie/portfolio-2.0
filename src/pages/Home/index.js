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
    const sections = [1, 2, 3, 4];
    return (
      <Box className="progress__container" left={currSection >= 1 ? '1rem' : -10}>
        {/* <Box className="progress__circle" backgroundColor={currSection === 1 ? 'black' : 'white'} /> */}
        {sections.map((number) => (
          <Box className="progress__circle" backgroundColor={currSection === number ? 'black' : 'white'} />
        ))}
      </Box>
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
        <ProvisioningTile
          onLoad={onLoad}
        />
        <PoolsTile
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
