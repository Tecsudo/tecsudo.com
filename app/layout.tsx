import type { Metadata, Viewport } from "next";
import { Varela_Round, Poppins } from "next/font/google";
import "./globals.css";
import CookieConsent from './components/CookieConsent';

const varelaRound = Varela_Round({
  variable: "--font-varela-round",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: 'Tecsudo | Transforming Ideas into Intelligent Solutions',
  description: 'Tecsudo provides custom software development, mobile app development, and business intelligence solutions to help businesses scale and succeed in the digital landscape.',
  keywords: 'software development, web development, mobile app development, business intelligence, custom software solutions',
  authors: [{ name: 'Tecsudo Team' }],
  creator: 'Tecsudo',
  publisher: 'Tecsudo',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://tecsudo.com')
  ),
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tecsudo.com',
    title: 'Tecsudo | Transforming Ideas into Intelligent Solutions',
    description: 'Custom software development, mobile app development, and business intelligence solutions for growing businesses.',
    siteName: 'Tecsudo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tecsudo | Transforming Ideas into Intelligent Solutions',
    description: 'Custom software development, mobile app development, and business intelligence solutions for growing businesses.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#00E2D6',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#232B32',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="msapplication-TileColor" content="#00E2D6" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00E2D6" />
      </head>
      <body
        className={` ${poppins.variable} ${varelaRound.variable} antialiased`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
