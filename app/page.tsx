import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";


export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Partners />
      <Highlights />
      <Features />
      <Clients />
      <Footer />
    </div>
  );
}
