import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Galary'
import Stats from './components/Stats'
import About from './components/About'
import Campaign from './components/Campaign'
import Donation from './components/Donation'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <Gallery/>
        <Stats />
        <About />
        <Campaign />
        <Donation />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
