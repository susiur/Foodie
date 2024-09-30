import React from 'react';

const ProductAvailability = ({ business }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-8 bg-purple-400 text-black">
      <div className="w-full max-w-xs bg-white p-8 rounded-lg shadow-md">
        <img
          src={business.logo}
          alt={`${business.name} logo`}
          className="w-48 h-48 object-contain mb-4 mx-auto flex justify-center"
        />
        <form className="flex flex-col">
          <label className="mb-2 text-purple-600 font-spartan text-lg">Nombre</label>
          <input
            type="text"
            value={business.name}
            readOnly
            className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
          />

          <label className="mb-2 text-purple-600 font-spartan text-lg">Teléfono atención al cliente</label>
          <input
            type="text"
            value={business.contact}
            readOnly
            className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
          />

          <label className="mb-2 text-purple-600 font-spartan text-lg">Disponibilidad</label>
          <div className="flex justify-between mb-4">
            <button
              className={`font-sanchez py-2 px-4 rounded-lg w-1/2 mr-2 ${
                business.available ? 'bg-green-500 text-white' : 'bg-green-200 text-green-600 opacity-50'
              }`}
            >
              Disponible
            </button>
            <button
              className={`font-sanchez py-2 px-4 rounded-lg w-1/2 ml-2 ${
                !business.available ? 'bg-red-500 text-white' : 'bg-red-200 text-red-600 opacity-50'
              }`}
            >
              No Disponible
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductAvailability;
