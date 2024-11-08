import {
  Card,

} from "@/components/ui/card";
import Image from "next/image";

const CustomCard = ({src, alt, width, height, h3, p1, p2}:{src:string, alt: string, width:number, height:number,h3:string, p1:string, p2:string}) => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
      <div className="relative h-full">
        <Image 
          src={src} 
          alt={alt} 
          width={width}
          height={height}
          style={{
            width: '100%',
            height: '100%',
            objectFit: "contain",
            objectPosition: "center"
          }}
          className="rounded-xl"
        />
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-purple-950 to-transparent p-6">
          <div className="pt-16">
            <h3 className="text-white text-xl font-medium mb-2">{h3}</h3>
            <p className="text-white/90 font-light">{p1}</p>
            <p className="text-white/90 font-light">{p2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;

