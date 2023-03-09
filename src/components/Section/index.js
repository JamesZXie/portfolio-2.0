import React from 'react';
import PropTypes from 'prop-types';

import './section.scss';

import {
  Grid, Box,
} from '@chakra-ui/react';

const Section = ({ children, className }) => (
  <>
    <Grid
      templateColumns="repeat(12, 1fr)"
      className={className}
      gap="1rem 1rem"
      textAlign={['center', 'left', 'left']}
      paddingTop="3.5rem"
      paddingBottom="3.5rem"
      paddingLeft={['1rem', 0]}
      paddingRight={['1rem', 0]}
      position="relative"
    >
      {children}
    </Grid>
  </>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: '',
};
export default Section;
