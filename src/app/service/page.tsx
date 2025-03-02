import Image from "next/image";
import teamPhoto2 from "@/image/team-photo-2.jpg";
import Approach from "@/components/Service/Approach";
import Team from "@/components/Service/Team";
import ContentSolution from "@/components/Service/ContentSolution";
import DigitalMarketing from "@/components/Service/DigitalMarketing";
import WebsiteDevelopment from "@/components/Service/WebsiteDevelopment";
import EmailAndSMSMarketing from "@/components/Service/EmailAndSMSMarketing";
import SearchEngineOptimization from "@/components/Service/SearchEngineOptimization";
import FAQ from "@/components/Service/Faq";
const ServicePage = () => {
  return (
    <>
    <div className="relative w-full min-h-[90vh] overflow-hidden">
      <Image
        src={teamPhoto2}
        alt="team photo 2 image"
        className="w-full h-full object-cover absolute -z-10"
           placeholder="blur"
      />

      <div className=" z-10 max-w-6xl mx-auto  h-full text-white text-center">
        <div className="flex flex-col md:flex-row p-6 my-24 md:p-12 text-white">
          {/* Left Section - Marketing Content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <div className="text-yellow-400 text-sm md:text-base mb-2">
              Grow Your Business With Scalable Digital Marketing
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              A full-funnel approach to scale
            </h1>

            <p className="text-sm md:text-base mb-6">
              Whether you&apos;re aiming to expand your audience or increase
              your profit margins, our full-funnel approach leaves no
              opportunity unexplored in scaling your e-commerce brand.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="border border-white p-4 text-center w-full md:w-auto">
                <div className="text-2xl md:text-3xl font-bold">2500+</div>
                <div className="text-xs md:text-sm">
                  Business Growth
                  <br />
                  Partner
                </div>
              </div>

              <div className="border border-white p-4 text-center w-full md:w-auto">
                <div className="text-2xl md:text-3xl font-bold">100+</div>
                <div className="text-xs md:text-sm">
                  Digital Marketing
                  <br />
                  Experts
                </div>
              </div>

              <div className="border border-white p-4 text-center w-full md:w-auto">
                <div className="text-2xl md:text-3xl font-bold">70+</div>
                <div className="text-xs md:text-sm">New Brands Built</div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-1/2">
            <div className="bg-black p-6 rounded">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-1">
                  Grow Your Brand
                </h2>
                <p className="text-sm md:text-base">with StepUp today</p>
              </div>

              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 pl-4 pr-10 bg-white text-gray-800 rounded"
                  />
                  <div className="absolute right-3 top-3 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 pl-4 pr-10 bg-white text-gray-800 rounded"
                  />
                  <div className="absolute right-3 top-3 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 pl-4 pr-10 bg-white text-gray-800 rounded"
                  />
                  <div className="absolute right-3 top-3 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <select className="w-full p-3 pl-4 pr-10 bg-white text-gray-800 rounded appearance-none">
                    <option>Web design & Development</option>
                    <option>Digital Marketing</option>
                    <option>E-commerce Solutions</option>
                    <option>Content Creation</option>
                  </select>
                  <div className="absolute right-3 top-3 text-blue-500 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <button aria-label="get-started" className="w-full p-3 bg-blue-500 hover:bg-blue-600 rounded text-white font-medium transition duration-300">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>
    </div>
    <Approach/>
    <Team/>
    <ContentSolution/>
    <DigitalMarketing/>
    <WebsiteDevelopment/>
    <EmailAndSMSMarketing/>
    <SearchEngineOptimization/>
    <FAQ/>
    </>

  );
};

export default ServicePage;
