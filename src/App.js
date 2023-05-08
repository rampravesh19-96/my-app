import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Facebook from './components/facebook/Facebook';
function App(props) {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/facebook' element={<Facebook/>}/>
    </Routes>
  );
}

export default App;