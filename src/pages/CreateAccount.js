import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#FF6F6F] text-black">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-5xl font-bold mb-6 text-center text-[#FF6F6F] font-leaguespartan">Crear cuenta</h2>

        <form className="flex flex-col">
          <input type="text" placeholder="Nombre" className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez" />
          <input type="text" placeholder="Apellido" className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez" />
          <input type="text" placeholder="Teléfono" className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez" />
          <input type="password" placeholder="Contraseña" className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez" />
          
          <Link to="/login" className="bg-[#FF6F6F] text-white py-3 rounded-lg text-center font-spartan text-xl">
            Ingresar
          </Link>

          <p className="mt-4 text-center text-sm font-leaguespartan">
            <Link to="/login" className="text-[#FF6F6F]">Ya tengo una cuenta</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
