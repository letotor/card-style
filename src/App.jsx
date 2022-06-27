import React from 'react';

import './App.scss';
import Card from './components/Card';

function App() {
  return (
    <div className="App container-center">
      <Card />
      <div className="flex-center">
        <a href="https://github.com/letotor/card-style" target="_blank" rel="noreferrer">Github source</a>
      </div>
    </div>
  );
}

export default App;
