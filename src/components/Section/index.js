import React from 'react';
import PropTypes from 'prop-types';

import './section.scss';

import {
  Grid, Box,
} from '@chakra-ui/react';

const Section = ({ children, className }) => (
  <>
    <hr className="section__line__top" />
    <Grid
      templateColumns="repeat(12, 1fr)"
      className={className}
      gap="1rem"
      textAlign={['center', 'left', 'left']}
      paddingTop="2rem"
      paddingBottom="2rem"
      position="relative"
    >
      {children}
    </Grid>
    <hr className="section__line__bottom" />
  </>
);

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: '',
  children: '',
};
export default Section;
