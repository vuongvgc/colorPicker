import React from 'react';
import './App.css';
import ColorPicker from './page/ColorPicker';

function App() {
  return (
    <div className="App">
      <ColorPicker color={color} fontSize={fontSize} />
    </div>
  );
}
const color = ['blue', 'red', 'green', 'pink'];
const fontSize = 14 ;
export default App;
