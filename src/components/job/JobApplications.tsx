'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define types for form data
interface FormData {
  jobPosition: string;
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
  joinReason: string;
  uniqueSkills: string;
  cv: File | null;
}

const JobApplicationForm: React.FC<{jobPosition: string}> = ({jobPosition}) => {
  const [formData, setFormData] = useState<FormData>({
    jobPosition,
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    joinReason: '',
    uniqueSkills: '',
    cv: null
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({
        ...formData,
        cv: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add API call or processing logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-16 px-4" id='apply-now' >
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Position */}
            <div>
              <label htmlFor="jobPosition" className="block text-gray-800 text-sm font-medium mb-2">
                Job Position <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="jobPosition"
                name="jobPosition"
                value={formData.jobPosition}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                readOnly
              />
            </div>

            {/* Your Name */}
            <div>
              <label htmlFor="name" className="block text-gray-800 text-sm font-medium mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            {/* Your Email */}
            <div>
              <label htmlFor="email" className="block text-gray-800 text-sm font-medium mb-2">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            {/* Your Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-gray-800 text-sm font-medium mb-2">
                Your Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            {/* LinkedIn Profile Link */}
            <div>
              <label htmlFor="linkedin" className="block text-gray-800 text-sm font-medium mb-2">
                LinkedIn Profile Link
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Your Portfolio */}
            <div>
              <label htmlFor="portfolio" className="block text-gray-800 text-sm font-medium mb-2">
                Your Portfolio
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Why do you want to join us? */}
            <div className="md:col-span-2">
              <label htmlFor="joinReason" className="block text-gray-800 text-sm font-medium mb-2">
                Why do you want to join us? <span className="text-red-500">*</span>
              </label>
              <textarea
                id="joinReason"
                name="joinReason"
                value={formData.joinReason}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              ></textarea>
            </div>

            {/* What sets you apart form others? */}
            <div className="md:col-span-2">
              <label htmlFor="uniqueSkills" className="block text-gray-800 text-sm font-medium mb-2">
                What sets you apart form others? <span className="text-red-500">*</span>
              </label>
              <textarea
                id="uniqueSkills"
                name="uniqueSkills"
                value={formData.uniqueSkills}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              ></textarea>
            </div>

            {/* Upload your CV */}
            <div className="md:col-span-2">
              <label htmlFor="cv" className="block text-gray-800 text-sm font-medium mb-2">
                Upload your CV
                <div className="text-xs text-gray-500">(The file must be in .pdf format and max file size 3MB) <span className="text-red-500">*</span></div>
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={handleFileChange}
                accept=".pdf"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-12 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;