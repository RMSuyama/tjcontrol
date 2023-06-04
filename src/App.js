import React from 'react';
import './App.css';
import Navbar from './components/views/nav';
import Citacao from './components/views/citacao';
import Countdown from './components/views/countdown';
import Dashboard from './components/views/dashboard';
import Materias from './components/views/materias';
import PomodoroTimer from './components/services/pomodoro';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Citacao />
      <Countdown />
      <Dashboard />
      <Materias />
      <PomodoroTimer />
    </div>
  );
}

export default App;
