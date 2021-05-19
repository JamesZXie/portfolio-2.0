import React from 'react';
import './App.scss';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto-mono'; // Defaults to weight 400.

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import AustinCold from './pages/Project/AustinCold';
import PowerGlove from './pages/Project/PowerGlove';
import Doodles from './pages/Project/Doodles';
import ScrollToTop from './components/ScrollToTop';

const fonts = {
  body: 'Roboto Mono',
};

const theme = extendTheme({ fonts });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Nav />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/austin-cold" component={AustinCold} />
          <Route exact path="/power-glove" component={PowerGlove} />
          <Route exact path="/doodles" component={Doodles} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
