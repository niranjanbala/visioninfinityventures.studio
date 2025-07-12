import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="Vision Infinity Ventures" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="VIV" />
        <meta name="description" content="Legendary Venture Studio for Bangalore Founders" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#6366f1" />

        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#6366f1" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://visioninfinityventures.com" />
        <meta name="twitter:title" content="Vision Infinity Ventures" />
        <meta name="twitter:description" content="Legendary Venture Studio for Bangalore Founders" />
        <meta name="twitter:image" content="https://visioninfinityventures.com/icons/icon-192x192.png" />
        <meta name="twitter:creator" content="@visioninfinity" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vision Infinity Ventures" />
        <meta property="og:description" content="Legendary Venture Studio for Bangalore Founders" />
        <meta property="og:site_name" content="Vision Infinity Ventures" />
        <meta property="og:url" content="https://visioninfinityventures.com" />
        <meta property="og:image" content="https://visioninfinityventures.com/icons/icon-192x192.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* Botpress Webchat */}
        <script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js" defer></script>
        <script src="https://files.bpcontent.cloud/2025/07/12/10/20250712103437-I2K6APSJ.js" defer></script>
      </body>
    </Html>
  )
} 