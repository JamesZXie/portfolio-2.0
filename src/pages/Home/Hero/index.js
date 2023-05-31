import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  Image,

} from '@chakra-ui/react';
import './hero.scss';
import Background from '../../../components/Background';
import ArrowDown from '../../../components/ArrowDown';
import PageLoader from '../../../components/PageLoader';

import James from '../../../assets/images/Home/james-headshot.png';

const Hero = ({ total, numLoaded, loading }) => {
  const [isBlurbOpen, setIsBlurbOpen] = useState(false);
  const [isHeadshotLoaded, setIsHeadshotLoaded] = useState(false);

  const onLoad = () => { setIsHeadshotLoaded(true); };

  return (
    <Box className="hero" id="hero">
      <PageLoader
        total={total}
        numLoaded={isHeadshotLoaded ? numLoaded : numLoaded - 1}
        loading={loading}
        backgroundColor="#1d1d1d"
      />
      {loading ? '' : <Background display={['none', 'block']} />}
      <Box className="hero__container">
        <Flex
          className="hero__intro-container"
        >
          <Text as="h1" className="hero__hello">Hi &#128075;</Text>
          <Box
            className="container__solid-rectangle hero__intro-container__intro"
          >
            <Text paddingBottom="1rem">
              I&apos;m James, a mission-driven product design generalist who runs research sessions,
              designs, and codes on a weekly basis.
            </Text>
            <Text>
              I&apos;m currently the primary designer for IBM&apos;s
              {' '}
              <a href="https://cloud.ibm.com/power/overview" target="_blank" rel="noreferrer">PowerVS cloud platform</a>
              .
            </Text>
          </Box>
        </Flex>
        <Image onLoad={onLoad} className="hero__headshot" src={James} />
      </Box>
      <ArrowDown />
    </Box>
  );
};

Hero.propTypes = {
  total: PropTypes.number.isRequired,
  numLoaded: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Hero;
