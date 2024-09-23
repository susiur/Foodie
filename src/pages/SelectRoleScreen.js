import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectRoleScreen = () => {
  const navigate = useNavigate();

  // Función para redirigir a la página de login
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-400">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-16 text-center font-spartan text-black">Bienvenido</h2>

        <div className="flex flex-col space-y-8">
          <button
            onClick={handleLogin}
            className="text-2xl text-purple-600 font-bold font-spartan"
          >
            ¡Quiero comprar!
          </button>

          {/* Botón para elegir vender */}
          <button
            onClick={handleLogin}
            className="text-2xl text-purple-600 font-bold font-spartan"
          >
            ¡Quiero ofrecer mis productos!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectRoleScreen;
