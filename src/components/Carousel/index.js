import React, { useState } from 'react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
import { Box, Button, Flex } from '@chakra-ui/react';
import './carousel.scss';

const ArrowRight = ({ onClick }) => (
  <Button
    className="arrow-right"
    onClick={onClick}
  >
    <ArrowForwardIcon className="arrow-right__icon" />
  </Button>
);

const ArrowLeft = ({ onClick }) => (
  <Button
    className="arrow-left"
    onClick={onClick}
  >
    <ArrowBackIcon className="arrow-left__icon" />
  </Button>
);

export const CarouselItem = ({ children, width }) => (
  <Box className="carousel-item" style={{ width }}>
    {children}
  </Box>
);

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (i) => {
    let newIndex = i;
    const numChildren = React.Children.count(children);

    if (newIndex < 0) {
      newIndex = numChildren - 1;
    } else if (newIndex >= numChildren) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <Box className="carousel">
      <Box className="carousel__inner" transform={`translateX(-${activeIndex * 100}%)`}>
        {React.Children.map(children, (child, index) => React.cloneElement(child, { width: '100%' }))}
      </Box>
      <Flex className="carousel__arrow-container">
        <ArrowLeft onClick={() => {
          updateIndex(activeIndex - 1);
        }}
        />
        <ArrowRight onClick={() => {
          updateIndex(activeIndex + 1);
        }}
        />
      </Flex>
    </Box>
  );
};

ArrowRight.propTypes = {
  onClick: PropTypes.func.isRequired,
};

ArrowLeft.propTypes = {
  onClick: PropTypes.func.isRequired,
};

CarouselItem.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string.isRequired,
};

Carousel.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Carousel;
