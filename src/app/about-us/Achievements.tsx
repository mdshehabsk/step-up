import React from 'react';
import achievementImage from '@/image/about-page/achievement.webp'
import Image from 'next/image';
import CountUp from '@/components/Countup';
const AchievementsSection = () => {
  const achievements = [
    {
      number: 80,
      suffix: "+",
      description: "Designers & Developers"
    },
    {
      number: 500,
      suffix: "+",
      description: "Satisfied Clients & Growing"
    },
    {
      number: 2500,
      suffix: '+',
      description: "Completed Websites"
    },
    {
      prefix: "৳",
      number: 100,
      suffix: "M",
      description: "Sales Generated for Clients"
    }
  ];

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 z-10">
          Our Achievements
        </h2>
        

        <Image src={achievementImage} alt='achievement image' className='absolute top-0 -z-10' />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-20">
          {achievements.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-3xl md:text-5xl font-bold text-blue-900 mb-2">
              <span> {item.prefix} </span>  <CountUp end={item.number} /> <span> {item.suffix} </span> 
              </h3>
              <p className="font-semibold md:text-2xl ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;