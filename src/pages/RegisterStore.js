import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterStore = () => {
  const navigate = useNavigate(); // Para redirigir después de enviar el formulario

  // Estados para almacenar los datos de cada sección
  const [ownerData, setOwnerData] = useState({
    nombre: '',
    documento: '',
    password: '',
  });

  const [establishmentData, setEstablishmentData] = useState({
    nombre: '',
    nit: '',
    direccion: '',
    ciudad: '',
  });

  const [accountData, setAccountData] = useState({
    usuario: '', // Se mantiene como 'usuario' para el DTO
    password: '',
    telefono: '',
    email: '',
  });

  const [storeInfo, setStoreInfo] = useState({
    logo: '',
    linkWssp: '',
  });

  const [loading, setLoading] = useState(false); // Estado para manejar la carga

  const handleOwnerChange = (e) => {
    setOwnerData({ ...ownerData, [e.target.name]: e.target.value });
  };

  const handleEstablishmentChange = (e) => {
    setEstablishmentData({ ...establishmentData, [e.target.name]: e.target.value });
  };

  const handleAccountChange = (e) => {
    setAccountData({ ...accountData, [e.target.name]: e.target.value });
  };

  const handleStoreInfoChange = (e) => {
    setStoreInfo({ ...storeInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    setLoading(true); // Activa el estado de carga

    const dataToSend = {
      ownerNombre: ownerData.nombre,
      ownerDocumento: ownerData.documento,
      ownerPassword: ownerData.password, // contraseña del dueño
      establishmentNombre: establishmentData.nombre,
      establishmentNit: establishmentData.nit,
      accountUsuario: accountData.usuario, // usuario para la cuenta
      accountPassword: accountData.password, // contraseña de la cuenta
      email: accountData.email,
      telefono: accountData.telefono,
      direccion: establishmentData.direccion,
      ciudad: establishmentData.ciudad,
      activa: true,
      logo: storeInfo.logo,
      linkWssp: storeInfo.linkWssp,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tiendas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        // Redirigir a la página de login después de un registro exitoso
        navigate('/login');
      } else {
        // Manejar el error
        console.error('Error al registrar:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    } finally {
      setLoading(false); // Desactiva el estado de carga
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#FF6F6F] text-black">
      <div className="flex flex-col w-full max-w-5xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-5xl font-bold mb-6 text-center text-[#FF6F6F] font-spartan">Crear cuenta</h2>

        <form onSubmit={handleSubmit} className="flex w-full">
          {/* Columna de Datos del Propietario */}
          <div className="flex-1 p-4 border-r border-gray-300">
            <h3 className="font-bold mb-4 text-left font-spartan text-2xl">Datos del Propietario</h3>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre y Apellido"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
              value={ownerData.nombre}
              onChange={handleOwnerChange}
              required
            />
            <input
              type="text"
              name="documento"
              placeholder="Documento"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
              value={ownerData.documento}
              onChange={handleOwnerChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
              value={ownerData.password}
              onChange={handleOwnerChange}
              required
            />
          </div>

          {/* Columna de Datos del Establecimiento */}
          <div className="flex-1 p-4 border-r border-gray-300">
            <h3 className="text-2xl font-bold mb-4 text-left font-spartan">Datos del Establecimiento</h3>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre / Razón Social"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
              value={establishmentData.nombre}
              onChange={handleEstablishmentChange}
              required
            />
            <input
              type="text"
              name="nit"
              placeholder="NIT"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
              value={establishmentData.nit}
              onChange={handleEstablishmentChange}
              required
            />
            <input
              type="text"
              name="direccion"
              placeholder="Direccion"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
              value={establishmentData.direccion}
              onChange={handleEstablishmentChange}
              required
            />
            <input
              type="text"
              name="ciudad"
              placeholder="Ciudad"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
              value={establishmentData.ciudad}
              onChange={handleEstablishmentChange}
              required
            />
          </div>

          {/* Columna de Datos de la tienda */}
          <div className="flex-1 p-4 border-r border-gray-300">
            <h3 className="text-2xl font-bold mb-4 text-left font-spartan">Información de la tienda</h3>
            <input
              type="text"
              name="logo"
              placeholder="Logo"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
              value={storeInfo.logo}
              onChange={handleStoreInfoChange}
              required
            />
            <input
              type="text"
              name="linkWssp"
              placeholder="WhatsApp"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
              value={storeInfo.linkWssp}
              onChange={handleStoreInfoChange}
              required
            />
          </div>

          {/* Columna de Datos de la Cuenta */}
          <div className="flex-1 p-4">
            <h3 className="text-2xl font-bold mb-4 text-left font-spartan">Datos personales de la Cuenta</h3>
            <input
              type="text"
              name="usuario"
              placeholder="Usuario"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
              value={accountData.usuario}
              onChange={handleAccountChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
              value={accountData.email}
              onChange={handleAccountChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
              value={accountData.password}
              onChange={handleAccountChange}
              required
            />
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono atención al cliente"
              className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
              value={accountData.telefono}
              onChange={handleAccountChange}
              required
            />
          </div>
        </form>

        {/* Botones de Ingresar y Ya tengo cuenta */}
        <div className="flex flex-col items-center mt-6">
        <button
                type="submit"
                className={`py-3 px-9 rounded-lg text-center font-spartan text-xl transition-colors ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FF6F6F] text-white hover:bg-[#FF4F4F]'
                }`}
            onClick={handleSubmit}
            disabled={loading}
        >
            {loading ? 'Registrándose...' : 'Registrarse'}
        </button>

          <p className="text-center text-sm font-sanchez">
            <Link to="/login" className="text-[#FF6F6F] hover:underline">Ya tengo cuenta</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterStore;
