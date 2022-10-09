import React, { useEffect, useState } from 'react';
import {
  Image,
  Box,
  Button,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

import './lightbox.scss';

const Lightbox = ({ src, onLoad }) => (
  <Box>
    <Image src={src} className="lightbox-image" onLoad={onLoad} />
  </Box>
);

Lightbox.propTypes = {
  src: PropTypes.object.isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default Lightbox;
