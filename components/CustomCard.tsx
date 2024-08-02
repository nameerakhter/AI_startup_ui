import {
  Card,

} from "@/components/ui/card";
import Image from "next/image";

const CustomCard = ({src, alt, width, height, h3, p1, p2}:{src:string, alt: string, width:number, height:number,h3:string, p1:string, p2:string}) => {
  return (

      <Card className="relative overflow-hidden rounded-xl" style={{background:'#0000', border: '.2px solid black'}}  >
      <Image src={src} alt={alt} width={width} height={height}/>
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-purple-950 to-transparent p-4 ">
        <div className="h-[200px]"></div>
        <h3 className="text-white">{h3}</h3>
        <p className="text-white font-thin">{p1}</p>
        <p className="text-white font-thin">{p2}</p>
      </div>
    </Card>
    
  );
};

export default CustomCard;

