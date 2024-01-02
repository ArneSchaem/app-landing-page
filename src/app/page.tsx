import About from "./components/About";
import Features from "./components/Features";
import GetApp from "./components/GetApp";
import Hero from "./components/Hero";
import Interface from "./components/Interface";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="mx-auto max-w-screen-lg">
     
      <Hero />
      <About />
      <Features />
      <Interface />
      <GetApp />
    </main>
  );
}
