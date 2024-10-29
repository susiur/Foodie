import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import RegisterStore from './pages/RegisterStore';

function App() {
  return (
    <Router>
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
        <Route path="/business-list" element={<BusinessList />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;
