import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Sobre from "../pages/Edital";
import Usuario from "../pages/Rotina";


const Rotas = () => {
   return (
       <BrowserRouter>
           <Routes>
               <Route element={<Home />} path="/" exact />
               <Route element={<Sobre />} path="/sobre" />
               <Route element={<Usuario />} path="/usuario" />
           </Routes>
       </BrowserRouter>
   );
}

export default Rotas;
