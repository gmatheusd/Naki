import type { Metadata } from 'next'
import Script from 'next/script'
import { Exo_2 } from 'next/font/google'
import { SITE_URL, SITE_NAME, GA_ID, GTM_ID, GEO } from '@/config/siteConfig'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { WhatsAppBubble } from '@/components/WhatsAppBubble'
import { JsonLd } from '@/components/JsonLd'
import { organizationSchema, brandSchema, websiteSchema } from '@/config/schema'
import './globals.css'

/**
 * Exo 2 é a fonte da marca, não uma escolha nossa: é a única família embutida
 * nos três PDFs (Regular, Medium, SemiBold, Bold, ExtraBold e Black). Está no
 * Google Fonts, então o site usa exatamente a mesma tipografia do impresso.
 */
const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-exo2',
  display: 'swap',
})

const DESCRIPTION =
  'Detergente lava louças neutro vegano, biodegradável e com certificação Kosher. Alto poder desengordurante, enxágue rápido e baixa irritabilidade dérmica, nas apresentações de 500 ml e galão de 5 litros.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Nakí | Detergente Lava Louças Neutro Vegano, Biodegradável e Kosher',
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'detergente lava louças kosher',
    'detergente kosher',
    'produtos de limpeza kosher',
    'detergente lava louças neutro',
    'detergente vegano',
    'detergente biodegradável',
    'detergente lava louças 5 litros',
    'detergente para revenda',
    'distribuidor de detergente',
    'naki detergente',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  icons: {
    icon: '/images/logo-naki-verde.png',
    shortcut: '/images/logo-naki-verde.png',
    apple: '/images/logo-naki-verde.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Nakí | A evolução da limpeza, higiene e conservação',
    description: DESCRIPTION,
    images: [
      {
        url: '/images/og-naki.jpg',
        width: 1200,
        height: 630,
        alt: 'Nakí, detergente lava louças neutro vegano, biodegradável e Kosher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nakí | Detergente Lava Louças Neutro Vegano e Kosher',
    description: DESCRIPTION,
    images: ['/images/og-naki.jpg'],
  },
  other: {
    'geo.region': GEO.region,
    'geo.placename': GEO.placename,
    'geo.position': `${GEO.latitude};${GEO.longitude}`,
    ICBM: `${GEO.latitude}, ${GEO.longitude}`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={exo2.variable}>
      <body>
        <JsonLd data={[organizationSchema, brandSchema, websiteSchema]} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppBubble />

        {/* As tags só entram quando as contas existirem, ver siteConfig.ts. */}
        {GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
