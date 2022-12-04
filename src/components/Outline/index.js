import React, { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  Button,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

import './outline.scss';

const Outline = ({ titles, ids }) => {
  const [currSection, setCurrSection] = useState(0);

  const handleScroll = () => {
    const buffer = 100;
    if (document.getElementById(ids[0])) {
      ids.map((id, i) => {
        const currScroll = window.pageYOffset;
        let sectionStart;
        if (i === 0) {
          sectionStart = 0;
        } else {
          sectionStart = document.getElementById(id).offsetTop - buffer;
        }

        let sectionEnd;
        if (i === ids.length - 1) {
          sectionEnd = document.body.scrollHeight;
        } else {
          sectionEnd = document.getElementById(ids[i + 1]).offsetTop - buffer;
        }

        if (sectionStart <= currScroll && currScroll <= sectionEnd) {
          setCurrSection(i);
        }
      });
    }
  };

  const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 10));
    return window.removeEventListener('scroll', debounce(handleScroll, 10));
  }, [currSection]);

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' }, true);
  };

  return (
    <Flex
      className="outline-container"
    >
      <Flex
        direction="column"
        className="outline"
        id="outline"
      >
        {titles.map((title, i) => (
          <Button
            className="outline__item"
            onClick={() => handleClick(ids[i])}
            id={currSection === i ? 'outline__curr-section' : ''}
          >
            {title}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

Outline.propTypes = {
  titles: PropTypes.array.isRequired,
  ids: PropTypes.array.isRequired,
};

export default Outline;
