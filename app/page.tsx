import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Partners />
      <Highlights />
    </div>
  );
}
