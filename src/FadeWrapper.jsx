import React, { useState, useEffect } from 'react';

function FadeWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Memicu animasi masuk tepat setelah komponen dimuat ke DOM
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full min-h-screen transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${
        isVisible 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-105 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
}

export default FadeWrapper;