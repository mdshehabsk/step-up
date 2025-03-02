import React from 'react';

const OurValues = () => {
  // Values data
  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                fill="none" stroke="#4A5568" strokeWidth="1.5" />
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                fill="#FBBF24" fillOpacity="0.8" />
        </svg>
      ),
      title: "Passion",
      description: "We are passionate about what we do and about what you do. We are here to help you succeed."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#4A5568" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="6" fill="#FBBF24" />
          <path d="M12 7V12L15 15" stroke="#4A5568" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Innovation",
      description: "With the online industry moving at the speed of light, we must always innovate to make sure we're providing the latest and greatest to our clients."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="#4A5568" strokeWidth="1.5" fill="none" />
          <path d="M15 2H9a1 1 0 0 0-1 1v1h8V3a1 1 0 0 0-1-1z" stroke="#4A5568" strokeWidth="1.5" fill="none" />
          <path d="M10 14l2 2 4-4" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
      title: "Customer Focus",
      description: "We strive to exceed our clients needs and are delighted when our clients' become our #1 fans."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M16 11V3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8" stroke="#4A5568" strokeWidth="1.5" fill="none" />
          <path d="M5 11h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z" stroke="#4A5568" strokeWidth="1.5" fill="none" />
          <rect x="8" y="15" width="8" height="4" rx="1" fill="#FBBF24" />
        </svg>
      ),
      title: "Integrity",
      description: "We honor our commitments and take personal responsibility for our goals."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="7" r="4" stroke="#4A5568" strokeWidth="1.5" fill="none" />
          <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" stroke="#4A5568" strokeWidth="1.5" fill="none" />
          <circle cx="8" cy="14" r="2" fill="#FBBF24" />
          <circle cx="16" cy="14" r="2" fill="#FBBF24" />
        </svg>
      ),
      title: "Teamwork",
      description: "We recruit the best and the brightest. This way, we work together to help achieve your goals."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12">
          <rect x="4" y="12" width="4" height="9" stroke="#4A5568" strokeWidth="1.5" fill="none" />
          <rect x="10" y="8" width="4" height="13" stroke="#4A5568" strokeWidth="1.5" fill="none" />
          <rect x="16" y="4" width="4" height="17" stroke="#4A5568" strokeWidth="1.5" fill="none" />
          <path d="M8 5V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" fill="#FBBF24" />
        </svg>
      ),
      title: "Results Driven",
      description: "Results are what drives business and we are what drives results!"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Values</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow "
            >
              <div className="mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;