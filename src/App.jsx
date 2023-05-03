import React from 'react';
import Home from './Components/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
    <div>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
    </>
  );
};

export default App;