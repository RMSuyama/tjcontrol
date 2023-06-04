import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Citacao = () => {
  return (
    <div class="card">

    <div class="card-body">
        <blockquote class="blockquote mb-0">
        <p>Quem salva uma vida salva o mundo inteiro.</p>
        <footer class="blockquote-footer">Frase retirada do <cite title="Source Title">Talmud</cite></footer>
        </blockquote>
    </div>
    </div>
  );
};

export default Citacao;
