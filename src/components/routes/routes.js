import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Edital from "../pages/Edital";
import Rotina from "../pages/Rotina";
import Resumos from "../pages/Resumos"
import Login from "../pages/Login";

const Rotas = () => {
   return (
       <BrowserRouter>
           <Routes>
               <Route element={<Login />} path="/" exact />
               <Route element={<Home />} path="/home" exact />
               <Route element={<Edital />} path="/edital" />
               <Route element={<Rotina />} path="/rotina" />
               <Route element={<Resumos />} path="/resumos" />

           </Routes>
       </BrowserRouter>
   );
}

export default Rotas;
