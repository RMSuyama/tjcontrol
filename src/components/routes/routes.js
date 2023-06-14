import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Sobre from "../pages/Edital";
import Usuario from "../pages/Rotina";
import Resumos from "../pages/Resumos"
import Login from "../pages/Login";

const Rotas = () => {
   return (
       <BrowserRouter>
           <Routes>
               <Route element={<Login />} path="/" exact />
               <Route element={<Home />} path="/home" exact />
               <Route element={<Sobre />} path="/sobre" />
               <Route element={<Usuario />} path="/usuario" />
               <Route element={<Resumos />} path="/resumos" />

           </Routes>
       </BrowserRouter>
   );
}

export default Rotas;
