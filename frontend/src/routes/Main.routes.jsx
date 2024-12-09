import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../pages/App";
import LoginForm from "../pages/Login";
import NavBar from "../components/NavBarEmp.components";
import PrivateRoute from "./Private.routes";
import { Noticias } from "../pages/Noticias";
import Categories from "../components/PublicarArt.components";
import RegisterForm from "../components/RegisterForm";
import TestConnection from "../components/TestConnection";

const MainRoutes = () => {
  const isAuthenticated = true; // Aquí iría tu lógica de autenticación real

  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/publicar" element={<Categories />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/test-connection" element={<TestConnection />} /> {/* Nueva ruta */}
        {/* Ruta privada */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/navbar" element={<NavBar />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;