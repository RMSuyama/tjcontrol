import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

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
            <a class="nav-link active" aria-current="page" href="#">Pomodoro</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Painel de Controle (Dashboard)</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Gerenciamento de Matérias</a>
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
