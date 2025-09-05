import React from 'react'
import { useLanguage } from '../hooks/useLanguage'

const About: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>{t('about.title')}</h2>
            <p>
              {t('about.description1')}
            </p>
            <p>
              {t('about.description2')}
            </p>
            <a href="#campaign" className="btn btn-primary">
              {t('about.knowMore')}
            </a>
          </div>
          <div className="about-image">
            <div>
              <h3>{t('about.emergency')}</h3>
              <p>{t('about.emergencyDesc')}</p>
              <br />
              <h3>{t('about.community')}</h3>
              <p>{t('about.communityDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
