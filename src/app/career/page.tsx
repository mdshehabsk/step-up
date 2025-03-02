import Image from "next/image";
import careerImage from '@/image/career-page/career.webp'
import followUs from '@/image/career-page/follow-us.webp'
import OurValues from "@/components/career/OurValues";
import OpenPositions from "@/components/career/OpenPosition";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career',
  description: 'Step Up Career page',
}
const page = () => {
  return (
   <>
    <div className="my-10 py-20" >
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col-reverse md:flex-row justify-between ">
          <div>
            <h2 className="text-5xl text-black/90 font-semibold my-2 " >Fostering excellence among friends</h2>
            <p className="text-lg my-2 " >
              Embrace our challenges to take advantage of your opportunities,
              and let our team be your future. A vibrant community fueled by
              innovation and collaboration, we’re more than a workplace. Let’s
              unlock your potential together.
            </p>
            <a className="bg-[#1579D1] text-white border border-transparent hover:border-[#1579D1] px-12 py-3 rounded-full mt-5 inline-block " href='#open-position' >See Open Position</a>
            <Image src={followUs} alt="career follow us page" width={300} className="mt-10"  />
          </div>
          <div>
            <Image src={careerImage} alt="career image"    placeholder="blur" />
          </div>
        </div>
      </div>
    </div>
    <OurValues/>
    <OpenPositions/>
   </>
  );
};

export default page;
