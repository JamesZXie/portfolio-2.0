import React, { useEffect, useState } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import './outline.scss';

const Outline = ({ titles, ids }) => {
  const total = 4;
  const [loadedFont, setLoadedFont] = useState(false);
  const [numLoaded, setNumLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currSection, setCurrSection] = useState(0);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' }, true);
  };

  useEffect(() => {
    document.fonts.onloadingdone = setLoadedFont(true);
  }, [loadedFont, loading, numLoaded]);

  return (
    <Flex
      className="outline-container"
      display={['none', 'flex']}
    >
      <Flex
        direction="column"
        className="outline"
        id="outline"
      >
        {titles.map((title, i) => (
          <Button
            className="outline__item"
            onClick={() => handleScroll(ids[i])}
          >
            {title}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

Outline.propTypes = {
  titles: PropTypes.array.isRequired,
  ids: PropTypes.array.isRequired,
};

export default Outline;
