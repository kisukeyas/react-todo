import { useTranslation } from 'react-i18next'
import './HomePage.css'

function HomePage() {
  const { t } = useTranslation()
  
  // TODO: Replace with actual App Store URL when app is published
  const APP_STORE_URL = '#'
  const isAppPublished = false // Change to true when app is published

  const features = [
    {
      icon: '🎤',
      title: t('features.items.voice.title'),
      description: t('features.items.voice.description'),
    },
    {
      icon: '📖',
      title: t('features.items.ai.title'),
      description: t('features.items.ai.description'),
    },
    {
      icon: '⏰',
      title: t('features.items.time.title'),
      description: t('features.items.time.description'),
    },
    {
      icon: '🔒',
      title: t('features.items.privacy.title'),
      description: t('features.items.privacy.description'),
    },
    {
      icon: '📱',
      title: t('features.items.habit.title'),
      description: t('features.items.habit.description'),
    },
    {
      icon: '☁️',
      title: t('features.items.offline.title'),
      description: t('features.items.offline.description'),
    },
  ]


  const handleAppStoreClick = () => {
    if (isAppPublished) {
      window.open(APP_STORE_URL, '_blank')
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">{t('hero.title')}</h1>
              <p className="hero-subtitle">
                {t('hero.subtitle')}
              </p>
              <p className="hero-description">
                {t('hero.description')}
              </p>
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary app-store-btn"
                  onClick={handleAppStoreClick}
                  disabled={!isAppPublished}
                >
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt={t('hero.downloadButton')}
                    className="app-store-badge"
                  />
                  {!isAppPublished && (
                    <span className="coming-soon">{t('hero.comingSoon')}</span>
                  )}
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="app-image-container">
                <img 
                  src="/images/icon.png" 
                  alt="Talk Diary Icon" 
                  className="app-main-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-subtitle">
            {t('features.subtitle')}
          </p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="steps-section">
        <div className="container">
          <h2 className="section-title">{t('steps.title')}</h2>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3 className="step-title">{t('steps.step1.title')}</h3>
              <p className="step-description">{t('steps.step1.description')}</p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3 className="step-title">{t('steps.step2.title')}</h3>
              <p className="step-description">{t('steps.step2.description')}</p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3 className="step-title">{t('steps.step3.title')}</h3>
              <p className="step-description">{t('steps.step3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <h2 className="contact-title">{t('contact.title')}</h2>
            <p className="contact-subtitle">
              {t('contact.subtitle')}
            </p>
            
            <div className="contact-info">
              <a href="mailto:talk.diary.app@gmail.com" className="email-link">
                <span className="email-icon">✉️</span>
                talk.diary.app@gmail.com
              </a>
              <p className="contact-note">
                {t('contact.emailNote')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage