import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div className="flex flex-col items-center bg-[#FF6F6F] min-h-screen p-10 text-white">
      <h1 className="text-5xl font-bold text-white mb-10 font-spartan">Carrito de Compras</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-2xl font-sanchez">El carrito está vacío</p>
      ) : (
        <div className="w-full max-w-4xl bg-white text-black p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-[#FF6F6F] mb-6">Resumen de tu carrito</h2>
          {cartItems.map((item, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4 shadow-sm"
            >
              <span className="text-xl font-sanchez">{item.name}</span>
              <span className="text-xl font-sanchez">${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      )}

      <Link to="/business-list" className="mt-8 bg-white text-[#FF6F6F] font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100">
        Volver a la Lista de Negocios
      </Link>
    </div>
  );
};

export default ShoppingCart;
