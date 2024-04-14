

import { Inter } from "next/font/google";
import "./globals.css";
import Particle from "../app/Particle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Certificate Verification",
  description: "Verify Certificates Instantly and Also Find Certificates by Participant Name a",
  openGraph: {
    type: 'website',
    url: 'https://metatags.io/',
    title: 'Certificate Verification',
    description: 'Verify Certificates Instantly and Also Find Certificates by Participant Name a',
    image: 'https://metatags.io/images/meta-tags.png',
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://metatags.io/',
    title: 'Certificate Verification',
    description: 'Verify Certificates Instantly and Also Find Certificates by Participant Name a',
    image: 'https://metatags.io/images/meta-tags.png',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Particle id='particles' />
        {children}
      </body>
    </html>
  );
}





