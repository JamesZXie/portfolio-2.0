import React, { useState } from 'react';
import {
  Image,
} from '@chakra-ui/react';

import austinCold from '../../../../../assets/images/Home/austincold.png';
import Tile from '../../Tile';

const PowerGlove = (props) => (
  <Tile
    className="projects__container"
    description="Scrambling to save lives during the 2021 Texas winter storms."
    title="AUSTINCOLD"
    to="/austin-cold"
    projectImage={<Image className="projects__image" src={austinCold} />}
  />
);

export default PowerGlove;
