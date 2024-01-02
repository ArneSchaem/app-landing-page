import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className="mx-auto max-w-screen-xl">
     
        <main className="relative overflow-hidden">
        <Navbar />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
