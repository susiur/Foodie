import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectAccountType = () => {
  const navigate = useNavigate();

  const navigateToUserAccountCreation = () => {
    navigate('/create-account');
  };

  const navigateToEstablishmentAccountCreation = () => {
    navigate('/owner-details');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-400">
      <div className="w-full max-w-xs bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-600 font-spartan">Crear cuenta</h2>
        <div className="flex flex-col">
          <button
            onClick={navigateToUserAccountCreation}
            className="bg-purple-600 text-white py-3 px-4 rounded-lg mb-4 text-center font-spartan"
          >
            Crear cuenta de Usuario
          </button>
          <button
            onClick={navigateToEstablishmentAccountCreation}
            className="bg-purple-600 text-white py-3 px-4 rounded-lg text-center font-spartan"
          >
            Crear cuenta de Establecimiento
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectAccountType;
