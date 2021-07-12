import React from 'react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';
import './arrow-down.scss';

const ArrowDown = ({ hidden }) => {
  const handleClick = () => {
    document.getElementById('home').scrollBy(0, window.innerHeight);
  };

  return (
    <Button
      className="arrow-down"
      onClick={handleClick}
      display={hidden ? 'none' : ['none', 'flex']}
    >
      <ArrowDownIcon className="arrow-down__icon" />
    </Button>
  );
};

ArrowDown.propTypes = {
  hidden: PropTypes.bool,
};

ArrowDown.defaultProps = {
  hidden: false,
};

export default ArrowDown;
