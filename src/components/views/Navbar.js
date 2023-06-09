import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Controle de Estudos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><Link to="/sobre">Edital</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/usuario">Rotina</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/sobre">Sobre</Link></a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ...
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Planejamento de Estudo</a></li>
                <li><a class="dropdown-item" href="#">Estatísticas e Relatórios</a></li>
                <li><a class="dropdown-item" href="#">Recursos de Estudo</a></li>
                <li><a class="dropdown-item" href="#">Página de Ajuda/FAQ</a></li>
                <li><a class="dropdown-item" href="#">Página do Perfil</a></li>
            </ul>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  );
};

export default Navbar;
