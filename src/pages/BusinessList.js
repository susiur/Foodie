import React, { useState, useEffect } from 'react';
import ProductAvailability from './BusinessAvailability';

const BusinessList = () => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    // Función para obtener las tiendas desde el backend
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('http://localhost:3001/tiendas'); // Cambia la URL si es necesario
        const data = await response.json();
        // Mapea los datos a la estructura que necesitas
        const formattedBusinesses = data.map((business) => ({
          name: business.establishmentNombre, // Cambia al nombre correcto del backend
          telefono: business.telefono, // Asegúrate de que este campo exista en el backend
          available: business.activa, // Cambia al campo correcto para disponibilidad
          logo: business.logo, // Asegúrate de que el logo tenga la URL correcta
          linkWssp: business.linkWssp, // Asegúrate de que el logo tenga la URL correcta
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
        {businesses.map((business, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center cursor-pointer"
            onClick={() => setSelectedBusiness(business)}
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

      {selectedBusiness && <ProductAvailability business={selectedBusiness} />}
    </div>
  );
};

export default BusinessList;
