"use client"; // Ensures this runs only on the client side

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import development1 from '@/image/website-development/1.webp'
import development2 from '@/image/website-development/2.webp'
import development3 from '@/image/website-development/3.webp'
import development4 from '@/image/website-development/4.webp'

import Image from "next/image";


const WebsiteDevelopment = () => {
  return (
    <div className="py-20">
         <div className="max-w-6xl mx-auto p-4" id="web-design-development" >
      <div className="my-4">
        <h2 className="text-3xl lg:text-5xl font-bold my-4 text-center md:text-left">
        Website Development
        </h2>
        <p>
        We design high-converting websites that guide visitors through a clear, strategic pathway, optimizing user experience. Our focus is on increasing leads and conversions, ensuring your site turns traffic into valuable opportunities, without the need for extra visitors.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 my-4">
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold my-3">
          WordPress Design
          </h3>
          <p className="md:text-lg">
          Engage highly-targeted audiences across social channels, generating demand and new customers.
          </p>
        </div>
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold my-3">
          Landing Page Design
          </h3>
          <p className="md:text-lg">
          We take a holistic approach to viewing paid advertising’s impact on revenue to understand the true impacts of your campaigns.
          </p>
        </div>
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold my-3">
          Custom web development
          </h3>
          <p className="md:text-lg">
          Capture the attention of active searchers looking for solutions, and help drive qualified, high-intent traffic to your site.

          </p>
        </div>
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold my-3">
          Website Maintenance
          </h3>
          <p className="md:text-lg">
          We’ll build a robust reporting dashboard for live performance updates alongside your weekly and monthly reports.
          </p>
        </div>
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold my-3">
          Laravel
          </h3>
          <p className="md:text-lg">
          We scale ad accounts vertically and horizontally for stable, predictable growth, focusing on increased lifetime value and profit over time.
          </p>
        </div>
      </div>
      <Swiper

        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full  my-5 "
      >
        <SwiperSlide>
          <Image src={development1} alt="content slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={development2} alt="content slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={development3} alt="content slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={development4} alt="content slider image" />
        </SwiperSlide>

      </Swiper>
      </div>
    </div>
  )
}

export default WebsiteDevelopment