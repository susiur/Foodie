import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige a /welcome después de 3 segundos
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 3000);

    return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <img src={logo} alt="Foodie logo" className="w-40" />
      <h1 className="text-3xl font-bold text-purple-600 mt-4 font-newsreader">FOODIE</h1>
    </div>
  );
};

export default SplashScreen;
