"use client";
import Image from "next/image";
import logoImage from "@/image/step-up-logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import Link from "next/link";
import { FC, useState } from "react";
import { X, House } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const MobileNavbar: FC<{
  isOpen: boolean;
  setIsMobileMenu: (arg0: boolean) => void;
}> = ({ isOpen, setIsMobileMenu }) => {
  const router = useRouter()
  const pathname = usePathname()
  const handleNavigateMenu = (href:string) => {
    setIsMobileMenu(false)
    router.push(href)
  }
  return (
    <div className={` md:hidden fixed  left-0 right-0 bg-[#0b1626] ${isOpen ? 'top-0' : "-top-[200%]" } transition-all duration-300 w-screen h-screen z-50`}>
      <div className="flex justify-between items-center px-4 py-6">
        <House className="text-white" size={32} />
        <X className="text-white" size={32} onClick={() => setIsMobileMenu(false)} />
      </div>
      
      <div className="text-white px-4 py-2 border-b border-gray-700">
        <h2 className="text-lg uppercase mb-4">SERVICES</h2>
        
        <div onClick={()=> handleNavigateMenu(`/service/#web-design-development`)}  className="flex items-center mb-4">
          <div className="w-8 h-8 flex items-center justify-center mr-2">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
          </div>
          <span>Web Development</span>
        </div>
        
        <div onClick={()=> handleNavigateMenu(`/service/#digital-marketing`)} className="flex items-center mb-4">
          <div className="w-8 h-8 flex items-center justify-center mr-2">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span>Digital Marketing</span>
        </div>
        
        <div onClick={()=> handleNavigateMenu(`/service/#content-solutions`)} className="flex items-center mb-4">
          <div className="w-8 h-8 flex items-center justify-center mr-2">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <span>Content Solution</span>
        </div>
        
        <div onClick={()=> handleNavigateMenu(`/service/#email-sms-marketing`)} className="flex items-center mb-4">
          <div className="w-8 h-8 flex items-center justify-center mr-2">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <span>Email & SMS Marketing</span>
        </div>
        
        <div onClick={()=> handleNavigateMenu(`/service/#search-engine-optimization`)} className="flex items-center mb-4">
          <div className="w-8 h-8 flex items-center justify-center mr-2">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <span>Search Engine Optimization</span>
        </div>
      </div>
      
      <div onClick={()=> handleNavigateMenu('/service')} className={` ${pathname === '/service' ? "text-[#67C7FE]" : "text-white"} px-4 py-4 border-b border-gray-700 block`}>
        <h2 className="text-lg uppercase">SERVICES</h2>
      </div >
      
      <div onClick={()=> handleNavigateMenu('/about-us')}  className={` ${pathname === '/about-us' ? "text-[#67C7FE]" : "text-white"} px-4 py-4 border-b border-gray-700 block`} >
        <h2 className="text-lg uppercase">ABOUT US</h2>
      </div >
      
      <div onClick={()=> handleNavigateMenu('/career')}  className={` ${pathname === '/career' ? "text-[#67C7FE]" : "text-white"} px-4 py-4 border-b border-gray-700 block`}>
        <h2 className="text-lg uppercase">CAREER</h2>
      </div >
      
      <div onClick={()=> handleNavigateMenu('/contact-us')} className={` ${pathname === '/contact-us' ? "text-[#67C7FE]" : "text-white"} px-4 py-4 border-b border-gray-700 block`}>
        <h2 className="text-lg uppercase">CONTACT US</h2>
      </div >
    </div>
  );
};



const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const pathname = usePathname()
  return (
    <div className="fixed top-0 left-0 right-0 bg-black  z-20">
      <div className="flex justify-between items-center py-4 px-4 md:max-w-[75%]  mx-auto  ">
        <Link href='/' >
        <Image src={logoImage} alt="logo-image" width={180} />
        </Link>
        <div className="flex gap-3 md:hidden ">
          <FaPhoneAlt className="text-white text-2xl" />
          <SlMenu
            className="text-white text-2xl"
            onClick={() => setIsMobileMenu(true)}
          />
        </div>
        <div className="md:flex items-center hidden gap-5  ">
          <Link className={` text-2xl font-bold ${pathname === '/service' ? "text-[#67C7FE]" : "text-white" } `} href="/service">
            
            Service
          </Link>
          <Link className={` text-2xl font-bold ${pathname === '/about-us' ? "text-[#67C7FE]" : "text-white" } `} href="/about-us">
            
            About Us
          </Link>
          <Link className={` text-2xl font-bold ${pathname === '/contact-us' ? "text-[#67C7FE]" : "text-white" } `} href="/contact-us">
            
            Contact Us
          </Link>
          <Link className={` text-2xl font-bold ${pathname === '/career' ? "text-[#67C7FE]" : "text-white" } `} href="/career">
            
            Career
          </Link>
          <Link href="tel:+8809611678939" className="text-[#67C7FE] text-2xl font-bold">
            
            +8809611678939
          </Link>
        </div>
      </div>
      <MobileNavbar isOpen={isMobileMenu} setIsMobileMenu={setIsMobileMenu} />
    </div>
  );
};

export default Navbar;
