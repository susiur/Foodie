import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-400 text-black">
      <div className="w-full max-w-xs bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-600 font-spartan">Crear cuenta</h2>

        <form className="flex flex-col">
          <input type="text" placeholder="Nombre" className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez" />
          <input type="text" placeholder="Apellido" className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez" />
          <input type="text" placeholder="Teléfono" className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez" />
          <input type="password" placeholder="Contraseña" className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez" />
          
          <Link to="/login" className="bg-purple-600 text-white py-3 rounded-lg text-center font-spartan">
            Ingresar
          </Link>

          <p className="mt-4 text-center text-sm font-sanchez">
            <Link to="/login" className="text-purple-600">Ya tengo una cuenta</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
