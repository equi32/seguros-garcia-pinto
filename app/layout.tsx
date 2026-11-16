import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE } from '@/lib/constants';
import './globals.css';

const SITE_URL = 'https://www.segurosgarciapinto.com.ar';
const SITE_DESCRIPTION =
  'Rodrigo García Pinto, Productor Asesor de Seguros matriculado (M.P. 87740) en Tucumán, Argentina. Cotizá seguros de auto, moto, hogar, vida, ART, comercio, consorcio, caución para alquileres y más, con asesoramiento personalizado y atención directa.';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'García Pinto | Asesor de Seguros',
  alternateName: SITE.name,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/img/banner.jpg`,
  logo: `${SITE_URL}/img/logo.png`,
  telephone: SITE.celular,
  email: SITE.contact,
  areaServed: {
    '@type': 'State',
    name: 'Tucumán, Argentina',
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Tucumán',
    addressCountry: 'AR',
  },
  sameAs: [SITE.facebook, SITE.instagram, SITE.linkedin],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'GARCIA PINTO | Asesor de Seguros',
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  keywords: [
    'garcia pinto', 'seguros garcia pinto', 'rodrigo garcia pinto', 'rodrigo jose garcia pinto',
    'productor asesor de seguros', 'matricula profesional 87740', 'asesor de seguros tucuman',
    'seguro de auto', 'seguro de moto', 'seguro de hogar', 'seguro de vida', 'seguro de retiro',
    'seguro de ahorro', 'accidentes personales', 'art', 'seguro de comercio', 'seguro de sepelio',
    'seguro integral de consorcio', 'seguro para maquinas agricolas', 'seguro por mala praxis',
    'seguro de caucion', 'caucion para alquileres', 'cotizador de caucion', 'garantia de alquiler',
    'tucuman', 'argentina',
  ].join(', '),
  authors: [{ name: 'Developia' }, { name: 'Seguros García Pinto' }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE_URL,
    siteName: 'García Pinto | Asesor de Seguros',
    title: 'GARCIA PINTO | Asesor de Seguros',
    description: SITE_DESCRIPTION,
    images: [{ url: '/img/banner.jpg', width: 1200, height: 628, alt: 'Seguros García Pinto' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GARCIA PINTO | Asesor de Seguros',
    description: SITE_DESCRIPTION,
    images: ['/img/banner.jpg'],
  },
  other: {
    'google-site-verification': 'Ihn6nxqRh-KIPWuTT1AZP-owufJx-GjvWijORX2--As',
    'revisit-after': '7 days',
    'rating': 'General',
    'distribution': 'global',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

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
