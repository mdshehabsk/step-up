"use client"; // Ensures this runs only on the client side

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import content1 from "@/image/content-solutions/1.webp";
import content2 from "@/image/content-solutions/2.webp";
import content3 from "@/image/content-solutions/3.webp";
import content4 from "@/image/content-solutions/4.webp";
import content5 from "@/image/content-solutions/5.webp";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, ArrowLeft } from 'lucide-react';
const ContentSolution = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null);
  return (
   <div className="py-20" >
     <div className="max-w-6xl  mx-auto p-4" id="content-solutions" >
      <div className="my-4">
        <h2 className="text-3xl lg:text-5xl font-bold my-4 text-center md:text-left">
          Content Solution
        </h2>
        <p>
          We build high-quality, direct-response creative that communicates your
          unique value proposition in an engaging and memorable way, to
          establish brand identity and maximize impact.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 my-4">
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold my-3">
            Photo & Videography
          </h3>
          <p className="md:text-lg">
            Capture stunning, high-quality visuals that effectively tell your
            brand’s unique story and engage your audience.
          </p>
        </div>
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold my-3">
            Social Media Post Design
          </h3>
          <p className="md:text-lg">
            Social Media Post Design & Digital Animation – Create eye-catching,
            scroll-stopping content that enhances brand identity and boosts
            engagement.
          </p>
        </div>
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold my-3">
            Voice Over
          </h3>
          <p className="md:text-lg">
            Deliver professional, impactful narration to bring your message to
            life across various platforms.
          </p>
        </div>
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold my-3">
            UGC Content Creation
          </h3>
          <p className="md:text-lg">
            Using influencer and user-generated content, we create
            native-looking content that drives superior engagement and drives
            demand.
          </p>
        </div>
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold my-3">
            3D/Digital Animation
          </h3>
          <p className="md:text-lg">
            Bring your brand to life with dynamic, engaging animations that
            captivate your audience.
          </p>
        </div>
      </div>
      {/* <div className="flex">
       
      </div> */}
      <Swiper
       onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 5 },
        }}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full  my-5 "
      >
        <SwiperSlide>
          <Image src={content1} alt="content slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={content2} alt="content slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={content3} alt="content slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={content4} alt="content slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={content5} alt="content slider image" />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-end gap-2 my-2 md:hidden">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="swiper carousel prev button"
      >
        <ArrowLeft/>
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
             aria-label="swiper carousel next button"
      >
       <ArrowRight/>
      </button>
      </div>
    </div>
   </div>
  );
};

export default ContentSolution;
