import React from 'react'
import { useLanguage } from '../hooks/useLanguage'
// import img1 from '../assets/400.png'
// import img2 from '../assets/1500.png'
// import img3 from '../assets/3000.png'
// import img4 from '../assets/10000.png'
// import img5 from '../assets/25000.png'

const Campaign: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="campaign" className="campaign">
      <div className="container">
        <h2 className="section-title">{t('campaign.title')}</h2>
        <p className="section-subtitle">
          {t('campaign.subtitle')}
        </p>
        
        <div className="campaign-card">
          <div className="campaign-image">
            <div>
              <h3>🌊 {t('campaign.title')}</h3>
              <p>{t('about.emergencyDesc')}</p>
            </div>
          </div>
          <div className="campaign-content">
            <h3 className="campaign-title">{t('campaign.cardTitle')}</h3>
            <p className="campaign-description">
              {t('campaign.description1')}
            </p>
            <p className="campaign-description">
              {t('campaign.description2')}
            </p>
            
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '5%' }}></div>
            </div>
            
            <div className="campaign-stats">
              <span className="raised-amount">₹22,500 {t('campaign.raised')}</span>
              <span>{t('campaign.goal')}</span>
              <span>2% {t('campaign.complete')}</span>
            </div>
            
            <h4 style={{ marginBottom: '15px', color: '#2c3e50' }}>{t('campaign.donationTitle')}</h4>
            <ul className="donation-list">
              <li>{t('campaign.donation1')}</li>
              <li>{t('campaign.donation2')}</li>
              <li>{t('campaign.donation3')}</li>
              <li>{t('campaign.donation4')}</li>
              <li>{t('campaign.donation5')}</li>
              <li>{t('campaign.donation6')}</li>
            </ul>
            
            <div style={{ marginTop: '30px' }}>
              <a href="#donate" className="btn btn-primary">
                {t('hero.donateBtn')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Campaign
