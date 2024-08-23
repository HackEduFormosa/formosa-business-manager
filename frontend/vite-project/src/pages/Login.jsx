import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingBag, FaKey } from "react-icons/fa"; // Corregido a FaShoppingBag
import { Footer } from '../components/Footer.components';
import { Header } from '../components/Header.components';
import NavBar from '../components/NavBarEmp.components';

const LoginForm = () => {
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  const toggleCodeInput = () => {
    setShowCodeInput(!showCodeInput);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const accessCode = event.target.accessCode?.value;

    if (accessCode === "codigoSuperAdmin") {
      setUserRole('superadmin');
    } else if (email && password) {
      setUserRole('user'); // usuario común
    }

    setIsAuthenticated(true); // Simulación de autenticación exitosa
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (userRole === 'superadmin') {
        navigate('/dashboard'); // Redirige a la página de administración
      } else if (userRole === 'user') {
        navigate('/navbar'); // Redirige a la página de NavBar para usuarios comunes
      }
    }
  }, [isAuthenticated, userRole, navigate]);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div
          className="max-w-md w-full bg-gradient-to-r from-indigo-800 to-indigo-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 animate-slideInFromLeft"
        >
          <h2 className="text-center text-4xl font-extrabold text-white flex justify-center items-center space-x-2 animate-appear">
            <FaShoppingBag />
            <span>FormosaEmprende</span>
            <FaShoppingBag />
          </h2>
          <p className="text-center text-gray-200 animate-appear">
            Inicia sesión en tu cuenta
          </p>
          <form method="POST" action="#" className="space-y-6" onSubmit={handleLogin}>
            <div className="relative">
              <input
                placeholder="john@example.com"
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required
                id="email"
                name="email"
                type="email"
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                htmlFor="email"
              >
                Email 
              </label>
            </div>
            <div className="relative">
              <input
                placeholder="Password"
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required
                id="password"
                name="password"
                type="password"
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                htmlFor="password"
              >
                Contraseña
              </label>
            </div>

            {showCodeInput && (
              <div className="relative animate-slideDown">
                <input
                  placeholder="Código de acceso"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  id="accessCode"
                  name="accessCode"
                  type="text"
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                  htmlFor="accessCode"
                >
                  Código de acceso
                </label>
              </div>
            )}

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-200">
                <input
                  className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                  type="checkbox"
                />
                <span className="ml-2">Recuérdame</span>
              </label>
              <a className="text-sm text-purple-200 hover:underline" href="#">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <button
              className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
              type="submit"
            >
              Inicia sesión
            </button>
            
            <div className="flex justify-end">
              <button
                type="button"
                className="text-white flex items-center"
                onClick={toggleCodeInput}
              >
                <FaKey className="mr-2" />
                {showCodeInput ? "Superadmin" : "¿Eres superadmin o administrador?"}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {isAuthenticated && userRole === 'user' && <NavBar />}
      <Footer />
    </>
  );
};

export default LoginForm;
