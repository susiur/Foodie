import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <h1 className="text-8xl font-bold text-[#FF6F6F] mt-4 font-leaguespartan">ƎB</h1>
      <h1 className="text-6xl font-bold text-[#FF6F6F] mt-4 font-leaguespartan">ECOBITE</h1>
    </div>
  );
};

export default SplashScreen;
