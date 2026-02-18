
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { ViewState } from './types';
import { SketchCard, SketchButton } from './components/UI';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [waitlistStatus, setWaitlistStatus] = useState<'idle' | 'success'>('idle');

  const navigate = (newView: ViewState) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistStatus('success');
  };

  return (
    <Layout currentView={view} onNavigate={navigate}>
      {view === 'landing' && (
        <LandingPage
          onJoin={() => navigate('waitlist')}
          onDashboard={() => navigate('dashboard')}
        />
      )}

      {view === 'dashboard' && <Dashboard />}

      {view === 'waitlist' && (
        <div className="max-w-md mx-auto px-6 py-24 text-center">
          {waitlistStatus === 'idle' ? (
            <SketchCard rotate="-1deg">
              <h2 className="text-3xl font-black mb-4">You're on the list.</h2>
              <p className="opacity-70 mb-8">We’re building a calmer way to manage money. You’ll be among the first to know when we’re ready to share it with you.</p>
              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <input
                  type="email"
                  required
                  placeholder="your@student.edu"
                  className="w-full bg-transparent border-2 border-black dark:border-primary rounded-xl p-4 focus:outline-none"
                />
                <SketchButton type="submit" className="w-full">Get early access</SketchButton>
              </form>
            </SketchCard>
          ) : (
            <SketchCard rotate="2deg" className="border-green-500">
              <span className="material-symbols-outlined text-green-500 text-6xl mb-4">check_circle</span>
              <h2 className="text-3xl font-black mb-4">You're in.</h2>
              <p className="opacity-70 mb-8">We’ve added your name to the list. Keep an eye on your inbox—we’ll reach out soon with next steps.</p>
              <SketchButton variant="outline" onClick={() => navigate('landing')}>
                <span className="material-symbols-outlined">home</span>
                Go back home
              </SketchButton>
            </SketchCard>
          )}
        </div>
      )}
    </Layout>
  );
};

export default App;
