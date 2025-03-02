
import Typing from "@/components/Typing";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import CountUp from "@/components/Countup";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Story from "@/components/Story";
import Team from "@/components/Team";
import ServiceDetails from "@/components/ServiceDetails";
import MarketingPhilosophy from "@/components/MarketingPhilosophy";
import FounderSection from "@/components/FounderSection";
import TeamAtGlance from "@/components/TeamAtGlance";


export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/main-bg-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
 
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className=" text-3xl md:text-7xl font-semi-bold">
            Results Driven
          </h1>
          <h1 className=" text-3xl md:text-7xl font-bold">
            Digital Marketing Agency
          </h1>
          <Typing />
          <div className="flex flex-wrap xl:flex-nowrap justify-center bg-black/40 items-center ">
            <div className=" px-4 py-2  basis-full md:basis-6/12 xl:basis-3/12   ">
              <div className="flex items-center gap-4">
                <FaUser />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-transparent outline-none py-2 "
                />
              </div>
              <div className="w-full h-px bg-white "></div>
            </div>
            <div className=" px-4 py-2  basis-full md:basis-6/12 xl:basis-3/12  ">
              <div className="flex items-center gap-4">
                <MdEmail />
                <input
                  type="text"
                  placeholder="Email Address"
                  className="bg-transparent outline-none py-2 "
                />
              </div>
              <div className="w-full h-px bg-white  "></div>
            </div>
            <div className=" px-4 py-2 basis-full md:basis-6/12 xl:basis-3/12   ">
              <div className="flex items-center gap-4">
                <FaPhoneAlt />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-transparent outline-none py-2 "
                />
              </div>
              <div className="w-full h-px bg-white  "></div>
            </div>
            <div className="px-4 py-2 basis-full md:basis-6/12 xl:basis-3/12  ">
              <button aria-label="get-started" className=" flex gap-2 items-center text-white border-white border rounded-sm  px-12 py-3 group transition hover:bg-[#088eff] hover:border hover:border-[#088eff] w-full ">
                Get Started
                <MdOutlineArrowRightAlt className="group-hover:ml-2 hidden md:block " />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center my-2  gap-3 ">
            <div className="border-2  px-4 py-1">
              <h3 className="font-semibold md:text-2xl text-lg ">
                <CountUp end={2500} suffix="+" />
              </h3>
              <p className=" text-lg md:text-xl">Business Growth Partner</p>
            </div>
            <div className="border-2  px-4 py-1">
              <h3 className="font-semibold  md:text-2xl text-lg ">
                <CountUp end={100} suffix="+" />
              </h3>
              <p className=" text-lg md:text-xl">Digital Marketing Experts</p>
            </div>
            <div className="border-2  px-4 py-1">
              <h3 className="font-semibold  md:text-2xl text-lg ">
                <CountUp end={70} suffix="+" />
              </h3>
              <p className=" text-lg md:text-xl">New Brand Build</p>
            </div>
          </div>
        </div>
      </div>
      <Story />
      <Team/>
      <ServiceDetails/>
      <MarketingPhilosophy/>
      <FounderSection/>
      <TeamAtGlance/>
    </>
  );
}
