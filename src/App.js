import React from 'react';
import './App.scss';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto-mono';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import AustinCold from './pages/Project/AustinCold';
import PowerGlove from './pages/Project/PowerGlove';
import DwAnswers from './pages/Project/DwAnswers';
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
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/austin-cold" component={AustinCold} />
            <Route exact path="/power-glove" component={PowerGlove} />
            <Route exact path="/dw-answers" component={DwAnswers} />
            <Route exact path="/doodles" component={Doodles} />
          </Switch>
        </ScrollToTop>
      </Router>
    </ChakraProvider>
  );
}

export default App;
