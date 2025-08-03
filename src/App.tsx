import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogFeed from './pages/BlogFeed';
import SinglePost from './pages/SinglePost';
import AuthorPage from './pages/AuthorPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/makala" element={<BlogFeed />} />
              <Route path="/makala/:id" element={<SinglePost />} />
              <Route path="/mwandishi/:id" element={<AuthorPage />} />
              <Route path="/kategoria/:slug" element={<CategoryPage />} />
              <Route path="/kuhusu" element={<AboutPage />} />
              <Route path="/wasiliana" element={<ContactPage />} />
              <Route path="/ingia" element={<LoginPage />} />
              <Route path="/jisajili" element={<SignupPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;