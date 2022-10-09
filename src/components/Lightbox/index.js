import React, { useEffect, useState } from 'react';
import {
  Image,
  Box,
  Button,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

import './lightbox.scss';

const Lightbox = ({
  src, onLoad, id,
}) => {
  const [zoomed, setZoomed] = useState(false);
  const [prevPosition, setPrevPosition] = useState(window.scrollY);

  const onClick = () => {
    const container = document.getElementById(id);

    if (!zoomed) {
      document.body.classList.add('disable-scroll');
      setZoomed(true);
      setPrevPosition(window.scrollY);
      container.scrollIntoView();
    } else {
      document.body.classList.remove('disable-scroll');
      setZoomed(false);
      window.scrollTo(0, prevPosition);
    }
  };

  return (
    <Box
      className={`lightbox-zoomed-${zoomed}`}
      onClick={onClick}
      id={id}
    >
      <Image
        src={src}
        className={`lightbox-zoomed-${zoomed}__image`}
        onLoad={onLoad}
      />
    </Box>
  );
};

Lightbox.propTypes = {
  src: PropTypes.object.isRequired,
  onLoad: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Lightbox;
