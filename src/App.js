import React from 'react';
import './App.scss';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto-mono'; // Defaults to weight 400.

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';

const fonts = {
  body: 'Roboto Mono',
};

const theme = extendTheme({ fonts });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
