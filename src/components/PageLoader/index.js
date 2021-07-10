import React, { useEffect } from 'react';
import { Box, Progress } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import './page-loader.scss';

const PageLoader = ({ total, numLoaded, loading }) => {
  const increment = Math.ceil(1 / total * 100);

  // loading-bar will increase by incremet % width each time

  useEffect(() => {
    if (loading) {
      document.body.style.position = 'fixed';
    } else document.body.style.position = 'relative';
  }, [loading]);

  return (
    <Box
      className="page-loader__container"
      display={loading ? 'block' : 'none'}
    >
      <Progress colorScheme="orange" value={increment * numLoaded} />
    </Box>
  );
};

PageLoader.propTypes = {
  total: PropTypes.number.isRequired,
  numLoaded: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PageLoader;
