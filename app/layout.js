

import { Inter } from "next/font/google";
import "./globals.css";
import Particle from "../app/Particle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  openGraph: {
    title: 'Certificate Verification',
    description: 'Verify Certificates Instantly and Also Find Certificates by Participant Name',
    url: 'https://certificate-verify-kappa.vercel.app/',
    siteName: 'Certificate Verify',
    images: [
      {
        url: 'https://raw.githubusercontent.com/vishnuhari17/Certificate_verify/main/image.png?token=GHSAT0AAAAAACPXPPR4ALH3G273BJKCDLOMZQ3UU3Q', // Must be an absolute URL
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <meta name="description" content="Self Developed personal website build with React.js" />


        <meta itemprop="name" content="S0umyajit | Portfolio" />
        <meta itemprop="description" content="Self Developed personal website build with React.js" />
        <meta itemprop="image"
          content="https://raw.githubusercontent.com/vishnuhari17/Certificate_verify/main/image.png?token=GHSAT0AAAAAACPXPPR4ALH3G273BJKCDLOMZQ3UU3Q" />

        <meta property="og:url" content="https://soumyajit.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="S0umyajit | Portfolio" />
        <meta property="og:description" content="Self Developed personal website build with React.js" />
        <meta property="og:image" content="https://raw.githubusercontent.com/vishnuhari17/Certificate_verify/main/image.png?token=GHSAT0AAAAAACPXPPR4ALH3G273BJKCDLOMZQ3UU3Q" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="S0umyajit | Portfolio" />
        <meta name="twitter:description" content="Self Developed personal website build with React.js" />
        <meta name="twitter:image"
          content="https://raw.githubusercontent.com/vishnuhari17/Certificate_verify/main/image.png?token=GHSAT0AAAAAACPXPPR4ALH3G273BJKCDLOMZQ3UU3Q" />
      </head>
      <body className={inter.className}>
        <Particle id='particles' />
        {children}
      </body>
    </html>
  );
}





