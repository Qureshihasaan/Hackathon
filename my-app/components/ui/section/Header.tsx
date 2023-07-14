
import Image from "next/image"
export const Header = () => {
  return (
   <><div className="absolute top-10 right-10 mt-20 bg-[#ffece3] rounded-full scroll-px-5 hidden lg:block ">
    <Image  src={"/header.webp"} width={720} height={670} alt='header image' className="mt-[-15px]" />
    </div>
    <div className="flex gap-5 px-20"> 
     <Image src={"/BAZAAR.webp"} alt="Promo Logo" width={70} height={70} />
     <Image src={"/Bustle.webp"} alt="Promo Logo" width={70} height={70} />
     <Image src={"/versace.webp"} alt="promo logo" width={70} height={70}/>
     <Image src={"/style.webp"} alt="promo logo" width={70} height={70}/>
    </div>
    <div>

    </div>
   </>
  
  )
}
 export default Header;