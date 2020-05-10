import React from 'react';

import Sudoku from './components/Sudoku'

import './style/general/index.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <Sudoku/>
    </div>
  );
}

export default App;
