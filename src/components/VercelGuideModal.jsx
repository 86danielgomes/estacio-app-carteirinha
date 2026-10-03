import React, { useState } from 'react';

export default function VercelGuideModal({ isOpen, onClose, onShowToast }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!isOpen) return null;

  const copyCommand = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    onShowToast('Comando copiado!');
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="vercel-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12 1L24 22H0L12 1Z" />
              </svg>
            </div>
            <h3>Como hospedar este app no Vercel</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <p className="modal-intro">
            Este projeto já está 100% configurado com <code>vercel.json</code> e pronto para produção no Vercel. Escolha o método de sua preferência:
          </p>

          {/* Método 1: Vercel CLI (O mais rápido) */}
          <div className="deploy-step-box">
            <div className="step-badge">Opção 1</div>
            <h4>Deploy instantâneo via Vercel CLI (Recomendado)</h4>
            <p>Abra o terminal na pasta do projeto e execute:</p>
            <div className="code-snippet-box">
              <code>npx vercel</code>
              <button 
                type="button" 
                className="copy-snippet-btn"
                onClick={() => copyCommand('npx vercel', 1)}
              >
                {copiedIndex === 1 ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
            <p className="step-hint">
              Siga os passos interativos no terminal (pressione Enter para confirmar o build Vite). Seu app estará no ar com link <code>.vercel.app</code> em segundos!
            </p>
          </div>

          {/* Método 2: GitHub + Vercel Dashboard */}
          <div className="deploy-step-box">
            <div className="step-badge">Opção 2</div>
            <h4>Via GitHub (Integração Contínua)</h4>
            <ol className="step-list">
              <li>Crie um repositório no seu GitHub.</li>
              <li>Envie este código:
                <div className="code-snippet-box">
                  <code>git init && git add . && git commit -m "feat: Estacio App"</code>
                  <button 
                    type="button" 
                    className="copy-snippet-btn"
                    onClick={() => copyCommand('git init && git add . && git commit -m "feat: Estacio App"', 2)}
                  >
                    {copiedIndex === 2 ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
              </li>
              <li>Acesse <a href="https://vercel.com/new" target="_blank" rel="noreferrer">vercel.com/new</a>.</li>
              <li>Importe o repositório — o Vercel detectará o Vite automaticamente.</li>
              <li>Clique em <b>Deploy</b>!</li>
            </ol>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-primary" onClick={onClose}>
            Entendi, fechar
          </button>
        </div>
      </div>
    </div>
  );
}
