import React, { useState } from 'react';
import ProductAvailability from './BusinessAvailability';
import dunkin from '../assets/dunkinLogo.png'
import migueria from '../assets/laMigueriaLogo.png'
import portal from '../assets/elPortalLogo.png'
import criminal from '../assets/criminalLogo.png'

const BusinessList = () => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const businesses = [
    {
      name: "Dunkin' Donuts",
      contact: "313 870 2329",
      available: true,
      logo: dunkin,
    },
    {
      name: "La Miguería",
      contact: "313 870 2329",
      available: false,
      logo: migueria,
    },
    {
      name: "El Portal",
      contact: "313 870 2329",
      available: true,
      logo: portal,
    },
    {
      name: "Criminal Taquería",
      contact: "313 870 2329",
      available: false,
      logo: criminal,
    }
  ];

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
              <p className="text-[#FF6F6F] font-spartan">Contacto {business.contact}</p>
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
