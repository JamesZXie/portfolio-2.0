import React, { useState } from 'react';
import {
  Image,
} from '@chakra-ui/react';

import powerGloveSkeleton from '../../../../../assets/images/PowerGlove/flex-sensor-circuit.png';
import Tile from '../../Tile';

const PowerGloveTile = (props) => (
  <Tile
    className="projects__container"
    description="Streamlining IBM product support and crowdsourcing simple solutions."
    title="DW - ANSWERS"
    to="/dw-answers"
    projectImage={<Image className="projects__image" src={powerGloveSkeleton} />}
  />
);

export default PowerGloveTile;
