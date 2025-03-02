import ceoImage from '@/image/ceo.webp'
import React from 'react';
import { Facebook, Youtube, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const FounderPage = () => {
  return (
    <div className="bg-indigo-950 text-white font-sans">
      {/* Main container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="flex flex-col-reverse md:flex-row md:items-center">

          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Meet the Founder & CEO</h1>
            
            <p className="mb-6">
              <span className="text-blue-400">Fahmid Al Nayem</span>, CEO and Managing Director of StepUp, began his journey 
              in digital marketing in 2014, focusing on the U.S. and U.K. online markets. As 
              the driving force behind StepUp&apos;s vision and strategy, he leads a dynamic 
              team of over 100 professionals, ensuring the company&apos;s continued success 
              and growth. As the leader, the CEO is accountable for:
            </p>
            
            <p className="mb-8">
              Setting the overall direction and long-term goals of the company, ensuring 
              alignment with its mission and vision. By ensuring efficient operations across 
              all departments, maintaining high standard value and productivity. Under the 
              CEO&apos;s guidance, StepUp continues to thrive as a leader in the Marketing 
              Agency, delivering outstanding outcomes and achieving new milestones.
            </p>
            
            {/* Social media icons */}
            <div className="flex space-x-4 mb-8">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            
            {/* CTA Button */}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md flex items-center transition-colors">
              More Details About Our CEO
              <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative h-full flex">

              <div className="absolute top-0 right-0 w-32 h-32 border border-indigo-600 rounded-full opacity-20"></div>
              <div className="absolute top-10 right-10 w-24 h-24 border border-indigo-600 rounded-full opacity-20"></div>
              <div className="absolute top-20 right-20 w-16 h-16 border border-indigo-600 rounded-full opacity-20"></div>

              <div className="relative z-10 w-full">
                <Image 
                  src={ceoImage}
                  alt="Fahmid Al Nayem, CEO of StepUp" 
                  className="w-full object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderPage;