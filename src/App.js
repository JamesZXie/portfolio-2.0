import React from 'react';
import './App.scss';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto-mono'; // Defaults to weight 400.

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import AustinCold from './pages/Project/AustinCold';
import Background from './components/Background';

const fonts = {
  body: 'Roboto Mono',
};

const theme = extendTheme({ fonts });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Nav />
        <Background />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/austin-cold" component={AustinCold} />
          <Route exact path="/power-glove" component={AustinCold} />
          <Route exact path="/doodles" component={AustinCold} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
