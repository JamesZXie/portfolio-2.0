import React from 'react';
import './App.scss';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto-mono';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import AustinCold from './pages/Project/AustinCold';
import PowerGlove from './pages/Project/PowerGlove';
import Pools from './pages/Project/Pools';
import Rendezvous from './pages/Project/Rendezvous';
import Provisioning from './pages/Project/Provisioning';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Nav />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/austin-cold" component={AustinCold} />
            <Route exact path="/power-glove" component={PowerGlove} />
            <Route exact path="/pools" component={Pools} />
            {/* <Route exact path="/rendezvous" component={Rendezvous} /> */}
            <Route exact path="/psvsredesign" component={Provisioning} />
          </Switch>
        </ScrollToTop>
      </Router>
    </ChakraProvider>
  );
}

export default App;
