'use client';

import { useEffect, useMemo, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type ThemeMode = 'light' | 'dark';

function getSystemTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: ThemeMode) {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('theme');
      const nextTheme: ThemeMode = stored === 'dark' || stored === 'light' ? stored : getSystemTheme();
      setTheme(nextTheme);
      applyTheme(nextTheme);
    } catch {
      const nextTheme = getSystemTheme();
      setTheme(nextTheme);
      applyTheme(nextTheme);
    }
  }, []);

  const label = useMemo(() => {
    const next = theme ?? 'light';
    return next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
  }, [theme]);

  const toggle = () => {
    const next: ThemeMode = (theme ?? getSystemTheme()) === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
    try {
      window.localStorage.setItem('theme', next);
    } catch {
      // ignore
    }
  };

  const isDark =
    theme === 'dark' ||
    (theme === null && typeof document !== 'undefined' && document.documentElement.classList.contains('dark'));

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="relative h-7 w-14 rounded-full border border-border/60 bg-secondary shadow-sm transition-colors hover:bg-secondary/80"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 transition-opacity dark:from-primary/10 dark:via-primary/0 dark:to-accent/10" />
      <span
        className={
          "absolute top-1/2 -translate-y-1/2 grid h-5 w-5 place-items-center rounded-full shadow transition-all " +
          (isDark
            ? 'left-[34px] bg-[hsl(var(--charcoal))]'
            : 'left-1 bg-white')
        }
      >
        <Sun className="h-3 w-3 text-[hsl(var(--vibrant-orange))] dark:hidden" />
        <Moon className="h-3 w-3 text-[hsl(var(--electric-blue))] hidden dark:block" />
      </span>
    </button>
  );
}
