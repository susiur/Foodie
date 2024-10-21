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
    <div className="flex flex-col justify-center items-center h-screen bg-[#FF6F6F] text-white text-center">
      <h2 className="text-7xl font-bold font-leaguespartan">Donde la comida y la sostenibilidad se encuentran</h2>
    </div>
  );
};

export default WelcomeScreen;
