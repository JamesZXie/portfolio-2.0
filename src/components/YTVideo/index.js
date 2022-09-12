import React from 'react';
import PropTypes from 'prop-types';

import './yt-video.scss';

import {
  Grid, GridItem,
} from '@chakra-ui/react';

const YTVideo = ({ children, className }) => (
  <GridItem
    colStart={[1, 3]}
    colSpan={[12, 8]}
  >
    <div className="yt-container">
      {children}
    </div>
  </GridItem>
);

YTVideo.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

YTVideo.defaultProps = {
  className: '',
};
export default YTVideo;
