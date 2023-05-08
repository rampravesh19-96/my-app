import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Facebook from './components/Facebook';

function App(props) {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/facebook' element={<Facebook/>}/>
    </Routes>
  );
}

export default App;