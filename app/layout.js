
import { Inter } from "next/font/google";
import "./globals.css";
import Particle from "../app/Particle";
import Navbar from "./Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Certificate Verification",
  description: "Verify Certificates Instantly: Search by Name "
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Particle id='particles' />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}





