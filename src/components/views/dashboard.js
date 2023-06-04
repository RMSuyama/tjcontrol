

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {

    const progress = {
        hoursStudied: 50,
        goalsAchieved: 5,
      };


  return (

 <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Painel de Controle</h5>
        <p class="card-text">Número de horas estudadas: {progress.hoursStudied}</p>
        <p class="card-text">Metas alcançadas: {progress.goalsAchieved}</p>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
    
</div>

  );
};

export default Dashboard;
