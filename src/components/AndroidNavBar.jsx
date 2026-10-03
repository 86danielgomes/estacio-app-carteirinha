import React from 'react';

export default function AndroidNavBar({ onBack, onHome, onRecent }) {
  return (
    <div className="android-nav-bar">
      <button 
        type="button" 
        className="android-nav-btn" 
        onClick={onRecent} 
        aria-label="Aplicativos recentes"
        title="Recentes"
      >
        <span className="android-icon-recent">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </button>

      <button 
        type="button" 
        className="android-nav-btn" 
        onClick={onHome} 
        aria-label="Página inicial"
        title="Início"
      >
        <span className="android-icon-home"></span>
      </button>

      <button 
        type="button" 
        className="android-nav-btn" 
        onClick={onBack} 
        aria-label="Voltar"
        title="Voltar"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
    </div>
  );
}
