import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer';
import { CoronaProvider } from './coronaContext';

const App = () => {
  return(
    <CoronaProvider>
      <div className="App">
        <Nav />
        <Body />
        <Footer />
      </div>
    </CoronaProvider>
  )
}

export default App;
