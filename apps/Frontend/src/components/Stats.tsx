import React from 'react'
import { useLanguage } from '../hooks/useLanguage'

const Stats: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">4,000+</div>
            <div className="stat-label">{t('stats.families')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">{t('stats.villages')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">₹25k+</div>
            <div className="stat-label">{t('stats.funds')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">70+</div>
            <div className="stat-label">{t('stats.kits')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
