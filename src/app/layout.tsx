import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const joe = Josefin_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Appolly",
  description: "App Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={joe.className}>
      <body className="mx-auto max-w-screen-2xl">
        <main className="relative overflow-hidden">
          <Navbar />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
