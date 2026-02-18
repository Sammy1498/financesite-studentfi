
import React from 'react';
import { SketchButton, SketchCard, SectionTitle } from './UI';

interface LandingPageProps {
  onJoin: () => void;
  onDashboard: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onJoin, onDashboard }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-6 py-12 md:py-24 max-w-[1200px] mx-auto overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 text-left">
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-[-0.03em]">
                Finally, a budget that <span className="text-primary italic">breathes</span> with you
              </h1>
              <svg className="absolute -bottom-2 left-0 w-48 h-3 text-primary/40" fill="none" viewBox="0 0 200 20">
                <path d="M5 15C50 5 150 5 195 15" stroke="currentColor" strokeLinecap="round" strokeWidth="8"></path>
              </svg>
            </div>
            <p className="text-lg md:text-xl font-medium opacity-80 max-w-[520px]">
              StudentFi helps you track your spending without the stress. No judgment, no jargon—just clarity on where your money goes so you can feel in control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <SketchButton onClick={onJoin} className="px-10 py-5 text-lg">
                <span className="material-symbols-outlined">rocket_launch</span>
                Start your budget
              </SketchButton>
              <div className="flex items-center gap-2 px-4 py-2 opacity-60 cursor-pointer hover:opacity-100 transition-opacity" onClick={onDashboard}>
                <span className="material-symbols-outlined">analytics</span>
                <span className="text-sm font-bold">Try the sandbox demo</span>
              </div>
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-green-500">verified</span>
              <span className="text-sm font-bold">Recommended by 1,200+ students this week</span>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-full relative aspect-[4/3] group">
              {/* Decorative doodles */}
              <div className="absolute -top-6 -left-6 text-primary/30 animate-float z-20">
                <span className="material-symbols-outlined text-5xl">draw</span>
              </div>
              <div className="absolute -bottom-6 -right-6 text-primary/30 animate-float z-20" style={{ animationDelay: '1s' }}>
                <span className="material-symbols-outlined text-5xl">auto_awesome</span>
              </div>

              <div className="w-full h-full sketch-mask overflow-hidden sketch-border bg-gray-100">
                <img
                  src="/assets/hero.png"
                  alt="Student in calm environment"
                  className="img-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-background-light dark:bg-background-dark py-20 px-6" id="problem">
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle>Budgeting doesn't have to be a chore.</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            <SketchCard rotate="-1deg" className="bg-blue-50 dark:bg-blue-900/20 group hover:-rotate-2 transition-transform">
              <div className="size-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">search</span>
              </div>
              <h3 className="text-xl font-black mb-4">The mid-month mystery</h3>
              <p className="font-medium opacity-70">Wondering where your grant went by the second week? You’re not bad with money; you’re just missing a clear view.</p>
            </SketchCard>
            <SketchCard rotate="1deg" className="bg-yellow-50 dark:bg-yellow-900/20 group hover:rotate-2 transition-transform">
              <div className="size-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-yellow-500 text-3xl">notifications_active</span>
              </div>
              <h3 className="text-xl font-black mb-4">No more "checkout anxiety"</h3>
              <p className="font-medium opacity-70">Stop waiting for the low-balance alert. We help you see ahead so you’re never caught off guard at the store.</p>
            </SketchCard>
            <SketchCard rotate="-1deg" className="bg-red-50 dark:bg-red-900/20 group hover:-rotate-2 transition-transform">
              <div className="size-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-red-500 text-3xl">bedtime</span>
              </div>
              <h3 className="text-xl font-black mb-4">Stop the mental math</h3>
              <p className="font-medium opacity-70">Stop calculating rent in your head at 2 AM. We do the math so you can focus on being a student.</p>
            </SketchCard>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-6" id="solution">
        <div className="max-w-[1200px] mx-auto bg-primary/5 rounded-xl p-8 md:p-16 border-2 border-dashed border-primary/30">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">From Messy to Calm</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center">
              <SketchCard rotate="-2deg" className="w-full max-w-sm">
                <p className="font-black mb-4 opacity-40 uppercase">A cluttered view</p>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
                  <div className="relative h-48 w-full sketch-mask-alt overflow-hidden sketch-border-sm grayscale opacity-70 group-hover:opacity-100 transition-all duration-500">
                    <img
                      src="/assets/messy.png"
                      alt="Cluttered desk"
                      className="img-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="material-symbols-outlined text-white/40 text-6xl">insights</span>
                    </div>
                  </div>
                </div>
              </SketchCard>
              <p className="mt-6 font-bold text-gray-500 italic">"Where did my balance go?"</p>
            </div>
            <div className="flex flex-col items-center">
              <SketchCard rotate="2deg" className="w-full max-w-sm border-primary shadow-[4px_4px_0px_0px_rgba(48,171,232,1)]">
                <p className="font-black mb-4 text-primary uppercase">Quiet confidence</p>
                <div className="space-y-4">
                  <div className="h-4 bg-primary/30 rounded-full w-full"></div>
                  <div className="h-4 bg-primary/30 rounded-full w-3/4"></div>
                  <div className="relative h-48 w-full sketch-mask overflow-hidden sketch-border-sm">
                    <img
                      src="/assets/clear.png"
                      alt="Organized desk"
                      className="img-cover"
                    />
                    <div className="absolute top-2 left-2 flex gap-1 z-20">
                      <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-white text-[10px]">done_all</span></div>
                    </div>
                  </div>
                </div>
              </SketchCard>
              <p className="mt-6 font-bold text-primary italic">"I know exactly what's left."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6" id="benefits">
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle>Designed for outcomes</SectionTitle>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center gap-6">
              <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center sketch-border border-primary">
                <span className="material-symbols-outlined text-primary text-4xl">visibility</span>
              </div>
              <h3 className="text-xl font-bold">Absolute clarity</h3>
              <p className="opacity-70">See exactly what you have left for the weekend. No more second-guessing at the counter.</p>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center sketch-border border-primary">
                <span className="material-symbols-outlined text-primary text-4xl">shield</span>
              </div>
              <h3 className="text-xl font-bold">A safe space</h3>
              <p className="opacity-70">We keep it simple and private. No hidden fees, no predatory offers—just you and your goals.</p>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center sketch-border border-primary">
                <span className="material-symbols-outlined text-primary text-4xl">eco</span>
              </div>
              <h3 className="text-xl font-bold">Progress over perfection</h3>
              <p className="opacity-70">Build habits that stick, starting with just $5. It’s about feeling better, not being perfect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-primary/5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center">
          <SectionTitle>What Students Say</SectionTitle>
          <div className="flex flex-wrap justify-center gap-8">
            <SketchCard rotate="-1deg" className="max-w-[300px] relative">
              <span className="material-symbols-outlined text-primary absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-full p-1">grade</span>
              <p className="font-medium italic mb-4">"Finally paid rent on time without sweating it! The UI makes me actually want to check my balance."</p>
              <p className="font-black text-sm text-primary">— Sarah, Uni of Leeds</p>
            </SketchCard>
            <SketchCard rotate="2deg" className="max-w-[300px] relative">
              <span className="material-symbols-outlined text-yellow-500 absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-1">bolt</span>
              <p className="font-medium italic mb-4">"I thought budgeting was for adults with briefcases. Turns out I just needed a sketchy app."</p>
              <p className="font-black text-sm text-primary">— Mark, NYU</p>
            </SketchCard>
            <SketchCard rotate="-2deg" className="max-w-[300px] relative">
              <span className="material-symbols-outlined text-green-500 absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-1">celebration</span>
              <p className="font-medium italic mb-4">"No more ramen-only weeks. StudentFi is literally a life saver for my stomach."</p>
              <p className="font-black text-sm text-primary">— Leo, Stanford</p>
            </SketchCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-8">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Ready for a clearer view?</h2>
            <div className="absolute -top-6 -right-12 hidden md:block">
              <svg className="text-primary fill-none stroke-current stroke-[4px]" height="60" viewBox="0 0 100 100" width="60">
                <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z"></path>
              </svg>
            </div>
          </div>
          <p className="text-xl font-medium opacity-70">
            Join thousands of students who are trading financial stress for a little more calm.
          </p>
          <div className="w-full flex flex-col items-center gap-4">
            <SketchButton onClick={onJoin} className="w-full max-w-[480px] py-6 text-xl">
              <span className="material-symbols-outlined">auto_awesome</span>
              Join the waitlist
            </SketchButton>
            <p className="text-sm font-bold opacity-50 uppercase tracking-widest text-center">Free for students • No credit card required • Secure & Private</p>
          </div>
        </div>
      </section>
    </div>
  );
};
