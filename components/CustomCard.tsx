import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const CustomCard = ({src, alt, width, height, h3, p1, p2}:{src:string, alt: string, width:number, height:number,h3:string, p1:string, p2:string}) => {
  return (
    <Card className="">
      <CardContent className="bg-black rounded-xl flex items-center">
        <Image src={src} alt={alt} width={width} height={height} className="p-2"/>
      </CardContent>
        <div className="bg-black rounded-xl p-4">
        <h3>{h3}</h3>
        <p className="font-thin">{p1}</p>
        <p className="font-thin">{p2}</p>
        </div>
    </Card>
  );
};

export default CustomCard;

