import {
  Card,
  CardContent,

} from "@/components/ui/card";
import Image from "next/image";

const CustomCard = ({src, alt, width, height, h3, p1, p2}:{src:string, alt: string, width:number, height:number,h3:string, p1:string, p2:string}) => {
  return (
    <Card className="relative overflow-hidden rounded-xl bg-black">
      <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto object-cover" />
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-purple-800 to-transparent p-4">
        <h3 className="text-white">{h3}</h3>
        <p className="text-white font-thin">{p1}</p>
        <p className="text-white font-thin">{p2}</p>
      </div>
    </Card>
  );
};

export default CustomCard;

