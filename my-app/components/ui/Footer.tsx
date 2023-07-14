import Image from "next/image";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from 'next/link';


export const Footer = () => {
  return (
    <>
    <footer className="text-[#666666] mt-20 px-20">
      {/* main footer */}
        <div className="flex flex-col w-full lg:flex-row justify-between lg:items-start mb-10">
          {/* image and its content */}
          <div className="w-2/6 flex flex-col gap-12 lg:mt-6 ">
            <Image src="/Logo.webp" alt="logo" width={200} height={100} />
            <p>
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <div className="flex items-start gap-x-5">
              <div className="w-10 flex justify-center items-center h-10 rounded-xl bg-gray-200">
                {" "}
                <FaTwitter fill="black" color="black" />
              </div>
              <div className="w-10 flex justify-center items-center h-10 rounded-xl bg-gray-200">
                <FaFacebook fill="black" color="black" />
              </div>
              <div className="w-10 flex justify-center items-center h-10 rounded-xl bg-gray-200">
                <FaLinkedinIn fill="black" color="black" />
              </div>
            </div>
          </div>

          {/* company and its content */}
          <div className="w-[20%] flex flex-col gap-3">
            <h3>Company</h3>
            <Link href={""}>About</Link>
            <Link href={""}>Terms of Use</Link>
            <Link href={""}>Privacy Policy</Link>
            <Link href={""}>How it Works</Link>
            <Link href={""}>Contact Us</Link>
          </div>

          {/* Support and its content */}
          <div className="w-[20%] flex flex-col gap-3">
            <h3>Support</h3>
            <Link href={""}>Support Carrer</Link>
            <Link href={""}>24h Services</Link>
            <Link href={""}>Quick Chat</Link>
          </div>

          {/* Contact and its content */}
          <div className="w-[20%] flex flex-col gap-3">
            <h3>Contact</h3>
            <Link href={""}>Whatsapp</Link>
            <Link href={""}>Support 24h</Link>
          </div>
        </div>
      {/* copyright and its content */}
      <div className="border-t border-black w-full">
        <div className=" max-w-[1240px] w-full mx-auto lg:px-20 py-5 px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5">
            <div className="">Copyright &copy; 2023 Dine Market </div>
            <div className="">
              Design by:{" "}
            <span className="text-black font-bold">Hasaan Qureshi</span>
            </div>
            <div className="">
              Code by:{" "}
             <span className=" font-bold text-black">
                Qureshihasaan on Github
              </span>
            </div>
          </div>
        </div>
      </div>
      </footer>
      

    </>

    )
  }
 export default Footer; 