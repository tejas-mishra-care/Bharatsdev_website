'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initial = (stored === 'dark' || stored === 'light' ? stored : systemTheme) as ThemeMode;
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    window.localStorage.setItem('theme', next);
  };

  if (theme === null) return <div className="w-[60px] h-[34px]" />;

  return (
    <label className="switch-container scale-75 md:scale-90 lg:scale-100">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggle}
        aria-label="Toggle theme"
      />
      <div className="switch-slider">
        <div className="switch-sun-moon">
          {/* Moon dots */}
          <svg className="switch-moon-dot absolute left-[10px] top-[3px] w-[6px] h-[6px] z-[4]" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
          <svg className="switch-moon-dot absolute left-[2px] top-[10px] w-[10px] h-[10px] z-[4]" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
          <svg className="switch-moon-dot absolute left-[16px] top-[18px] w-[3px] h-[3px] z-[4]" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>

          {/* Rays (Only visible in light mode) */}
          <svg className="absolute left-[-8px] top-[-8px] w-[43px] h-[43px] z-[-1] fill-white opacity-10 dark:opacity-0 transition-opacity" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
          <svg className="absolute left-[-50%] top-[-50%] w-[55px] h-[55px] z-[-1] fill-white opacity-10 dark:opacity-0 transition-opacity" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
          <svg className="absolute left-[-18px] top-[-18px] w-[60px] h-[60px] z-[-1] fill-white opacity-10 dark:opacity-0 transition-opacity" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>

          {/* Clouds */}
          <svg className="switch-cloud-dark absolute left-[30px] top-[15px] w-10 transition-opacity dark:opacity-0" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
          <svg className="switch-cloud-dark absolute left-[44px] top-[10px] w-5 transition-opacity dark:opacity-0" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
          <svg className="switch-cloud-dark absolute left-[18px] top-[24px] w-[30px] transition-opacity dark:opacity-0" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
          <svg className="switch-cloud-light absolute left-[36px] top-[18px] w-10 transition-opacity dark:opacity-0" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
          <svg className="switch-cloud-light absolute left-[48px] top-[14px] w-5 transition-opacity dark:opacity-0" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
          <svg className="switch-cloud-light absolute left-[22px] top-[26px] w-[30px] transition-opacity dark:opacity-0" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
        </div>
        <div className="switch-stars">
          <svg className="switch-star w-5 top-0.5 left-[3px] delay-[0.3s]" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
          </svg>
          <svg className="switch-star w-[6px] top-4 left-[3px]" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
          </svg>
          <svg className="switch-star w-3 top-5 left-[10px] delay-[0.6s]" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
          </svg>
          <svg className="switch-star w-[18px] top-0 left-[18px] delay-[1.3s]" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
          </svg>
        </div>
      </div>
    </label>
  );
}
