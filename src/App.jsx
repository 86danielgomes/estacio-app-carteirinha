import React, { useState, useEffect } from 'react';
import Tela1Menu from './components/Tela1Menu';
import Tela2Perfil from './components/Tela2Perfil';
import Tela3Carteirinha from './components/Tela3Carteirinha';
import Toast from './components/Toast';
import VercelGuideModal from './components/VercelGuideModal';
import './App.css';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('tela1');
  const [previousScreen, setPreviousScreen] = useState('tela1');
  const [slideDirection, setSlideDirection] = useState('forward');
  const [toast, setToast] = useState({ visible: false, message: '' });
  const [isVercelModalOpen, setIsVercelModalOpen] = useState(false);
  const [isFrameEnabled, setIsFrameEnabled] = useState(true);

  // Screen transition handler
  const handleNavigate = (targetScreen) => {
    if (targetScreen === currentScreen) return;

    const screenOrder = { tela1: 1, tela2: 2, tela3: 3 };
    const direction = (screenOrder[targetScreen] || 1) >= (screenOrder[currentScreen] || 1) ? 'forward' : 'backward';

    setSlideDirection(direction);
    setPreviousScreen(currentScreen);
    setCurrentScreen(targetScreen);
  };

  const showToast = (message) => {
    setToast({ visible: true, message });
  };

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast({ visible: false, message: '' });
      }, 2400);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  return (
    <div className={`app-viewport-wrapper ${!isFrameEnabled ? 'full-viewport-mode' : ''}`}>
      {/* Desktop Simulator Control Bar */}
      <div className="desktop-simulator-bar">
        <div className="sim-nav-pills">
          <button
            type="button"
            className={`sim-nav-btn ${currentScreen === 'tela1' ? 'active' : ''}`}
            onClick={() => handleNavigate('tela1')}
            title="Tela 1: Menu com atalhos"
          >
            1. Tela 1 (Menu)
          </button>
          <button
            type="button"
            className={`sim-nav-btn ${currentScreen === 'tela2' ? 'active' : ''}`}
            onClick={() => handleNavigate('tela2')}
            title="Tela 2: Perfil com carteirinha compacta"
          >
            2. Tela 2 (Perfil)
          </button>
          <button
            type="button"
            className={`sim-nav-btn ${currentScreen === 'tela3' ? 'active' : ''}`}
            onClick={() => handleNavigate('tela3')}
            title="Tela 3: Carteirinha expandida"
          >
            3. Tela 3 (Expandida)
          </button>
        </div>

        <div className="sim-actions">
          <button
            type="button"
            className="sim-action-btn"
            onClick={() => setIsFrameEnabled(prev => !prev)}
            title={isFrameEnabled ? 'Ver em tela cheia' : 'Ver com moldura de celular'}
          >
            {isFrameEnabled ? '📱 Moldura' : '💻 Tela Cheia'}
          </button>

          <button
            type="button"
            className="sim-action-btn vercel-btn"
            onClick={() => setIsVercelModalOpen(true)}
            title="Ver instruções para publicar no Vercel"
          >
            ▲ Deploy Vercel
          </button>
        </div>
      </div>

      {/* Main Smartphone Shell */}
      <div className={`smartphone-frame ${!isFrameEnabled ? 'no-frame' : ''}`}>
        <div className="phone-screen">
          {/* Active Screen Rendering with animated transition */}
          <div className={`screen-content-wrapper slide-${slideDirection}`}>
            {currentScreen === 'tela1' && (
              <Tela1Menu 
                onNavigate={handleNavigate} 
                onShowToast={showToast} 
              />
            )}

            {currentScreen === 'tela2' && (
              <Tela2Perfil 
                onNavigate={handleNavigate} 
                onShowToast={showToast} 
              />
            )}

            {currentScreen === 'tela3' && (
              <Tela3Carteirinha 
                onNavigate={handleNavigate} 
                onShowToast={showToast} 
              />
            )}
          </div>

          {/* Feedback Toast */}
          <Toast message={toast.message} visible={toast.visible} />
        </div>
      </div>

      {/* Vercel Deployment Instructions Modal */}
      <VercelGuideModal 
        isOpen={isVercelModalOpen} 
        onClose={() => setIsVercelModalOpen(false)}
        onShowToast={showToast}
      />
    </div>
  );
}
