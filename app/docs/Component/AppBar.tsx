"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiX } from 'react-icons/fi';
import { TabBarProps } from './type';

export default function TabBar({ 
  logo, 
  appName = 'CodeCollab', 
}: TabBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className={`sticky top-0 z-50 bg-gray-800 opacity-90`}>
      <div className="container mx-auto  px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and App Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {logo || (
                <div className="w-8 h-8 rounded-md bg-gray-600 flex items-center justify-center text-white font-bold">
                  {appName.charAt(0)}
                </div>
              )}
              <span className="text-xl font-semibold text-gray-300 hidden sm:inline-block">
                {appName}
              </span>
            </Link>
          </div>

          {/* Right side - Search field */}
          <div className={`relative ${isSearchFocused ? 'w-full md:w-96' : 'w-48'}`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <FiX className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}