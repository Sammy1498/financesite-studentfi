
import React, { useState } from 'react';
import { SketchButton } from './UI';

interface LayoutProps {
  children: React.ReactNode;
  currentView: string;
  onNavigate: (view: 'landing' | 'dashboard' | 'waitlist') => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="layout-container flex flex-col items-center">
        <header className="w-full max-w-[1200px] flex items-center justify-between px-6 py-6">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('landing')}
          >
            <div className="p-2 bg-primary rounded-full group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-white">draw</span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight">StudentFi</h2>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('landing')}
              className={`text-sm font-semibold hover:text-primary transition-colors flex items-center gap-1.5 ${currentView === 'landing' ? 'text-primary' : ''}`}
            >
              <span className="material-symbols-outlined text-[18px]">lightbulb</span>
              The Vision
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className={`text-sm font-semibold hover:text-primary transition-colors flex items-center gap-1.5 ${currentView === 'dashboard' ? 'text-primary' : ''}`}
            >
              <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
              Try the Sandbox
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <SketchButton onClick={() => onNavigate('waitlist')}>
              <span className="material-symbols-outlined text-[18px]">mail</span>
              Join Waitlist
            </SketchButton>
          </div>
        </header>
      </div>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="py-12 px-6 border-t-2 border-dashed border-gray-200 dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">draw</span>
            <p className="font-black text-lg">StudentFi</p>
          </div>
          <div className="flex gap-8 opacity-60 text-sm font-bold items-center">
            <a href="#" className="hover:text-primary flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">policy</span>
              Privacy
            </a>
            <a href="#" className="hover:text-primary flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">gavel</span>
              Terms
            </a>
            <a href="#" className="hover:text-primary flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
              Contact
            </a>
            <a href="#" className="hover:text-primary flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">share</span>
              X (Twitter)
            </a>
          </div>
          <p className="opacity-40 text-sm font-medium italic">© 2024 StudentFi. Keep sketching.</p>
        </div>
      </footer>
    </div>
  );
};
