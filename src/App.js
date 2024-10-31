import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import WelcomeScreen from './pages/WelcomeScreen';
import SelectRoleScreen from './pages/SelectRoleScreen';
import LoginScreen from './pages/LoginScreen';
import CreateAccount from './pages/CreateAccount';
import OwnerDetails from './pages/OwnerDetails';
import EstablishmentDetails from './pages/EstablishmentDetails';
import AccountDetails from './pages/AccountDetails';
import SelectAccountType from './pages/SelectAccountType';
import BusinessList from './pages/BusinessList';
import ProductAvailability from './pages/ProductAvailability';
import RegisterStore from './pages/RegisterStore';
import ShoppingCart from './pages/ShoppingCart';

// Componente Layout para manejar la lógica del ícono del carrito
const Layout = ({ children, cartItems }) => {
  const location = useLocation(); // Ahora estamos dentro del Router
  const showCartIcon = location.pathname === '/business-list' || location.pathname.includes('/availability');

  return (
    <div className="App">
      {/* Mostrar el ícono del carrito solo en las rutas especificadas */}
      {showCartIcon && (
        <div className="absolute top-5 right-10">
          <Link to="/cart" className="text-white text-2xl">
            🛒 <span>({cartItems.length})</span>
          </Link>
        </div>
      )}
      {children}
    </div>
  );
};

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar elementos al carrito
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      {/* Envolvemos las rutas con el componente Layout */}
      <Layout cartItems={cartItems}>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/select-role" element={<SelectRoleScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/select-account-type" element={<SelectAccountType />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/owner-details" element={<OwnerDetails />} />
          <Route path="/establishment-details" element={<EstablishmentDetails />} />
          <Route path="/account-details" element={<AccountDetails />} />
          <Route path="/register-store" element={<RegisterStore />} />
          
          {/* Vista de lista de negocios */}
          <Route path="/business-list" element={<BusinessList />} />
          
          {/* Vista de disponibilidad de productos con opción de añadir al carrito */}
          <Route
            path="/availability/:businessId"
            element={<ProductAvailability addToCart={addToCart} />}
          />
          
          {/* Vista del carrito de compras */}
          <Route path="/cart" element={<ShoppingCart cartItems={cartItems} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
