import React from 'react'
import { useLanguage } from '../hooks/useLanguage'

const Footer: React.FC = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t('logo.title')}</h3>
            <p>
              {t('footer.description')}
            </p>
            <p style={{ marginTop: '15px' }}>
              <strong>{t('footer.helpline')}</strong> +91-97110-77372<br />
              <strong>{t('footer.email')}</strong> pdrf.ac.in@gmail.com
            </p>
          </div>
          
          <div className="footer-section">
            <h3>{t('footer.quickLinks')}</h3>
            <ul>
              <li><a href="#home">{t('nav.home')}</a></li>
              <li><a href="#about">{t('nav.about')}</a></li>
              <li><a href="#campaign">{t('nav.campaign')}</a></li>
              <li><a href="#donate">{t('nav.donateNow')}</a></li>
              <li><a href="#contact">{t('footer.contact')}</a></li>
            </ul>
          </div>
          
          {/* <div className="footer-section">
            <h3>{t('footer.support')}</h3>
            <ul>
              <li><a href="#privacy">{t('footer.privacy')}</a></li>
              <li><a href="#terms">{t('footer.terms')}</a></li>
              <li><a href="#volunteer">{t('footer.volunteer')}</a></li>
              <li><a href="#csr">{t('footer.csr')}</a></li>
              <li><a href="#transparency">{t('footer.transparency')}</a></li>
            </ul>
          </div> */}
        </div>
        
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
