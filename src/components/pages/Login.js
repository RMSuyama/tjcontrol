import React, { useState } from 'react';
import { auth } from '../../config/firebase';
import { Link } from 'react-router-dom';
import '../pages/Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      alert('Iniciando login...');
      await auth.signInWithEmailAndPassword(email, password);
      alert('Login bem-sucedido!');
      // Lógica adicional após o login bem-sucedido
    } catch (error) {
      alert('Erro ao fazer login: ' + error.message);
      // Tratamento de erros
    }
    setEmail('');
    setPassword('');
  };

  function alterarEmail(){
    console.log('mudou o email...')
  }

  return (
   
    <div className="cardLog text-center  ">
    <div className="cardLog-header">
        <ul className="nav nav-tabs card-header-tabs">
        <li className="nav-item">
            <a className="nav-link active" aria-current="true" href="#">Login</a>
        </li>

        <li className="nav-item">
            <a className="nav-link" href="#">Novo Cadastro</a>
        </li>   
        <li className="nav-item">
            <a className="nav-link" href="#">Esqueci a senha</a>
        </li>

        </ul>
    </div>

    <div className="cardLog-body">
        <input className="form-control me-2" type="E-mail" placeholder="E-mail" aria-label="E-mail"></input>
        <input className="form-control me-2" type="Password" placeholder="Password" aria-label="Password"></input>
        <button className="btn btn-outline-success" type="submit">
          <Link className="nav-link" to="/home">Acessar</Link>
        </button>
   </div>

    </div>

  );
}

export default Login;
