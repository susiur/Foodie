import React from 'react';
import { Link } from 'react-router-dom';

const EstablishmentDetails = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-400 text-black">
      <div className="w-full max-w-xs bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-600 font-spartan">Crear cuenta</h2>
        <h3 className="text-lg font-bold mb-4 text-center font-spartan">Datos del Establecimiento</h3>

        <form className="flex flex-col">
          <input type="text" placeholder="Nombre / Razón Social" className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez" />
          <input type="text" placeholder="NIT" className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez" />

          <Link to="/account-details" className="bg-purple-600 text-white py-3 rounded-lg text-center font-spartan">
            Continuar
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EstablishmentDetails;
