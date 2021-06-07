import React, { useState } from 'react';
import {
  Image,
} from '@chakra-ui/react';

import powerGloveSkeleton from '../../../../../assets/images/PowerGlove/flex-sensor-circuit.png';
import Tile from '../../Tile';

const PowerGloveTile = (props) => (
  <Tile
    className="projects__container"
    description="Experimenting with IoT and digital art"
    title="POWERGLOVE"
    to="/power-glove"
    projectImage={<Image className="projects__image" src={powerGloveSkeleton} />}
  />
);

export default PowerGloveTile;