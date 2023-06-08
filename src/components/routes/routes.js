import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Sobre from "../pages/Edital";
import Usuario from "../pages/Rotina";

import Navbar from "../views/Nav";

const Rotas = () => {
   return (
       <BrowserRouter>
           <Routes>
               <Route element={<Home />} path="/" exact />
               <Route element={<Sobre />} path="/sobre" />
               <Route element={<Usuario />} path="/usuario" />
               <Route element={<Navbar />} path="/navbar" />
           </Routes>
       </BrowserRouter>
   );
}

export default Rotas;
