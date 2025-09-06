import React from 'react'
import { useLanguage } from '../hooks/useLanguage'
// import bg from '../assets/punjab_flood.avif'

const Hero: React.FC = () => {
  const { t } = useLanguage()
  
  const style: React.CSSProperties = {
    backgroundImage: `linear-gradient(rgba(12,18,28,0.55), rgba(12,18,28,0.55)), `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <section id="home" className="hero" style={style}>
      <div className="container">
        <h1>{t('hero.title')}</h1>
        <p>
          {t('hero.subtitle')}
        </p>
        <div className="hero-buttons">
          <a href="#donate" id='xyz' className="btn btn-primary">
            {t('hero.donateBtn')}
          </a>
          <a href="#campaign" className="btn btn-secondary">
            {t('hero.learnMore')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

// import React, { useState } from 'react'
// import { useLanguage } from '../hooks/useLanguage'
// import bg from '../assets/punjab_flood.avif'
// import img1 from '../assets/imgg1.png'
// import img2 from '../assets/imgg2.jpg'
// import img3 from '../assets/imgg3.jpg'
// import img4 from '../assets/imgg4.jpg'
// import img5 from '../assets/imgg5.jpg'
// import img6 from '../assets/imgg6.jpg'
// import img7 from '../assets/imgg7.jpg'
// // import img3 from '../assets/3000.png'

// const galleryImages = [bg, img1, img2, img3,img4,img5,img6,img7]

// const Hero: React.FC = () => {
//   const { t } = useLanguage()
//   const [current, setCurrent] = useState(0)

//   const style: React.CSSProperties = {
//     backgroundImage: `linear-gradient(rgba(12,18,28,0.55), rgba(12,18,28,0.55)), url(${galleryImages[current]})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     transition: 'background-image 0.5s ease'
//   }

//   const nextImage = () => setCurrent((current + 1) % galleryImages.length)
//   const prevImage = () => setCurrent((current - 1 + galleryImages.length) % galleryImages.length)

//   return (
//     <section id="home" className="hero" style={style}>
//       <div className="container">
//         <h1>{t('hero.title')}</h1>
//         <p>
//           {t('hero.subtitle')}
//         </p>
//         <div className="hero-gallery" style={{ marginBottom: '20px', textAlign: 'center' }}>
//           <button onClick={prevImage} className="btn btn-secondary" style={{ marginRight: '10px' }}>‹</button>
//           <span style={{ color: '#fff', fontWeight: 'bold' }}>{current + 1} / {galleryImages.length}</span>
//           <button onClick={nextImage} className="btn btn-secondary" style={{ marginLeft: '10px' }}>›</button>
//         </div>
//         <div className="hero-buttons">
//           <a href="#donate" className="btn btn-primary">
//             {t('hero.donateBtn')}
//           </a>
//           <a href="#campaign" className="btn btn-secondary">
//             {t('hero.learnMore')}
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero
