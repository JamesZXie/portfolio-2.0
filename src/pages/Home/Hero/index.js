import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Text,
  Flex,
  Image,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import './hero.scss';
import Background from '../../../components/Background';
import ArrowDown from '../../../components/ArrowDown';
import PageLoader from '../../../components/PageLoader';

const Hero = ({ total, numLoaded, loading }) => {
  const [isBlurbOpen, setIsBlurbOpen] = useState(false);

  return (
    <Box className="hero" id="hero">
      <PageLoader
        total={total}
        numLoaded={numLoaded}
        loading={loading}
        backgroundColor="#1d1d1d"
      />
      {loading ? '' : <Background display={['none', 'block']} />}
      <Flex className="hero__container" justify="center" align="center">
        <Flex wrap="wrap">
          <Box width="100%">
            <Text as="h4" paddingBottom="1rem">Hello</Text>
          </Box>
          <Box
            className="container__solid-rectangle hero__intro-container"
          >
            <Text>
              I&apos;m a mission-driven product designer who runs research sessions, build wireframes, and codes on a weekly basis.
              <br />
              <br />
              I&apos;m currently working at IBM.
            </Text>
          </Box>
        </Flex>
      </Flex>
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
