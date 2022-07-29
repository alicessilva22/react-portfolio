import React from 'react';

import Footer from './components/Footer';
import NavTabs from './components/NavTabs';
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <div>
      <NavTabs />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
