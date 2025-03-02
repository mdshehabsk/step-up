import React from 'react';

const ChatWithUs = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information Section */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Chat With Us</h1>
            
            <p className="text-gray-600 mb-6">Speak to our friendly team via live chat.</p>
            
            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-2">
                <div className="text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-indigo-600">Email: hello@stepup.com.bd</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-indigo-600">Email: agency@stepup.com.bd</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-indigo-600">Message Us On whatsapp</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mb-6"></div>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h2>
            <p className="text-gray-600 mb-2">Call our team Sat-Thu from 10am to 7pm</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-indigo-600">+8809611678939</span>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mb-6"></div>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h2>
            <p className="text-gray-600 mb-4">Speak to our friendly team via live chat.</p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="text-indigo-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Ventura Iconia, Level 3, Holding 37 Road No. 11, Banani, Dhaka 1213
                </span>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="text-indigo-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  House# 06, Road# 1A, Sector# 16F, Uttara, Dhaka - 1230
                </span>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden border border-gray-200 h-full min-h-96">

              <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16817.55478467941!2d90.358524!3d23.869957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c38b9ad2ee9d%3A0xbd2b3698e314cff2!2sStepUp!5e1!3m2!1sen!2sus!4v1740835185466!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWithUs;