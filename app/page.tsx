import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col space-y-14 mt-[25vw]">
      <Button className="shad-primary-btn">Get started</Button>
    </div>
  );
}
