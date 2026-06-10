import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaTiktok, FaFacebookF } from 'react-icons/fa';
import './App.css';

// Pages
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import PopiAct from './pages/PopiAct';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when navigating & handle hash scrolling
  useEffect(() => {
    setIsMenuOpen(false);

    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="header-wrapper">
        <nav className="navbar-custom">
          <Link to="/" className="nav-logo">
            <img src="/logo.png" alt="Chiscloud Deliveries" />
            <span>Chiscloud Deliveries</span>
          </Link>

          <button
            className="mobile-nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen
              ? <FaTimes size={22} color="#1a1a1a" />
              : <FaBars size={22} color="#1a1a1a" />}
          </button>

          <div className={`nav-links-wrapper ${isMenuOpen ? 'show' : ''}`}>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/#how-to-order">How to Order</Link>
              <Link to="/#about">About Us</Link>
              <Link to="/#faq">FAQ</Link>
              <Link to="/#contact">Contact</Link>
            </div>
            <a href="https://play.google.com/store/apps/details?id=za.co.chiscloud.kasicentralservices&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="btn-custom btn-custom-primary">
              DOWNLOAD APP
            </a>
          </div>
        </nav>
      </header>

      {/* ===== ROUTING ===== */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/popi" element={<PopiAct />} />
      </Routes>

      {/* ===== FOOTER ===== */}
      <footer className="footer-wrapper py-5 mt-auto">
        <div className="container text-center">
          <Link to="/" className="nav-logo justify-content-center mb-4">
            <img src="/logo.png" alt="Chiscloud Deliveries" />
            <span>Chiscloud Deliveries</span>
          </Link>
          
          <div className="d-flex flex-wrap justify-content-center gap-4 mb-3">
            <Link to="/" className="small fw-semibold" style={{ color: '#6b7280' }}>Home</Link>
            <Link to="/privacy" className="small fw-semibold" style={{ color: '#6b7280' }}>Privacy Policy</Link>
            <Link to="/terms" className="small fw-semibold" style={{ color: '#6b7280' }}>Terms of Service</Link>
            <Link to="/popi" className="small fw-semibold" style={{ color: '#6b7280' }}>POPI Act</Link>
          </div>

          <div className="d-flex justify-content-center gap-3 my-4">
            <a 
              href="https://www.facebook.com/p/Chiscloud-Deliveries-100075696017886/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center justify-content-center"
              style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#f3f4f6', color: '#1a1a1a', transition: 'all 0.2s' }}
            >
              <FaFacebookF size={18} />
            </a>
            <a 
              href="https://www.tiktok.com/@chiscloud.deliver" 
              target="_blank" 
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center justify-content-center"
              style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#f3f4f6', color: '#1a1a1a', transition: 'all 0.2s' }}
            >
              <FaTiktok size={18} />
            </a>
          </div>

          <div className="footer-divider" />
          <p className="small mb-0" style={{ color: '#9ca3af' }}>
            &copy; {new Date().getFullYear()} Chiscloud Deliveries. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
