import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import john from './john.jpg';
import Clock from './clock';

function App() {
  const [showImg, setShowImg] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Clock/>
          {showImg && <img src={john} className="john-style" alt="john" />}
        </div>
        <Button variant="contained" color="primary" onClick={() => setShowImg(!showImg)}>Hey sir</Button>
      </header>
    </div>
  );
}

export default App;