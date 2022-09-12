import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './project-dump.scss';
import {
  Grid, Box, GridItem, Flex, Text, Link, Button, Image,
} from '@chakra-ui/react';
import { useHistory, useLocation } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import ArrowUp from '../../../../components/ArrowUp';
import ArrowDown from '../../../../components/ArrowDown';

const ProjectDump = ({
  to, projectImage, className, id, subtitle, order,
}) => {
  const history = useHistory();
  const location = useLocation();

  const handleLink = () => {
    if (location.pathname === to) { return; }
    history.push(to);
  };

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      className="project-dump-container"
      gap="1rem"
      textAlign={['center', 'left', 'left']}
      paddingTop="2rem"
      paddingBottom="2rem"
      paddingLeft={['1rem', 0]}
      paddingRight={['1rem', 0]}
      position="relative"
      id={id}
    >
      <Box
        className="tile__order-imprint"
        tabIndex="-1"
        paddingLeft={[0, '4rem']}
      >
        {order}
      </Box>
      <GridItem
        display={['none', 'none', 'none', 'block', 'block']}
        colStart={[0, 0, 0, 7, 7]}
        colSpan={[0, 0, 0, 5, 5]}
        position="relative"
        marginBottom="1rem"
      >
        hello
      </GridItem>
      <GridItem
        display={['none', 'none', 'none', 'block', 'block']}
        colStart={[0, 0, 0, 7, 7]}
        colSpan={[0, 0, 0, 5, 5]}
        position="relative"
        marginBottom="1rem"
      >
        hello
      </GridItem>
      <GridItem
        display={['none', 'none', 'none', 'block', 'block']}
        colStart={[0, 0, 0, 7, 7]}
        colSpan={[0, 0, 0, 5, 5]}
        position="relative"
        marginBottom="1rem"
      >
        hello
      </GridItem>
    </Grid>
  );
};

ProjectDump.propTypes = {
  to: PropTypes.string.isRequired,
  projectImage: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
};

ProjectDump.defaultProps = {
  className: '',
  projectImage: '',
  id: '',
};
export default ProjectDump;
