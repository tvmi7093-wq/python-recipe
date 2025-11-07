import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import { PrivacyPage, TermsPage } from './pages/LegalPages';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Header Component Definition
const Header: React.FC<{ onLoginToggle: () => void, isLoggedIn: boolean }> = ({ onLoginToggle, isLoggedIn }) => {
  const { t } = useTranslation();
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm p-4 w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
          {t('appTitle')}
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">{t('headerPricing')}</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">{t('headerAbout')}</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">{t('headerContact')}</Link>
        </nav>
        <button
          onClick={onLoginToggle}
          className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors"
        >
          {isLoggedIn ? 'Logout (Simulated)' : t('loginButton')}
        </button>
      </div>
    </header>
  );
};

// Footer Component Definition
const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800/50 p-4 mt-16 w-full">
      <div className="container mx-auto text-center text-gray-400">
        <div className="flex justify-center space-x-4">
          <Link to="/privacy" className="hover:text-indigo-400 transition-colors">{t('footerPrivacy')}</Link>
          <Link to="/terms" className="hover:text-indigo-400 transition-colors">{t('footerTerms')}</Link>
        </div>
      </div>
    </footer>
  );
};

// Main App Layout
const AppLayout: React.FC<{ onLoginToggle: () => void, isLoggedIn: boolean }> = ({ onLoginToggle, isLoggedIn }) => (
  <div className="min-h-screen flex flex-col items-center">
    <Header onLoginToggle={onLoginToggle} isLoggedIn={isLoggedIn} />
    <main className="flex-grow container mx-auto px-4 pt-24 pb-8 w-full flex justify-center">
      <div className="w-full max-w-4xl">
        <Outlet />
      </div>
    </main>
    <Footer />
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [recipeCount, setRecipeCount] = useState(0);

  const handleLoginToggle = () => {
    setIsLoggedIn(prev => !prev);
    if(isLoggedIn) { // If was logged in, now logging out
      setRecipeCount(0); // Reset count on logout
    }
  };

  const incrementRecipeCount = () => {
    setRecipeCount(prev => prev + 1);
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout onLoginToggle={handleLoginToggle} isLoggedIn={isLoggedIn} />}>
          <Route index element={<HomePage isLoggedIn={isLoggedIn} recipeCount={recipeCount} onRecipeGenerated={incrementRecipeCount} />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;