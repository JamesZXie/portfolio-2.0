import React, { useEffect, useState } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import Hero from './Hero';
import './home.scss';
import './Projects/projects.scss';
import AustinColdTile from './Projects/Tiles/AustinColdTile';
import PowerGloveTile from './Projects/Tiles/PowerGloveTile';
import ProvisioningTile from './Projects/Tiles/ProvisioningTile';
import PoolsTile from './Projects/Tiles/PoolsTile';
import WorkspacesTile from './Projects/Tiles/WorkspacesTile';

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

  const debounce = (func, timeout = 100) => {
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
    return home.removeEventListener('scroll', debounce(handleScroll, 20));
  }, [currSection]);

  const renderProgressThing = () => {
    const sections = [1, 2, 3, 4, 5];
    return (
      <Box className="progress__container" left={currSection >= 1 ? '1rem' : -10}>
        {sections.map((number) => (
          <Box className="progress__circle" backgroundColor={currSection === number ? '#1D1D1D' : 'transparent'} />
        ))}
      </Box>
    );
  };

  return (
    <Box className="home" id="home">
      <Box className="home__fix">
        {renderProgressThing()}
        <Hero
          total={total}
          numLoaded={numLoaded}
          loading={loading}
        />
        <ProvisioningTile
          onLoad={onLoad}
        />
        <WorkspacesTile
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
