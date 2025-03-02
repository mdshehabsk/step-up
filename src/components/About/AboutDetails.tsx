import contentSolutionService from "@/image/service/content-solutions-service.png";
import Image from "next/image";
import teamPhoto from "@/image/team-photo.jpg";
import vission from '@/image/about-page/vission.png'
import goal from '@/image/about-page/goal.png'
const sectionData = [
  {
    id: 1,

    category: "Our Story",
    description: `Company founded in July 2023, but its history is way long back. In 2014, Fahmid Al Nayem, CEO & Founder of StepUp started his own career in the field of digital marketing for foreign clients.

After growing several successful businesses in the US & UK market he realised Bangladesh has a good opportunity for doing online business. So Fahmid made a small team and started giving various business services to the individuals and companies in 2021.

Eventually, the demand went sky high so he needed to form a dedicated agency on this purpose thus the name “StepUp” came in with its motto “Your Growth Partner” focusing on complete digital marketing services. Now the agency has over 500+ successful agency partnerships with multiple businesses across the country.`,

    imageSrc: teamPhoto,
    imageAlt: "our Story team photo",
  },
  {
    id: 2,
    category: "Our Mission",
    description:
      "We are passionate about helping online brands scale. Our digital marketing agency is a full-funnel approach, engaging with brands we truly believe in to drive growth from top to bottom. Our focus is on acquiring new clients and maximizing retention. We equip brands with the strategies and resources needed to make a vast impact and accelerate revenue growth.",

    imageSrc: contentSolutionService,
    imageAlt: "Our Mission image",
  },
  {
    id: 3,
    category: "Our Vision",
    description:
      "Our vision is to be the trusted partner that businesses rely on for creative solutions and sustainable growth. We see a future where our expertise empowers clients to unlock their full potential. Committed to making a meaningful impact, we strive to shape a better future for our clients, our team, and the world around us.",

    imageSrc: vission,
    imageAlt: "Our Vision image",
  },
  {
    id: 4,
    category: "Our Goal",
    description:
      "We aim to build a strong brand reputation by always providing top-notch services and following ethical business practices. This means being open and honest, earning the trust of our stakeholders, and actively supporting our community. A solid reputation helps us stand out from competitors and is key to our long-term success..",

    imageSrc: goal,
    imageAlt: "Our Goal image",
  },
];
const AboutDetails = () => {
  return (
    <div>
      {sectionData?.map((item) => (
        <div className={`my-6 p-4 ${item?.id % 2 === 0 ? 'bg-stone-100' : "bg-white"} `} key={item.id}   >
          <div className="max-w-6xl mx-auto">
            <div className={`flex flex-wrap gap-4 justify-between items-center ${item?.id % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}  `}>
              <div className="basis-full md:basis-5/12  grow  shrink ">
                <h2 className="text-4xl font-semibold mb-5 "> {item?.category} </h2>
                <p className="md:text-lg/7 text-base/7">
                 {item.description}
                </p>
              </div>
              <div className="basis-full md:basis-5/12 grow shrink ">
                <Image src={item.imageSrc} alt="team photo image" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutDetails;
