import Link from 'next/link';
import React from 'react';

const OpenPositions = () => {
  // Job listings data
  const jobListings = [
    {
      title: "Flutter Developer",
      jobType: "Full Time (On Site)",
      salary: "Salary: 30K - 50K (Based on experience)",
      deadline: "Deadline: March 10, 2025",
      status: "Open",
      href: "flutter-developer"
    },
    {
      title: "PHP Laravel Developer",
      jobType: "Full Time (On Site)",
      salary: "Salary: 30K - 50K (based on experience)",
      deadline: "Deadline: March 11, 2025",
      status: "Open",
      href: "php-laravel-developer"
    },
    {
      title: "Search Engine Optimization (SEO) Specialist",
      jobType: "Full Time (On Site)",
      salary: "Salary: 20K - 30K (based on experience).",
      deadline: "Deadline: March 11, 2025",
      status: "Open",
      href: "seo-specialist"
    },
    {
      title: "Frontend Engineer (Mid-Senior)",
      jobType: "Full Time (On Site)",
      salary: "Salary: 30K - 45K",
      deadline: "Deadline: March 24, 2025",
      status: "Open",
      href: "frontend-engineer"
    },
    {
      title: "Creative Content Writer (English & Bangla)",
      jobType: "Full Time (On Site)",
      salary: "Salary: 15k-25k",
      deadline: "Deadline: April 6, 2025",
      status: "Open",
      href: "creative-content-writer"
    }
  ];

  return (
    <div className="bg-white py-16 px-4" id='open-position' >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Open Positions</h1>
        
        <div className="space-y-6">
          {jobListings.map((job, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className="bg-gray-200 p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                      {job.jobType}
                    </span>
                    <span className="text-gray-700 text-sm px-2 py-1">
                      {job.salary}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-3">
                  <div className="flex gap-2 items-center">
                    <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                      {job.deadline}
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                      {job.status}
                    </span>
                  </div>
                  
                  <Link href={`/job/${job.href}`} className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full flex items-center justify-center transition-colors">
                    Apply Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;