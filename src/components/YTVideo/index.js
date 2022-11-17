import React from 'react';
import PropTypes from 'prop-types';

import './yt-video.scss';

import {
  Grid, GridItem,
} from '@chakra-ui/react';

const YTVideo = ({ children, className }) => (
  <div className="yt-container">
    {children}
  </div>
);

YTVideo.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

YTVideo.defaultProps = {
  className: '',
};
export default YTVideo;
