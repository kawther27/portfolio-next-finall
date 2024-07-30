import React from 'react';
import '../../styles/Footer.css';

function Footer() {
  return (
    <footer className="custom-footer text-center py-3">
      <p>&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
      <div className="social-links">
        <a href="https://github.com/kawther27" target="_blank" rel="noopener noreferrer">
          <img src="/images/signe-github.png" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/kawther-khlif-8b5537280/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.png" alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
