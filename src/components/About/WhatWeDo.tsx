import whatWeDo1 from "@/image/about-page/what-we-do/1.jpg";
import whatWeDo2 from "@/image/about-page/what-we-do/2.jpg";
import whatWeDo3 from "@/image/about-page/what-we-do/3.jpg";
import whatWeDo4 from "@/image/about-page/what-we-do/4.jpg";
import whatWeDo5 from "@/image/about-page/what-we-do/5.jpg";
import whatWeDo6 from "@/image/about-page/what-we-do/6.jpg";
import whatWeDo7 from "@/image/about-page/what-we-do/7.jpeg";
import whatWeDo8 from "@/image/about-page/what-we-do/8.jpg";
import whatWeDo9 from "@/image/about-page/what-we-do/9.jpg";
import whatWeDo10 from "@/image/about-page/what-we-do/10.jpg";
import Image from "next/image";

export const whatWeDoImages = [
  whatWeDo1,
  whatWeDo2,
  whatWeDo3,
  whatWeDo4,
  whatWeDo5,
  whatWeDo6,
  whatWeDo7,
  whatWeDo8,
  whatWeDo9,
  whatWeDo10,
];

const WhatWeDo = () => {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}

        <div className=" gap-4">
          <div className="flex flex-wrap justify-between " >
            <div className="mb-10 md:mb-16">
              <h3 className="text-2xl md:text-3xl font-normal text-gray-600">
                We love
              </h3>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                What we do
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2 " >
                <Image src={whatWeDo1} alt="each image" width={280} />
                <Image src={whatWeDo2} alt="each image" width={280} />
            </div>
          </div>

           
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-2" >
                <Image src={whatWeDo3} alt="each image"  className="object-cover" />
                <Image src={whatWeDo4} alt="each image"  className="object-cover" />
                <Image src={whatWeDo5} alt="each image"  className="object-cover" />
                <Image src={whatWeDo6} alt="each image"   className="object-cover" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-2" >
                <Image src={whatWeDo7} alt="each image"  className="object-cover" />
                <Image src={whatWeDo8} alt="each image"  className="object-cover" />
                <Image src={whatWeDo9} alt="each image"  className="object-cover" />
                <Image src={whatWeDo10} alt="each image"   className="object-cover" />
            </div>
          </div>
        </div>
      </div>

  );
};

export default WhatWeDo;
