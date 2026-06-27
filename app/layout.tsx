import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rodrigo J. García Pinto | Productor Asesor de Seguros',
  description: 'Rodrigo J. García Pinto | Productor Asesor de Seguros',
  icons: { icon: '/favicon.ico' },
  keywords: 'seguros garcia pinto,rodrigo garcia pinto, rodrigo jose garcia pinto, garcia pinto, productor de seguros, matricula profesional 87740, seguros, seguro de vida, accidentes personales, art, asesor de seguros, seguro de comercio, seguro de sepelio, seguro de ahorro, seguro de retiro, seguro de autos, seguro integral de consorcio, tucuman, argentina',
  authors: [{ name: 'Developia' }, { name: 'Seguros García Pinto' }],
  openGraph: {
    title: 'Seguros García Pinto | Tucumán - Argentina',
    description: 'Sitio Web Seguros García Pinto | Tucumán - Argentina',
    images: ['/img/banner.jpg'],
  },
  twitter: {
    title: 'Seguros García Pinto | Tucumán - Argentina',
    images: ['/img/banner.jpg'],
  },
  other: {
    'google-site-verification': 'Ihn6nxqRh-KIPWuTT1AZP-owufJx-GjvWijORX2--As',
    'revisit-after': '1 days',
    'rating': 'General',
    'distribution': 'global',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="image_src" type="image/jpeg" href="/img/banner.jpg" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/css/tooltipster.min.css" />
        <link rel="stylesheet" href="/css/cubeportfolio.min.css" />
        <link rel="stylesheet" href="/css/revolution/navigation.css" />
        <link rel="stylesheet" href="/css/revolution/settings.css" />
        <link rel="stylesheet" href="/css/style.css" />

        {/* jQuery must be available before React hydrates so RevSlider/CubePortfolio can attach */}
        <Script src="/js/jquery-3.4.1.min.js" strategy="beforeInteractive" />
      </head>
      <body data-spy="scroll" data-target=".navbar-nav" data-offset="75" className="offset-nav">
        {children}

        <Script src="/js/propper.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.appear.js" strategy="afterInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery-countTo.js" strategy="afterInteractive" />
        <Script src="/js/parallaxie.js" strategy="afterInteractive" />
        <Script src="/js/jquery.cubeportfolio.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.fancybox.min.js" strategy="afterInteractive" />
        <Script src="/js/tooltipster.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.js" strategy="afterInteractive" />
        <Script src="/js/revolution/jquery.themepunch.tools.min.js" strategy="afterInteractive" />
        <Script src="/js/revolution/jquery.themepunch.revolution.min.js" strategy="afterInteractive" />
        <Script src="/js/revolution/extensions/revolution.extension.actions.min.js" strategy="afterInteractive" />
        <Script src="/js/revolution/extensions/revolution.extension.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/revolution/extensions/revolution.extension.kenburn.min.js" strategy="afterInteractive" />
        <Script src="/js/revolution/extensions/revolution.extension.layeranimation.min.js" strategy="afterInteractive" />
        <Script src="/js/revolution/extensions/revolution.extension.migration.min.js" strategy="afterInteractive" />
        <Script src="/js/revolution/extensions/revolution.extension.navigation.min.js" strategy="afterInteractive" />
        <Script src="/js/revolution/extensions/revolution.extension.parallax.min.js" strategy="afterInteractive" />
        <Script src="/js/revolution/extensions/revolution.extension.slideanims.min.js" strategy="afterInteractive" />
        <Script src="/js/revolution/extensions/revolution.extension.video.min.js" strategy="afterInteractive" />
        <Script src="/js/waitingfor/js/waitingfor.js" strategy="afterInteractive" />
        <Script src="/js/functions.js" strategy="afterInteractive" />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=UA-160318198-1" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-160318198-1');
        `}</Script>
      </body>
    </html>
  );
}
