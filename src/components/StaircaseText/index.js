import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Text,
} from '@chakra-ui/react';
import './header.scss';

const Header = ({ id, title, ariaLevel }) => {
  const [test, setTest] = useState('hello');

  const renderLetters = () => title.split('').map((l, i) => (
    <Text className="header__letter" key={i}>{l}</Text>
  ));

  return (
    <Box className="header">
      {renderLetters()}
    </Box>
  );
};

Header.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  ariaLevel: PropTypes.number,
};

Header.defaultProps = {
  id: 'default-header',
  ariaLevel: 2,
};

export default Header;
