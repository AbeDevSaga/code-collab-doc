// components/ThemeSelector.tsx
'use client';

import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { useTheme } from '../Component/ThemeSelector';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const buttonStyle = (selected: boolean) =>
    `flex-1 flex items-center justify-center py-2 px-3 rounded ${
      selected
        ? 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
    }`;

  return (
    <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <button onClick={() => setTheme('light')} className={buttonStyle(theme === 'light')}>
        <FiSun className="mr-2" /> Light
      </button>
      <button onClick={() => setTheme('dark')} className={buttonStyle(theme === 'dark')}>
        <FiMoon className="mr-2" /> Dark
      </button>
      <button onClick={() => setTheme('system')} className={buttonStyle(theme === 'system')}>
        <FiMonitor className="mr-2" /> System
      </button>
    </div>
  );
}
