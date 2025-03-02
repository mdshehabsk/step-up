import Image from "next/image";
import teamPhoto3 from "@/image//team3.jpeg";

import AboutDetails from "@/components/About/AboutDetails";
import AchievementsSection from "./Achievements";
import WhatWeDo from "@/components/About/WhatWeDo";
import JumpStartUp from "@/components/About/JumpStartUp";
import OurTeamMember from "@/components/About/OurTeamMember";
const AboutUs = () => {
  return (
    <div>
    <div
      className="relative w-full md:min-h-[90vh] h-full overflow-hidden"
      style={{
        clipPath:
          "polygon(50% 0%, 100% 0, 100% 43%, 100% 89%, 68% 100%, 0 86%, 0% 43%, 0 0)",
      }}
    >
      <Image
        src={teamPhoto3}
        alt="team photo 2 image"
        className="w-full h-full object-cover absolute -z-10"
        placeholder="blur"
      />

      <div className=" relative z-10 max-w-6xl mx-auto w-full h-full  text-center">
        <div className=" relative flex w-full h-full items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold my-[200px] ">
            <span className="block">Experienced</span>
            <span className="block">professionals delivering</span>
            <span className="block">exceptional results.</span>
          </h1>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>
    </div>
   <AboutDetails/>
   <AchievementsSection/>
   <WhatWeDo/>
   <JumpStartUp/>
   <OurTeamMember/>
    </div>
  );
};

export default AboutUs;


