import React from 'react';
import {
  Image,
} from '@chakra-ui/react';

import austinCold from '../../../../../assets/images/AustinCold/mobile.png';
import Tile from '../../Tile';

const AustinColdTile = (props) => (
  <Tile
    className="projects__container"
    description="Scrambling to save lives during the 2021 Texas winter storms."
    title="AUSTINCOLD"
    to="/austin-cold"
    projectImage={(
      <Image
        className="projects__image"
        src={austinCold}
        maxHeight="20rem"
        top="-5rem"
        left="50%"
      />
)}
  />
);

export default AustinColdTile;
