'use client';

import dynamic from 'next/dynamic';

// SSR disabled to avoid hydration mismatches with the jQuery-driven CubePortfolio
export default dynamic(() => import('./Portfolio'), { ssr: false });
