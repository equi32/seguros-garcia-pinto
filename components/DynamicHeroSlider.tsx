'use client';

import dynamic from 'next/dynamic';

// SSR disabled to avoid hydration mismatches with the jQuery-driven Revolution Slider
export default dynamic(() => import('./HeroSlider'), { ssr: false });
