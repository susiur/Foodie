import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    password: '',
    email: '',
  });

  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/Clientes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirigir a la página de login después de un registro exitoso
        navigate('/login');
      } else {
        // Manejar el error
        console.error('Error al registrar:', response.statusText);
      }

    } catch (error) {
      console.error('Hubo un problema con la creación del cliente:', error);
    } finally {
      setLoading(false); // Detiene el estado de carga
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#FF6F6F] text-black">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-5xl font-bold mb-6 text-center text-[#FF6F6F] font-leaguespartan">Crear cuenta</h2>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="mb-4 p-3 rounded-lg border border-gray-300 font-sanchez"
            onChange={handleChange}
            required
          />

          {/* Botón que muestra estado de carga */}
          <button
            type="submit"
            className={`py-3 rounded-lg text-center font-spartan text-xl transition-colors ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FF6F6F] text-white hover:bg-[#FF4F4F]'
            }`}
            disabled={loading} 
          >
            {loading ? 'Creando cuenta...' : 'Crear cuenta'}
          </button>

          <p className="mt-4 text-center text-sm font-leaguespartan">
            <Link to="/login" className="text-[#FF6F6F]">Ya tengo una cuenta</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
