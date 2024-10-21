import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectRoleScreen = () => {
  const navigate = useNavigate();

  // Función para redirigir a la página de login
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#FF6F6F]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold text-center font-leaguespartan text-[#FF6F6F]">Bienvenido</h2>
        <div className="flex flex-col">
          <h3 className='text-2xl text-left font-leaguespartan text-black mt-16 mb-8'>Ingreso como usuario</h3>
          <button
            onClick={handleLogin}
            className="text-4xl text-white font-bold font-leaguespartan bg-[#FF6F6F] p-2 rounded-lg shadow-lg"
          >
            ¡Quiero comprar!
          </button>

          <h3 className='text-2xl text-left font-leaguespartan text-black mt-16 mb-8'>Ingreso como establecimiento</h3>
          <button
            onClick={handleLogin}
            className="text-4xl text-white font-bold font-leaguespartan bg-[#FF6F6F] p-2 rounded-lg shadow-lg"
          >
            ¡Quiero ofrecer mis productos!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectRoleScreen;
