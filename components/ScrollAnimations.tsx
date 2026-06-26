'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Hide preloader — functions.js misses the window load event when loaded afterInteractive
    function hideLoader() {
      const $ = (window as any).$;
      if (!$) return false;
      $('.loader').fadeOut(800);
      $('.side-menu').removeClass('opacity-0');
      return true;
    }
    let loaderAttempts = 0;
    const loaderInterval = setInterval(() => {
      if (hideLoader() || ++loaderAttempts >= 50) clearInterval(loaderInterval);
    }, 100);

    function init() {
      const w = window as any;
      if (!w.WOW) return false;
      new w.WOW({ live: false }).init();
      return true;
    }

    let attempts = 0;
    const interval = setInterval(() => {
      if (init() || ++attempts >= 50) clearInterval(interval);
    }, 100);

    return () => { clearInterval(loaderInterval); clearInterval(interval); };
  }, []);

  return null;
}
