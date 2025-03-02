import { MdOutlineWeb } from "react-icons/md";
import webDevelopmentService from "@/image/service/web-development-service.png";
import digitalMarketingService from "@/image/service/digital-marketing-service.png";
import contentSolutionService from "@/image/service/content-solutions-service.png";
import { SiContentful } from "react-icons/si";
import { SiGooglemarketingplatform } from "react-icons/si";
import Image from "next/image";
import { Fragment } from "react";
const ServiceDetails = () => {
  const sectionData = [
    {
      id: 1,
      icon: MdOutlineWeb,
      category: "Web Development",
      title: "Let Expertise Bring your Ideas to Life",
      description:
        "Bring your ideas to life with web development that goes beyond functionality to deliver real impact. At StepUp, we merge expertise with creative, user-centric solutions to create websites that not only captivate but also drive revenue and raise sales. Transform your digital presence with a custom-designed website tailored to engage your audience and accelerate your business growth.",
      stats: [
        {
          figure: "2500+",
          label: "Business Growth Partner",
        },
      ],
      imageSrc: webDevelopmentService,
      imageAlt: "Responsive website design shown on multiple devices",
    },
    {
      id: 2,
      icon: SiGooglemarketingplatform,
      category: "Digital Marketing",
      title: "Empowering Brands with Proven Digital Marketing.",
      description:
        "StepUp is a leading agency that provides innovative digital marketing solutions that drive growth and success for your brand. As a trusted digital marketing agency, we specialize in all sorts of digital marketing, also content creation, and set strategies customizing each campaign to effectively target your audience. Our team of experts uses results-oriented strategies to ensure your business reaches its full potential.",
      stats: [
        {
          figure: "100+",
          label: "Digital marketing Expert",
        },
      ],
      imageSrc: digitalMarketingService,
      imageAlt: "Digital Marketing",
    },
    {
      id: 3,
      icon: SiContentful,
      category: "Content Solution.",
      title: "Get a beautiful website that wins customers.",
      description:
        "Elevate your business with a trusted website that your customers will love. Our award-winning website designers will represent your brand in the best possible way. Your website will load extremely fast and look great on all devices.",
      stats: [
        {
          figure: "70+",
          label: "New Brands Build",
        },
      ],
      imageSrc: contentSolutionService,
      imageAlt: "Content Solutions",
    },
  ];
  return (
    <Fragment>
      {sectionData.map((section) => (
        <div
          key={section.id}
          className={`w-full ${
            section.id % 2 === 0 ? " bg-gray-100  " : "bg-white"
          } `}
        >
          <div className="max-w-6xl mx-auto p-6 md:p-8 lg:py-12">
            <div
              className={`flex flex-col  ${
                section.id % 2 === 0 ? "lg:flex-row-reverse  " : "lg:flex-row"
              } gap-8 items-center`}
            >
              {/* Content Column */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-2">
                  <section.icon className="text-5xl text-blue-700" />
                  <span className="text-blue-800 font-medium">
                    {section.category}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {section.title}
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  {section.description}
                </p>

                <div className="flex items-center gap-4 pt-4">
                  {section.stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-4xl font-bold text-green-700">
                        {stat.figure}
                      </span>
                      <span className="text-green-700">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Column */}
              <div className="w-full lg:w-1/2">
                <Image
                  src={section.imageSrc}
                  alt={section.imageAlt}
                  className="w-full h-auto rounded-lg "
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default ServiceDetails;
