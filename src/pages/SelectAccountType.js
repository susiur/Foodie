import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectAccountType = () => {
  const navigate = useNavigate();

  const navigateToUserAccountCreation = () => {
    navigate('/create-account');
  };

  const navigateToEstablishmentAccountCreation = () => {
    navigate('/register-store');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#FF6F6F]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-5xl font-bold mb-12 text-center text-[#FF6F6F] font-leaguespartan">Crear cuenta</h2>
        <div className="flex flex-col">
          <button
            onClick={navigateToUserAccountCreation}
            className="bg-[#FF6F6F] text-white py-3 px-4 rounded-lg mb-8 text-center font-leaguespartan text-xl"
          >
            Crear cuenta de Usuario
          </button>
          <button
            onClick={navigateToEstablishmentAccountCreation}
            className="bg-[#FF6F6F] text-white py-3 px-4 rounded-lg text-center font-leaguespartan text-xl"
          >
            Crear cuenta de Establecimiento
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectAccountType;
