import React from 'react';
import StatusBar from './StatusBar';
import AndroidNavBar from './AndroidNavBar';

export default function Tela3Carteirinha({ onNavigate, onShowToast }) {
  const matricula = '2024 1331 7666';

  const handleCopyMatricula = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(matricula.replace(/\s+/g, ''))
      .then(() => {
        onShowToast('Matrícula copiada com sucesso!');
      })
      .catch(() => {
        onShowToast('Matrícula: 2024 1331 7666');
      });
  };

  const handleItemClick = (title) => {
    onShowToast(`Acessando ${title}...`);
  };

  return (
    <div className="tela-container tela-perfil tela-carteirinha-expandida">
      {/* Top Blue Header */}
      <header className="perfil-header">
        <StatusBar screen="tela3" />

        <div className="perfil-nav-top">
          <button 
            type="button" 
            className="back-btn" 
            onClick={() => onNavigate('tela2')}
            aria-label="Voltar para Carteirinha Compacta"
            title="Voltar para Carteirinha Compacta"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <h1 className="perfil-header-title">Perfil</h1>
          <div className="header-placeholder-right"></div>
        </div>

        {/* Estácio Brand Logo */}
        <div className="estacio-logo-container">
          <img 
            src="/estacio_logo.png" 
            alt="Estácio" 
            className="estacio-logo-img"
          />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="perfil-content">
        {/* Full Expanded Carteirinha Card */}
        <div className="carteirinha-card expanded-card">
          {/* Student Header with ATIVO badge */}
          <div className="student-profile-header expanded-header">
            <div className="student-avatar-wrap">
              <img 
                src="/daniel_avatar.png" 
                alt="Daniel Azevedo Gomes" 
                className="student-avatar-img" 
              />
            </div>
            <div className="student-name-block">
              <h2 className="student-name">Daniel Azevedo Gomes</h2>
              <div className="ativo-badge">
                <span>ATIVO</span>
              </div>
            </div>
          </div>

          {/* Thin horizontal divider */}
          <div className="card-divider-line"></div>

          {/* Row 1: CPF & Nascimento */}
          <div className="card-two-col-row">
            <div className="card-col">
              <span className="card-field-label">CPF</span>
              <span className="card-field-value bold-value">350.195.168-05</span>
            </div>
            <div className="card-col">
              <span className="card-field-label">Nascimento</span>
              <span className="card-field-value bold-value">15 Ago 1986</span>
            </div>
          </div>

          {/* Row 2: Curso */}
          <div className="card-field-group">
            <span className="card-field-label">Curso</span>
            <span className="card-field-value bold-value">Gestão de Projetos</span>
          </div>

          {/* Row 3: Tipo de curso & Modelo de ensino */}
          <div className="card-two-col-row">
            <div className="card-col">
              <span className="card-field-label">Tipo de curso</span>
              <span className="card-field-value bold-value">Graduação</span>
            </div>
            <div className="card-col">
              <span className="card-field-label">Modelo de ensino</span>
              <span className="card-field-value bold-value">Total ead</span>
            </div>
          </div>

          {/* Row 4: Campus */}
          <div className="card-field-group">
            <span className="card-field-label">Campus</span>
            <span className="card-field-value bold-value">Polo distr estação tatuapé - são paulo - sp</span>
          </div>

          {/* Row 5: Validade & Matrícula */}
          <div className="card-two-col-row">
            <div className="card-col">
              <span className="card-field-label">Validade</span>
              <span className="card-field-value bold-value">Jan 2028</span>
            </div>
            <div className="card-col matricula-col">
              <span className="card-field-label">Matricula</span>
              <div className="matricula-val-group" onClick={handleCopyMatricula}>
                <span className="card-field-value bold-value">{matricula}</span>
                <button 
                  type="button" 
                  className="copy-icon-btn" 
                  title="Copiar matrícula"
                  aria-label="Copiar matrícula"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="13" height="13" x="9" y="9" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Link: Recolher Carteirinha */}
        <div className="card-action-bar">
          <button 
            type="button" 
            className="expand-carteirinha-btn"
            onClick={() => onNavigate('tela2')}
            title="Recolher e fechar detalhes"
          >
            {/* Inward / Collapse Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 14 10 14 10 20" />
              <polyline points="20 10 14 10 14 4" />
              <line x1="14" y1="10" x2="21" y2="3" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
            <span>Recolher carteirinha</span>
          </button>
        </div>

        {/* Section: Minha conta */}
        <div className="minha-conta-container">
          <h3 className="minha-conta-title">Minha conta</h3>

          {/* Card: Conquistas e recompensas */}
          <button 
            type="button" 
            className="conquistas-card"
            onClick={() => handleItemClick('Conquistas e recompensas')}
          >
            <div className="conquistas-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <span className="conquistas-text">Conquistas e recompensas</span>
          </button>

          {/* Meus dados card */}
          <div className="account-options-list">
            <button 
              type="button" 
              className="account-option-item"
              onClick={() => handleItemClick('Meus dados')}
            >
              <span>Meus dados</span>
            </button>
          </div>
        </div>
      </main>

      {/* Android System Nav Bar */}
      <AndroidNavBar 
        onBack={() => onNavigate('tela2')} 
        onHome={() => onNavigate('tela1')} 
        onRecent={() => onShowToast('Aplicativos recentes')} 
      />
    </div>
  );
}
