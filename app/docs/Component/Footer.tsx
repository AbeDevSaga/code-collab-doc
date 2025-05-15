// components/BottomBar.tsx
import Link from 'next/link';
import { BottomBarProps } from './type';


export default function Footer({
  logo,
  appName = 'CodeCollab',
  companyName = 'CodeCollab',
  className = '',
}: BottomBarProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={` border-gray-200 ${className}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo and App Name */}
          <div className="flex flex-col items-center mb-4">
            <Link href="/" className="flex flex-col items-center">
              {logo || (
                <div className="w-12 h-12 rounded-sm bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-2">
                  {appName.charAt(0)}
                </div>
              )}
              <span className="text-xl font-semibold text-gray-500">
                {appName}
              </span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {currentYear} {companyName}. All rights reserved.
          </div>

          {/* Optional Links */}
          <div className="flex space-x-4 mt-4">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-gray-500 hover:text-blue-600">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}