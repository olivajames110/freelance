import React, { Component } from 'react';
import Header from './components/header/header';
import PositionNav from './components/positionNav/positionNav'
import MiddleContent from './components/middleContent/middleContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <div className="body-content">
            <MiddleContent />
           
          </div>
      </div>
    );
  }
}

export default App;
