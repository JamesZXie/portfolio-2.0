import React, { useState } from 'react';
import {
  Box, Text, Image,
} from '@chakra-ui/react';
import './explore-stripe.scss';
import arrows from '../../../assets/images/Home/Hero/ExploreArrows.svg';

const ExploreStripe = (props) => {
  const [isBlurbOpen, setIsBlurbOpen] = useState(false);

  return (
    <Box className="explore-stripe">
      <Box position="relative">
        <Text className="explore-stripe__text">E X P L O R E</Text>
        <img alt="down arrow" className="explore-stripe__text__arrows" src={arrows} />
      </Box>
    </Box>
  );
};

ExploreStripe.propTypes = {};

export default ExploreStripe;
