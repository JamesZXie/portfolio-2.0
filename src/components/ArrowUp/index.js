import React from 'react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import './arrow-up.scss';

const ArrowUp = () => {
  const handleClick = () => {
    document.getElementById('home').scrollBy(0, -1 * window.innerHeight);
  };

  return (
    <Button
      className="arrow-up"
      onClick={handleClick}
      display={['none', 'flex']}
    >
      <ArrowUpIcon className="arrow-up__icon" />
    </Button>
  );
};

export default ArrowUp;
