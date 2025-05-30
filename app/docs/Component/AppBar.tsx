"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiSearch, FiX } from 'react-icons/fi';
import { TabBarProps } from './type';
import Logo from './Logo';

export default function TabBar({  
  searchResults = [], // Optional: pass search results from parent
  onSearch, // Optional: callback for custom search handling
}: TabBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Handle click outside to close results
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearch) {
        // Custom search handler from parent
        onSearch(searchQuery);
      } else {
        // Default behavior: navigate to search page
        router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      }
      setShowResults(false);
    }
  };

  // Handle clearing search
  const clearSearch = () => {
    setSearchQuery('');
    setShowResults(false);
    if (onSearch) onSearch(''); // Notify parent of cleared search
  };

  return (
    <header className={`sticky top-0 z-50 bg-gray-800 opacity-90`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and App Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Logo/>
            </Link>
          </div>

          {/* Right side - Search field */}
          <div className="relative" ref={searchRef}>
            <form onSubmit={handleSearch}>
              <div className={`relative ${isSearchFocused ? 'w-full md:w-96' : 'w-48'}`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowResults(e.target.value.length > 0);
                  }}
                  onFocus={() => {
                    setIsSearchFocused(true);
                    setShowResults(searchQuery.length > 0);
                  }}
                  onBlur={() => setIsSearchFocused(false)}
                  className="block w-full text-black pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <FiX className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
            </form>

            {/* Search results dropdown */}
            {showResults && (
              <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
                {searchResults.length > 0 ? (
                  <ul className="py-1 max-h-60 overflow-auto">
                    {searchResults.map((result) => (
                      <li key={result.id}>
                        <Link
                          href={result.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowResults(false)}
                        >
                          {result.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-500">
                    {searchQuery ? 'No results found' : 'Start typing to search...'}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}