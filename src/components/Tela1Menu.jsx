import React, { useState } from 'react';
import AndroidNavBar from './AndroidNavBar';

export default function Tela1Menu({ onNavigate, onShowToast }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('menu');
  const [showTaciaGreeting, setShowTaciaGreeting] = useState(false);

  // Perfil shortcuts
  const perfilItems = [
    { id: 'carteirinha', title: 'Carteirinha', icon: '/icon_carteirinha.png', isAction: true },
    { id: 'meus_dados', title: 'Meus dados', icon: '/icon_meus_dados.png' },
    { id: 'politica', title: 'Política de privacidade', icon: '/icon_politica.png' },
    { id: 'envio_doc', title: 'Envio de documentação', icon: '/icon_envio_doc.png' },
    { id: 'config_atendimento', title: 'Configurações de atendimento', icon: '/icon_config_atendimento.png' },
    { id: 'notificacoes', title: 'Notificações', icon: '/icon_notificacoes.png' },
  ];

  // Meu curso shortcuts
  const cursoItems = [
    { id: 'disciplinas', title: 'Disciplinas e avaliações', icon: '/icon_disciplinas.png' },
    { id: 'avaliacoes', title: 'Avaliações digitais', icon: '/icon_avaliacoes.png' },
    { id: 'alteracao_grade', title: 'Alteração de grade', icon: '/icon_alteracao_grade.png' },
    { id: 'formacao', title: 'Formação socioemocional', icon: '/icon_formacao.png' },
    { id: 'provas_polo', title: 'Provas no polo', icon: '/icon_provas_polo.png' },
    { id: 'notas', title: 'Notas e histórico', icon: '/icon_notas.png' },
    { id: 'conteudos', title: 'Conteúdos', icon: '/icon_conteudos.png' },
    { id: 'cursos', title: 'Cursos livres', icon: '/icon_cursos.png' },
    { id: 'horas_aac', title: 'Horas AAC', icon: '/icon_horas_aac.png' },
  ];

  // Filter based on search input
  const filterList = (items) => {
    if (!searchTerm.trim()) return items;
    return items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredPerfil = filterList(perfilItems);
  const filteredCurso = filterList(cursoItems);

  const handleCardClick = (item) => {
    if (item.id === 'carteirinha') {
      onNavigate('tela2');
    } else {
      onShowToast(`Abrindo ${item.title}...`);
    }
  };

  const handleTaciaClick = () => {
    setShowTaciaGreeting(prev => !prev);
  };

  return (
    <div className="tela-container tela-menu">
      {/* Top Blue Header */}
      <header className="menu-header">
        <h1 className="menu-title">Menu</h1>

        {/* Search Bar */}
        <div className="search-bar-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Pesquise por um atalho"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search-icon-btn">
            {searchTerm ? (
              <button 
                type="button" 
                className="clear-search-btn"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="menu-content">
        {/* Tácia Assistant Speech Popover */}
        {showTaciaGreeting && (
          <div className="tacia-speech-bubble" onClick={() => setShowTaciaGreeting(false)}>
            <div className="speech-avatar">
              <img src="/tacia_avatar.png" alt="Tácia" />
            </div>
            <div className="speech-text">
              <strong>Olá, Rebeca!</strong>
              <p>Sou a Tácia, sua assistente virtual. Toque em <b>Carteirinha</b> para acessar seus dados de estudante da Estácio!</p>
            </div>
            <button className="speech-close-btn" type="button">✕</button>
          </div>
        )}

        {/* Section: Perfil */}
        {filteredPerfil.length > 0 && (
          <section className="shortcut-section">
            <div className="section-header-row">
              <h2 className="section-title">Perfil</h2>
              <button 
                type="button" 
                className="section-arrow-btn" 
                onClick={() => onShowToast('Acessando seção Perfil')}
                aria-label="Ver mais opções de perfil"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a202c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            <div className="shortcut-grid">
              {filteredPerfil.map((item) => {
                const isCarteirinha = item.id === 'carteirinha';
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`shortcut-card ${isCarteirinha ? 'carteirinha-highlight' : ''}`}
                    onClick={() => handleCardClick(item)}
                    title={isCarteirinha ? 'Abrir Tela 2: Carteirinha' : item.title}
                  >
                    <div className="card-icon-container">
                      <img src={item.icon} alt={item.title} className="card-3d-icon" />
                      {isCarteirinha && (
                        <span className="carteirinha-pulse-ring" title="Clique para abrir"></span>
                      )}
                    </div>
                    <span className="card-title-text">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Section: Meu curso */}
        {filteredCurso.length > 0 && (
          <section className="shortcut-section">
            <div className="section-header-row">
              <h2 className="section-title">Meu curso</h2>
              <button 
                type="button" 
                className="section-arrow-btn" 
                onClick={() => onShowToast('Acessando seção Meu curso')}
                aria-label="Ver mais opções de curso"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a202c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            <div className="shortcut-grid">
              {filteredCurso.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="shortcut-card"
                  onClick={() => handleCardClick(item)}
                  title={item.title}
                >
                  <div className="card-icon-container">
                    <img src={item.icon} alt={item.title} className="card-3d-icon" />
                  </div>
                  <span className="card-title-text">{item.title}</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* No results notice if searched */}
        {filteredPerfil.length === 0 && filteredCurso.length === 0 && (
          <div className="no-search-results">
            <p>Nenhum atalho encontrado para "<b>{searchTerm}</b>"</p>
            <button 
              type="button" 
              className="clear-search-link"
              onClick={() => setSearchTerm('')}
            >
              Limpar pesquisa
            </button>
          </div>
        )}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="bottom-nav-bar" aria-label="Navegação principal">
        {/* Início */}
        <button
          type="button"
          className={`nav-tab-item ${activeTab === 'inicio' ? 'active' : ''}`}
          onClick={() => { setActiveTab('inicio'); onShowToast('Página Inicial'); }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="nav-tab-label">Início</span>
        </button>

        {/* Financeiro */}
        <button
          type="button"
          className={`nav-tab-item ${activeTab === 'financeiro' ? 'active' : ''}`}
          onClick={() => { setActiveTab('financeiro'); onShowToast('Financeiro'); }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <span className="nav-tab-label">Financeiro</span>
        </button>

        {/* Tácia Center Avatar */}
        <button
          type="button"
          className="nav-tab-item tacia-tab-item"
          onClick={handleTaciaClick}
          title="Falar com a Tácia"
        >
          <div className="tacia-nav-avatar-wrap">
            <img src="/tacia_avatar.png" alt="Tácia" className="tacia-avatar-img" />
          </div>
          <span className="nav-tab-label">Tácia</span>
        </button>

        {/* Suporte */}
        <button
          type="button"
          className={`nav-tab-item ${activeTab === 'suporte' ? 'active' : ''}`}
          onClick={() => { setActiveTab('suporte'); onShowToast('Suporte'); }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span className="nav-tab-label">Suporte</span>
        </button>

        {/* Menu (Active Tab with light blue rounded pill) */}
        <button
          type="button"
          className="nav-tab-item active-menu-pill"
          onClick={() => { setActiveTab('menu'); onShowToast('Você já está no Menu'); }}
        >
          <div className="menu-pill-bg">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#076aeb" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </div>
          <span className="nav-tab-label active-label">Menu</span>
        </button>
      </nav>

      {/* Android System Nav Bar */}
      <AndroidNavBar 
        onBack={() => onShowToast('Menu principal')} 
        onHome={() => onShowToast('Início')} 
        onRecent={() => onShowToast('Aplicativos recentes')} 
      />
    </div>
  );
}
