import exp from "constants"
import Image from "next/image";

export const Promo = () => {
  return (
    <>
    <div className=" mt-24">
    <div className="grid grid-cols-1 gap-[36rem] xxs:gap-[27rem] sm:gap-[20rem] md:gap-[20rem] lg:grid-cols-2 lg:gap-20 px-20 mt-10">
      <div className="relative mt-6">
        <div className="z-[1]">
          <h2 className="text-[3.25rem] sm:text-[5rem] md:text-[6.875rem] font-extrabold absolute leading-[160px] sm:leading-[110px] opacity-10">
            Different from others
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:gap-10 justify-center items-center absolute z-[2]">
          <div className="w-[100%] sm:w-[80%] tracking-normal xs:tracking-widest">
            <h3 className="text-lg font-bold">
              Using Good Quality Materials
            </h3>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="w-[100%] sm:w-[80%] tracking-normal xs:tracking-widest">
            <h3 className="text-lg font-bold">
              100% Handmade Products
            </h3>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="w-[100%] sm:w-[80%] tracking-normal xs:tracking-widest">
            <h3 className="text-lg font-bold">
              Modern Fashion Design
            </h3>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="w-[100%] sm:w-[80%] tracking-normal xs:tracking-widest">
            <h3 className="text-lg font-bold">
              Discount for Bulk Orders
            </h3>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
             </p>
          </div>
        </div>
      </div>
    <div className="flex items-center flex-col sm:flex-row gap-10">
    <Image src={"/women5.webp"} alt="feature-item" width={300} height={250}/>
    <div className=" flex flex-col items-center sm:items-start gap-5">
      <h4 className="text-justify">
      This piece is ethically crafted in our small
      family-owned workshop in Peru with unmatched
      attention to detail and care. The Natural color is
      the actual natural color of the fiber, undyed and
      100% traceable.
      </h4>
      <button className="bg-[#212121] font-semibold h-20 text-center w-28rounded-none px-10 text-white">
        See All<br/>Products
      </button>
    </div>
    </div>
    </div>
    </div>
    </> 
  ) 
}
 export default Promo;