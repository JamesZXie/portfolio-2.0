import React, { useEffect } from 'react';
import { Box, Progress } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import './page-loader.scss';

const PageLoader = ({
  total, numLoaded, loading, backgroundColor,
}) => {
  const increment = Math.ceil(1 / total * 100);

  // loading-bar will increase by incremet % width each time

  useEffect(() => {
    const home = document.getElementById('home');
    if (loading && window.innerWidth > 666) {
      document.body.style.position = 'fixed';
      if (home) home.style.overflowY = 'hidden';
    } else {
      document.body.style.position = 'relative';
      if (home) home.style.overflowY = 'scroll';
    }
  }, [loading]);

  return (
    <Box
      className="page-loader__container"
      display={loading && window.innerWidth > 666 ? 'block' : 'none'}
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
