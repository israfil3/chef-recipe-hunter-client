import React from 'react';
import Home from './Components/Home/Home';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default App;