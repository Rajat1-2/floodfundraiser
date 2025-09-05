import React, { useState, useEffect } from 'react'
import bg from '../assets/punjab_flood.avif'
import img1 from '../assets/imgg1.png'
import img2 from '../assets/imgg2.jpg'
import img3 from '../assets/imgg3.jpg'
import img4 from '../assets/imgg4.jpg'
import img5 from '../assets/imgg5.jpg'
import img6 from '../assets/imgg6.jpg'
import img7 from '../assets/imgg7.jpg'

const galleryImages = [bg, img1, img2, img3, img4, img5, img6, img7]

const Gallery: React.FC = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length)
    }, 2500) // Change image every 2.5 seconds
    return () => clearInterval(interval)
  }, [])

  // ...existing code...
  return (
    <section className="gallery" style={{ padding: '40px 0', textAlign: 'center', background: '#f8f9fa' }}>
      <h2 style={{ marginBottom: '20px' }}>Some Glances of our Campaigns</h2>
      <div style={{ display: 'inline-block' }}>
        <img
          src={galleryImages[current]}
          alt={`Gallery ${current + 1}`}
          style={{ width: '900px', height: '450px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
        />
        <div style={{ marginTop: '18px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button
            className="btn btn-secondary"
            onClick={() => setCurrent((current - 1 + galleryImages.length) % galleryImages.length)}
          >
            ‹ Prev
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setCurrent((current + 1) % galleryImages.length)}
          >
            Next ›
          </button>
        </div>
      </div>
      <div style={{ marginTop: '10px', color: '#555' }}>
        {current + 1} / {galleryImages.length}
      </div>
    </section>
  )
// ...existing
}
export default Gallery