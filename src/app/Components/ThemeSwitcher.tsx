// app/components/ThemeSwitcher.tsx
'use client'

import { useState } from 'react';
import { useTheme } from '../context/ThemeContext'; // Import the useTheme hook
import Image from 'next/image'; // Import Image from next/image
const themes = ['default', 'usc'];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme(); // Access the theme and setTheme from context
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Palette Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded hover:bg-gray-200 transition"
        aria-label="Toggle theme dropdown"
      >
        <Image src='/theme-icon.svg' alt="Palette Icon" width={28} height={28} />
      </button>

      {/* Theme Dropdown */}
      {isOpen && (
        <div className="absolute mt-2 w-fit bg-white border border-gray-300 rounded shadow z-10">
          {themes.map((t) => (
            <div
              key={t}
              onClick={() => {
                setTheme(t);
                setIsOpen(false); // Close dropdown after selection
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm ${
                theme === t ? 'font-semibold text-primary' : ''
              }`}
            >
              {t === 'default' ? 'Default' : t.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
