import React, { Component } from 'react';
import Header from './Header';
import PageContent from './PageContent';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <PageContent />
      </div>
    )
  }
}

export default App;
