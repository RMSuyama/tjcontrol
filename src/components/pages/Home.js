import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../views/Navbar';
import Citacao from '../views/citacao';
import Countdown from '../views/countdown';
import Pomodoro from '../services/pomodoro';


const Home = () =>{
  return (
    <div>
      <Navbar />
      <Citacao />
      <Countdown />
      <Pomodoro />
    </div>
  );
}

export default Home;