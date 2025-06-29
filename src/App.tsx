import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HomePage from './pages/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import './styles/global.css'
import './styles/App.css'

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <Router>
      <header className="app-header">
        <nav className="nav-container">
          <Link to="/" className="logo">
            Talk Diary
          </Link>
          <div className="nav-right">
            <Link to="/privacy" className="nav-link">
              {t('nav.privacyPolicy')}
            </Link>
            <Link to="/terms" className="nav-link">
              {t('nav.termsOfService')}
            </Link>
            <div className="language-switcher">
              <button
                className={`lang-btn ${i18n.language === 'ja' ? 'active' : ''}`}
                onClick={() => changeLanguage('ja')}
              >
                日本語
              </button>
              <span className="lang-separator">|</span>
              <button
                className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
              >
                English
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App