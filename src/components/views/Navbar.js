import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importe o arquivo CSS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Controle de Estudos</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/sobre" style={{ color: 'black', textDecoration: 'none' }}>Edital</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usuario" style={{ color: 'black', textDecoration: 'none' }}>Rotina</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resumos" style={{ color: 'black', textDecoration: 'none' }}>Resumos</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Planejamento de Estudo</a></li>
                <li><a className="dropdown-item" href="#">Estatísticas e Relatórios</a></li>
                <li><a className="dropdown-item" href="#">Recursos de Estudo</a></li>
                <li><a className="dropdown-item" href="#">Página de Ajuda/FAQ</a></li>
                <li><a className="dropdown-item" href="#">Página do Perfil</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
