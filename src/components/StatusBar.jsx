import React from 'react';

export default function StatusBar({ screen = 'tela1' }) {
  // Exact timestamps from user's screenshots:
  // tela 1: 13:16
  // tela 2: 13:15
  // tela 3: 13:14
  const timeMap = {
    tela1: '13:16',
    tela2: '13:15',
    tela3: '13:14'
  };

  const batteryMap = {
    tela1: '23',
    tela2: '23',
    tela3: '24'
  };

  const displayTime = timeMap[screen] || '13:15';
  const displayBattery = batteryMap[screen] || '23';

  return (
    <div className="status-bar">
      <div className="status-bar-left">
        <span className="status-time">{displayTime}</span>
        {/* Subtle camera/scan icon in status bar */}
        <svg className="status-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
          <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      </div>

      <div className="status-bar-right">
        {/* Vibration / Silent Icon */}
        <svg className="status-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m2 8 2 2-2 2 2 2-2 2" />
          <path d="m22 8-2 2 2 2-2 2 2 2" />
          <rect width="8" height="14" x="8" y="5" rx="2" />
        </svg>

        {/* Wi-Fi Icon */}
        <svg className="status-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
        </svg>

        {/* Cellular Signal Icon */}
        <svg className="status-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="16" width="3" height="6" rx="0.5" />
          <rect x="7" y="12" width="3" height="10" rx="0.5" />
          <rect x="12" y="8" width="3" height="14" rx="0.5" />
          <rect x="17" y="4" width="3" height="18" rx="0.5" />
        </svg>

        {/* Battery Indicator with number inside pill */}
        <div className="battery-capsule">
          <span>{displayBattery}</span>
        </div>
      </div>
    </div>
  );
}
