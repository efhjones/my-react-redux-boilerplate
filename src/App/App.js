import React from 'react';

import './App.css';

const App = ({count, countUp}) => {
  return (
    <div className="App">
      <button onClick={countUp}>Count up!</button>
      {count}
    </div>
  );
};

export default App;
