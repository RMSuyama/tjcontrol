    import React, { useEffect, useState } from "react";
    import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
    import firebase from "../../config/firebase";
    import "firebase/auth";

    import Home from "../pages/Home";
    import Edital from "../pages/Edital";
    import Rotina from "../pages/Rotina";
    import Resumos from "../pages/Resumos"
    import Login from "../pages/LoginTemplate";


function ProtectedRoute({ element: Component, ...rest }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // O usuário está autenticado
        setAuthenticated(true);
      } else {
        // O usuário não está autenticado
        setAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    // Exibir um indicador de carregamento enquanto a autenticação está sendo verificada
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      element={authenticated ? <Component /> : <Navigate to="/" replace />}
    />
  );
}

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
