import Image from "next/image";
import Menu from "../../shared/Menu";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";

const Navbar = () => {
    return(
    <nav className="flex justify-between items-center h-20 px-20">
            <Image src={"/Logo.webp"} alt="logo" width={200} height={50} />
            <div>
                <Menu />
            </div>
            <div className="flex gap-1 border  rounded-md bg-white">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="What you are looking for"
                    className="rounded-r" />
            </div>
            <div className="w-10 h-10 rounded-full    bg-[#f1f1f1] flex justify-center items-center placeholder:last:">
                <ShoppingCartIcon color="black" />
            </div>
            <span className="absolute top-4 right-20 h-5 w-5 text-center rounded-full bg-[#f02d34] text-white">
                0
            </span>
        </nav>
        
    )
};

export default Navbar;