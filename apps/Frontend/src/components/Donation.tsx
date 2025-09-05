import React from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { useLanguage } from '../hooks/useLanguage'
import img1 from '../assets/400.png'
import img2 from '../assets/1500.png'
import img3 from '../assets/3000.png'
import img4 from '../assets/10000.png'
import img5 from '../assets/25000.png'
import img6 from '../assets/above.png'

const Donation: React.FC = () => {
  const { t } = useLanguage()
  
  // Sample UPI payment URLs for different amounts
  const generateUPIUrl = (amount: number) => {
    return `upi://pay?pa=punjabrelief@upi&pn=Punjab Relief Fund&am=${amount}&cu=INR&tn=Punjab Flood Relief Donation`
  }

  return (
    <section id="donate" className="donation">
      <div className="container">
        <h2 className="section-title">{t('donation.title')}</h2>
        <p className="section-subtitle">
          {t('donation.subtitle')}
        </p>
        
        <div className="donation-grid">
          <div className="donation-info">
            <h3>{t('donation.helpTitle')}</h3>
            <p>
              {t('donation.helpDesc')}
            </p>
            <ul className="donation-list">
              <li>{t('donation.help1')}</li>
              <li>{t('donation.help2')}</li>
              <li>{t('donation.help3')}</li>
              <li>{t('donation.help4')}</li>
              <li>{t('donation.help5')}</li>
            </ul>
            <p>
              <strong>{t('donation.contact')} <strong>+91-97110-77372</strong></strong>
            </p>
            <div style={{ marginTop: '30px' }}>
              <a href="tel:+91 9711077372" className="btn btn-secondary">
                {t('donation.callBtn')}
              </a>
            </div>
          </div>
          
          <div className="qr-section">
            <h3>{t('donation.qrTitle')}</h3>
            <p>{t('donation.qrSubtitle')}</p>
            
            <div className="qr-grid">
              <div className="qr-item">
                <div className="qr-amount">₹400</div>
                <div className="qr-code">
                 
                  <img src={img1} alt="₹400 Donation QR Code" style={{ width: '120px', height: '120px' }} />
                </div>
                <p>{t('donation.kit1')}</p>
              </div>
              
              <div className="qr-item">
                <div className="qr-amount">₹1,500</div>
                <div className="qr-code">
                  <img src={img2} alt="₹1500 Donation QR Code" style={{ width: '120px', height: '120px' }} />
                </div>
                <p>{t('donation.kit2')}</p>
              </div>
              
              <div className="qr-item">
                <div className="qr-amount">₹3,000</div>
                <div className="qr-code">
                  <img src={img3} alt="₹3000 Donation QR Code" style={{ width: '120px', height: '120px' }} />
                </div>
                <p>{t('donation.kit3')}</p>
              </div>
              
              <div className="qr-item">
                <div className="qr-amount">₹10,000</div>
                <div className="qr-code">
                  <img src={img4} alt="₹10000 Donation QR Code" style={{ width: '120px', height: '120px' }} />
                </div>
                <p>{t('donation.kit4')}</p>
              </div>
              <div className="qr-item">
                <div className="qr-amount">₹25,000</div>
                <div className="qr-code">
                  <img src={img5} alt="₹25000 Donation QR Code" style={{ width: '120px', height: '120px' }} />
                </div>
                <p>{t('donation.kit5')}</p>
              </div>
              <div className="qr-item">
                <div className="qr-amount">₹25,000 and above</div>
                <div className="qr-code">
                  <img src={img6} alt="₹10000 Donation QR Code" style={{ width: '120px', height: '120px' }} />
                </div>
                <p>{t('donation.kit6')}</p>
              </div>
            </div>
            
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>
                {/* <strong>{t('donation.upiId')}</strong><br /> */}
                {t('donation.secure')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Donation
