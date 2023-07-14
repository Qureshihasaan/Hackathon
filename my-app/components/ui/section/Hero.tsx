import { ShoppingCart } from "lucide-react";
import { Button } from "../../ui/button";

const Hero = () => {
    return (
       <div>
            <button className="flex px-7 items-center bg-[#e1edff] h-10 w-30 rounded-md text-[#0000ff] font-semibold m-20 scroll-px-50"> 
            Sale 70%</button>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6 m-20 ">
                An Industrial <br/>  Take on <br/> Streetwear<br/>
            </h1>
            <p className=" text-2xl[&:not(;first-child)]:mt-4 text-clip h-10 m-20">
                Anyone can beat you but no one can <br/> beat your outfit as long as you wear <br/> Dine outfits.
            </p>
            <Button className="m-20">
                <ShoppingCart className="mr-2 h-5 w-5 scroll-px-100 item-start" /> Start Shopping
            </Button>
            </div>
            
     
    );
};

export default Hero;