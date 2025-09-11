import React from 'react'
import { useLanguage } from '../hooks/useLanguage'

const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#" className="logo">
            <div className="logo-icon">🩵</div>
            {t('logo.title')}
          </a>
          <ul className="nav-links">
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#campaign">{t('nav.campaign')}</a></li>
            <li><a href="#donate">{t('nav.donate')}</a></li>
            <li>
              <button 
                onClick={toggleLanguage}
                className="btn btn-secondary language-toggle"
              >
                {language === 'en' ? 'हिंदी' : 'English'}
              </button>
            </li>
            <li><a href="#donate" id='xxx' className="btn btn-primary">{t('nav.donateNow')}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
