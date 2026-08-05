"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };
  
  if (!showBanner) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-300 mb-4 md:mb-0">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. 
          <Link href="/cookie-policy" className="text-brand hover:underline ml-1">
            Learn more
          </Link>
        </p>
        <div className="flex space-x-4">
          <button 
            onClick={acceptCookies}
            className="btn-primary px-4 py-2 rounded-lg text-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
} 