import teamPhoto from "@/image/team-photo.jpg";
import Image from "next/image";
import { FC } from "react";
// Icons component for services
const ServiceIcon : FC<{iconType:string}> = ({ iconType }) => {
  switch (iconType) {
    case "web":
      return (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "digital":
      return (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "content":
      return (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "email":
      return (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "seo":
      return (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

// Service data
const servicesData = [
  {
    id: 1,
    title: "Web Design & Development",
    icon: "web",
    description: "Create a brand and communicate your value.",
  },
  {
    id: 2,
    title: "Digital Marketing",
    icon: "digital",
    description: "Increase awareness by engaging with your audience.",
  },
  {
    id: 3,
    title: "Content Solution",
    icon: "content",
    description: "Engaging content that boosts traffic and conversions.",
  },
  {
    id: 4,
    title: "Email & SMS Marketing",
    icon: "email",
    description: "Convert visitors into customers, unlock brand potential.",
  },
  {
    id: 5,
    title: "Search Engine Optimization",
    icon: "seo",
    description: "Stand out with SEO strategies that drive sustainable growth.",
  },
];

const Team = () => {
  return (
    <div className="relative w-full  overflow-hidden">
      <div className="absolute w-full h-full inset-0 bg-black/60"></div>
      <Image
        src={teamPhoto}
        alt="Team"
        className="w-full h-full object-cover  absolute inset-0 -z-10 "
      />

      <div className="z-10">
        <div className="relative  hidden md:block">
          <div className="relative container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white ">
              Results-driven Marketing
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
              Transform your digital presence with our comprehensive marketing
              solutions.
            </p>
          </div>
        </div>

        <div className="lg:hidden divide-y divide-gray-200 relative">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="transition-all"
            >
              <a href="#" className="block p-4">
                <div className="flex items-center">
                  <div className="mr-4  p-2 rounded-full text-white">
                    <ServiceIcon iconType={service.icon} />
                  </div>
                  <div className="text-white font-medium text-lg">
                    {service.title}
                  </div>
                  <div className="ml-auto text-gray-300">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="hidden lg:block  py-16 relative">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-6">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className=" relative rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow  hover:bg-indigo-800 p-4 "
                >
                  <div className="p-6 min-h-fit h-[280px]  ">
                    <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full inline-block mb-4">
                      <ServiceIcon iconType={service.icon} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {service.title}
                    </h3>
                    <p className="text-white text-xl">{service.description}</p>
                  </div>
                  <div className="border border-white text-white py-3 px-6 text-center cursor-pointer">
                    <a href="#" className="inline-flex items-center">
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </div>
    
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
