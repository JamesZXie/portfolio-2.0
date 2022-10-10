import React, { useEffect, useState } from 'react';
import {
  Image,
  Box,
  Button,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

import './lightbox.scss';

const Lightbox = ({
  src, onLoad, id, paddingTop, paddingBottom,
}) => {
  const [zoomed, setZoomed] = useState(false);
  const [prevPosition, setPrevPosition] = useState(window.scrollY);

  const onClick = () => {
    const container = document.getElementById(id);
    const containerImage = document.getElementById(`${id}-image`);

    const taller = containerImage.naturalHeight > window.innerHeight;
    const longer = containerImage.naturalHeight / containerImage.naturalWidth > window.innerHeight / window.innerWidth;

    const adjust = document.body.scrollHeight - container.offsetTop - window.innerHeight;

    if (!zoomed) {
      document.body.classList.add('disable-scroll');
      setZoomed(true);
      setPrevPosition(window.scrollY);

      // Check to see if lightbox needs to scroll
      if (taller && longer) {
        containerImage.style.bottom = 'auto';
      } else {
        containerImage.style.bottom = '0';
      }

      // Check to see if lightbox reaches the bottom of the page
      if (adjust < 0) {
        container.style.top = `${window.scrollY + adjust}px`;
      }

      container.scrollIntoView();
    } else {
      document.body.classList.remove('disable-scroll');
      setZoomed(false);
      window.scrollTo(0, prevPosition);
    }
  };

  return (
    <Box
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      className={`lightbox-zoomed-${zoomed}`}
      onClick={onClick}
      id={id}
    >
      <Image
        id={`${id}-image`}
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
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
};

Lightbox.defaultProps = {
  paddingTop: '1rem',
  paddingBottom: '1rem',
};

export default Lightbox;
