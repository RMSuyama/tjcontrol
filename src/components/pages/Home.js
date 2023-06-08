import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../views/Nav';
import Citacao from '../views/citacao';
import Countdown from '../views/countdown';

const Home = () =>{
  return (
    <div>
      <Navbar />
      <Citacao />
      <Countdown />
    </div>
  );
}

export default Home;