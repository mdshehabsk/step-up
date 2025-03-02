import Image from 'next/image';
import teamPhoto from '@/image/team-photo.jpg'

const TeamAtGlance = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Image 
            src={teamPhoto}
            alt="StepUp Team" 
            className="w-full h-auto object-cover transform transition duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Content Column */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-blue-600">
            Team at a Glance
          </h2>
          
          <div className="text-gray-700 space-y-4">
            <p>
              StepUp is powered by a team of over <span className="font-semibold text-blue-700">100 passionate professionals</span> who bring creativity, skill, and expertise to every project. Their commitment to excellence drives our success, allowing us to deliver impactful solutions that make us stand out.
            </p>
            <p>
              We are dedicated to creating lasting value for our clients while also positively impacting the community. With a focus on collaboration and innovation, we&apos;re committed to building a brighter, more sustainable future for our clients, our team, and the world around us.
            </p>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-blue-800">100+</div>
              <div className="text-sm text-gray-600 mt-1">Team Members</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-blue-800">15+</div>
              <div className="text-sm text-gray-600 mt-1">Years Experience</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-blue-800">200+</div>
              <div className="text-sm text-gray-600 mt-1">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAtGlance;