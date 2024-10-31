// BusinessList.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('http://localhost:3001/tiendas');
        const data = await response.json();
        const formattedBusinesses = data.map((business) => ({
          id: business.id, // Asegúrate de tener un ID único para cada negocio
          name: business.establishmentNombre,
          telefono: business.telefono,
          available: business.activa,
          logo: business.logo,
          linkWssp: business.linkWssp,
        }));
        setBusinesses(formattedBusinesses);
      } catch (error) {
        console.error('Error fetching businesses:', error);
      }
    };

    fetchBusinesses();
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#FF6F6F] min-h-screen p-6">
      <h1 className="text-5xl font-bold text-white mb-6 font-spartan">ECOBITE</h1>
      <div className="w-full max-w-lg">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center cursor-pointer"
            onClick={() => navigate(`/availability/${business.id}`)}
          >
            <img
              src={business.logo}
              alt={`${business.name} logo`}
              className="w-16 h-16 object-contain mr-4"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-[#FF6F6F] font-sanchez">{business.name}</h2>
              <p className="text-[#FF6F6F] font-spartan">Contacto {business.telefono}</p>
            </div>
            <div className="flex flex-col items-center">
              <span
                className={`text-white font-spartan py-1 px-3 rounded-full text-sm ${
                  business.available ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                {business.available ? 'Disponible' : 'No Disponible'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessList;
