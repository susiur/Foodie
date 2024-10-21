import React from 'react';
import { Link } from 'react-router-dom';

const OwnerDetails = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#FF6F6F] text-black">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-5xl font-bold mb-6 text-center text-[#FF6F6F] font-spartan">Crear cuenta</h2>
        <h3 className="font-bold mb-4 text-left font-spartan text-2xl">Datos del Propietario</h3>

        <form className="flex flex-col">
          <input type="text" placeholder="Nombre y Apellido" className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez" />
          <input type="text" placeholder="Documento" className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez" />
          <input type="password" placeholder="Contraseña" className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez" />

          <Link to="/establishment-details" className="bg-[#FF6F6F] text-white py-3 rounded-lg text-center font-spartan text-xl">
            Continuar
          </Link>
        </form>
      </div>
    </div>
  );
};

export default OwnerDetails;
