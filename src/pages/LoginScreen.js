import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [usePhone, setUsePhone] = useState(false);

  const toggleLoginMethod = () => {
    setUsePhone(!usePhone);
  };

  const handleNoAccount = () => {
    navigate('/select-account-type');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-400 text-black">
      <div className="w-full max-w-xs bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-600 font-spartan">Iniciar sesión</h2>

        <div className="flex justify-center mb-4">
          <button
            onClick={toggleLoginMethod}
            className="bg-purple-200 text-purple-600 py-2 px-4 rounded-lg font-spartan"
          >
            {usePhone ? 'Iniciar con Usuario' : 'Iniciar con Teléfono'}
          </button>
        </div>

        <form className="flex flex-col">
          {usePhone ? (
            <input
              type="text"
              placeholder="Teléfono"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
            />
          ) : (
            <input
              type="text"
              placeholder="Usuario"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
            />
          )}

          <input
            type="password"
            placeholder="Contraseña"
            className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
          />
          <button type="submit" className="bg-purple-600 text-white py-3 rounded-lg font-spartan">
            Ingresar
          </button>
          
          <p className="mt-4 text-center text-sm">
            <span onClick={handleNoAccount} className="text-purple-600 cursor-pointer font-sanchez">
              No tengo una cuenta
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
