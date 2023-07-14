import Image from "next/image"


export const Product = () => {
  return (
   <>
   <h6 className="flex item-center justify-center mt-20 text-[#0062F5] font-bold">Promotions</h6>
      <h1 className=" flex items-center justify-center mt-4 font-black text-[#212121] text-3xl">Our Promotions Events</h1>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full mt-5">
    <div className=" sm:col-span-2 space-y-2">
      <div className="bg-[#d6d6d8] flex justify-center items-center">
        <div>
        <h4 className=" font-black">
         Get upto<span className=" text-2xl"> 60%</span>
        </h4>
        <p className=" font-black">
         For the summer season
        </p>
      </div>
      <Image src={"/Women.webp"} alt="Women" width={226} height={226}/>
      </div>
  
  
  
  <div className="flex flex-col items-center justify-center bg-black h-48 py-5 text-center text-white">
    <h3 className=" text-xl my-3">
        Get 30% Off
    </h3>
    <p className=" text-xs">Use Promo Code</p>
    <button className="bg-[#212121] tracking-widest px-8 py-3 text-white text-xs mt-1">
      DineWeekendSale
      </button>
  </div>
  </div>
  <div className=" bg-red-200">
    <div className=" p-5">
        <p>Flex SweatShirt</p> 
        <p className=" text-base">
          <span className="line-through text-sm mr-1">$100.00</span> $75.00
         </p>
         </div>
        <Image src={"/Men1.webp"} alt="men1" width={220} height={220} className=" mx-auto"/>
    </div>
        <div className=" bg-slate-200">
          <div className="p-5">
            <p className=" capitalize">flex push button bomber</p>
            <p className=" text-base">
              <span className=" text-sm mr-1 line-through">$225.00</span>$190.00
            </p>
            </div>
            <Image src={"/Men2.webp"} alt="men2" width={220} height={220} className=" mx-auto" />
          
        </div>
        </div>
        
 </> 
  )
}

export default Product;