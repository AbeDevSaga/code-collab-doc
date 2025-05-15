// components/ThemeSelector.tsx
"use client";

import { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';

export default function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load theme preference
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
      if (savedTheme) {
        setCurrentTheme(savedTheme);
        applyTheme(savedTheme);
      } else {
        // Default to system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', systemPrefersDark);
      }
    }
  }, []);

  const applyTheme = (theme: 'light' | 'dark' | 'system') => {
    if (theme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
    localStorage.setItem('theme', theme);
  };

  const handleThemeChange = (theme: 'light' | 'dark' | 'system') => {
    setCurrentTheme(theme);
    applyTheme(theme);
  };

  return (
    <div className="mt-auto pt-52 border-t border-gray-200 dark:border-gray-700">
      <div className="flex space-x-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <button
          onClick={() => handleThemeChange('light')}
          className={`flex-1 flex items-center justify-center py-2 px-3 ${
            currentTheme === 'light'
              ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <FiSun className="w-4 h-4 mr-2" />
        </button>
        <button
          onClick={() => handleThemeChange('dark')}
          className={`flex-1 flex items-center justify-center py-2 px-3 ${
            currentTheme === 'dark'
              ? 'bg-gray-800 text-white shadow-sm dark:bg-gray-600'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <FiMoon className="w-4 h-4 mr-2" />
        </button>
        <button
          onClick={() => handleThemeChange('system')}
          className={`flex-1 flex items-center justify-center py-2 px-3 ${
            currentTheme === 'system'
              ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <FiMonitor className="w-4 h-4 mr-2" />
        </button>
      </div>
    </div>
  );
}