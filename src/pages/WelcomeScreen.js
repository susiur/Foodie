import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige a /select-role después de 3 segundos
    const timer = setTimeout(() => {
      navigate('/select-role');
    }, 3000);

    return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonte
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-400 text-white text-center">
      <h2 className="text-4xl font-bold font-spartan">Ordena fácil, ahorras tú.</h2>
      <p className="mt-4 text-lg font-sanchez">Todas tus comidas favoritas en un solo lugar</p>
    </div>
  );
};

export default WelcomeScreen;
