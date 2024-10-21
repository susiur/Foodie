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


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/business-list'); 
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#FF6F6F] text-black">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold mb-6 text-center text-[#FF6F6F] font-leaguespartan">Iniciar sesión</h2>

        <div className="flex justify-center mb-6">
          <button
            onClick={toggleLoginMethod}
            className="bg-[#FFE5E5] text-[#FF6F6F] py-2 px-4 rounded-lg font-leaguespartan"
          >
            {usePhone ? 'Iniciar con Usuario' : 'Iniciar con Teléfono'}
          </button>
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit}> {}
          {usePhone ? (
            <input
              type="text"
              placeholder="Teléfono"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-leaguespartan"
            />
          ) : (
            <input
              type="text"
              placeholder="Usuario"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-leaguespartan"
            />
          )}

          <input
            type="password"
            placeholder="Contraseña"
            className="mb-4 p-3 rounded-lg border border-gray-300 font-leaguespartan"
          />
          <button type="submit" className="bg-[#FF6F6F] text-white py-3 rounded-lg font-leaguespartan text-xl">
            Iniciar
          </button>
          
          <p className="mt-4 text-center text-sm">
            <span onClick={handleNoAccount} className="text-black cursor-pointer font-leguespartan">
              No tengo una cuenta
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
