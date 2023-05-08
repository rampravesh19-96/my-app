import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <Routes>
      <Route path='/' element={<div>hii everyone</div>}/>
    </Routes>
  );
}

export default App;