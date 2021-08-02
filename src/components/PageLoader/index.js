import React, { useEffect, useState } from 'react';
import { Box, Progress } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import './page-loader.scss';

const PageLoader = ({
  total, numLoaded, loading, backgroundColor,
}) => {
  const increment = Math.ceil(1 / total * 100);
  const [loaded, setLoaded] = useState(false);

  // loading-bar will increase by incremet % width each time

  const handleLoaded = (shouldAllow) => {
    const home = document.getElementById('home');
    if (shouldAllow) {
      setLoaded(false);
      document.body.style.position = 'fixed';
      if (home) home.style.overflowY = 'hidden';
    } else {
      setLoaded(true);
      document.body.style.position = 'relative';
      if (home) home.style.overflowY = 'scroll';
    }
  };

  useEffect(() => {
    handleLoaded(loading && window.innerWidth > 666);
    const timeout = setTimeout(() => { handleLoaded(false); }, 5000);
    return () => (clearTimeout(timeout));
  }, [loading]);

  return (
    <Box
      className="page-loader__container"
      display={loaded ? 'none' : 'block'}
      backgroundColor={backgroundColor}
    >
      <Progress colorScheme="orange" value={increment * numLoaded} />
    </Box>
  );
};

PageLoader.propTypes = {
  total: PropTypes.number.isRequired,
  numLoaded: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string,
};

PageLoader.defaultProps = {
  backgroundColor: 'white',
};

export default PageLoader;
