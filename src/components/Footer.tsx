'use client'
import logo from '@/image/step-up-logo.png'
import Image from 'next/image';

import React, { useState } from 'react';
import Link from 'next/link';
const CompleteFooter = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    service: 'Web design & Development',
    message: ''
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Upper Footer with Form and Testimonial */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Get Started</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4 relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
                <div className="absolute right-3 top-3 text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
              </div>
              
              <div className="mb-4 relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
                <div className="absolute right-3 top-3 text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              
              <div className="mb-4 relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
                <div className="absolute right-3 top-3 text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
              </div>
              
              <div className="mb-4 relative">
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Business Name"
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
                <div className="absolute right-3 top-3 text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
              </div>
              
              <div className="mb-4 relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full text-gray-400 px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  required
                >
                  <option>Web design & Development</option>
                  <option>Digital Marketing</option>
                  <option>Content Solution</option>
                  <option>Email & SMS Marketing</option>
                  <option>Search Engine Optimization</option>
                </select>
                <div className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              
              <div className="mb-4 relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 h-24"
                  required
                ></textarea>
                <div className="absolute right-3 top-3 text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-200"
              >
                Get Started
              </button>
            </form>
          </div>
          
          {/* Testimonial and Contact Info Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to speak with a marketing expert? Give us a ring <a href="tel:+8809611678939" className="text-blue-400 hover:underline">+880 9611678939</a></h3>
              
              <ul className="space-y-3 my-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Leading Digital Marketing Agency</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>900+ Websites Launched</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>$100M+ Client Revenue Generated</span>
                </li>
              </ul>
            </div>
            
            {/* Testimonial Carousel */}
            <div className="bg-gray-800 rounded-lg p-6 mt-8 relative">
              {/* Top Left Banner */}
              <div className="absolute -top-4 -left-4 bg-red-600 text-white px-4 py-1 font-semibold transform -rotate-6 shadow-md">
                5 LONG YEARS
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/3">
                  {/* <Image src="/api/placeholder/150/150" alt="Testimonial" className="rounded-lg" /> */}
                </div>
                
                <div className="md:w-2/3">
                  <p className="mb-4">StepUp Technology Ltd delivered excellent e-commerce marketing on time with great support. Highly recommended!</p>
                  
                  <div className="flex items-center mt-4">
                    {/* <Image src={logo}  alt='logo image' /> */}
                    <div>
                      <h4 className="font-semibold">Herok Ahmed</h4>
                      <p className="text-sm text-gray-300">Marketing & Web Development Service</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex justify-end gap-2 mt-4">
                <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Company Info Column */}
            <div className="col-span-1">
              <div className="mb-6">
                {/* Replace with your actual logo */}
                <div className="flex items-center">
                  <Image src={logo} alt="StepUp Logo" className='max-w-[150px]' />
                </div>
              </div>
              <p className="text-sm mb-4">Helping Brands Grow Online for Over 2 Years</p>
              <p className="text-sm mb-4">Ready to speak with a marketing expert? Give us a ring</p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-6">
                <a href="https://www.facebook.com/stepup4u" target='_blank' className="text-white hover:text-blue-400">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@fahmidalnayem" target='_blank' className="text-white hover:text-red-400">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/stepup-technology" target='_blank' className="text-white hover:text-blue-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/stepup4u" target='_blank' className="text-white hover:text-pink-400">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/service/#web-design-development" className="text-gray-300 hover:text-white transition">Web Development</Link></li>
                <li><Link href="/service/#digital-marketing" className="text-gray-300 hover:text-white transition">Digital Marketing</Link></li>
                <li><Link href="/service/#content-solutions" className="text-gray-300 hover:text-white transition">Content Solution</Link></li>
                <li><Link href="/service/#email-sms-marketing" className="text-gray-300 hover:text-white transition">Email & SMS Marketing</Link></li>
                <li><Link href="/service/#search-engine-optimization" className="text-gray-300 hover:text-white transition">Search Engine Optimization</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about-us" className="text-gray-300 hover:text-white transition">About</Link></li>
                <li><Link href="/career" className="text-gray-300 hover:text-white transition">Careers</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white transition">Company Profile</Link></li>
                <li><Link href="/contact-us" className="text-gray-300 hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="not-italic">
                <p className="mb-3 text-sm">Ventura Iconia, Level 3, Holding 37 Road No. 11, Banani, Dhaka 1213</p>
                <p className="mb-6 text-sm">House# 06, Road# 1A, Sector# 16F, Uttara, Dhaka - 1230</p>
                
                <div className="flex items-center mb-3">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+8809611678939" className="text-gray-300 hover:text-white">+8809611678939</a>
                </div>
                
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@stepup.com.bd" className="text-gray-300 hover:text-white">hello@stepup.com.bd</a>
                </div>
              </address>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <p className="text-sm text-center text-gray-400">
              © Copyright 2025 StepUp, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CompleteFooter;