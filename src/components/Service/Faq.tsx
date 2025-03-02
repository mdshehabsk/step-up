'use client'
import React, { FC, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqItem: FC<{
    question: string;
    isOpen: boolean;
    onClick: () => void;
    answer: string;
  }> = ({ question, isOpen, onClick, answer }) => {
    const contentRef = useRef<HTMLDivElement>(null);
  
    return (
      <div className="mb-3">
        <button
          className="w-full bg-white rounded-lg p-4 flex justify-between items-center text-left shadow-sm hover:bg-gray-50 transition-colors"
          onClick={onClick}
        >
          <span className="font-medium text-gray-800">{question}</span>
          <ChevronDown
            className={`text-blue-600 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            size={20}
          />
        </button>
  
        {/* Animated answer container */}
        <div
          ref={contentRef}
          className="bg-white rounded-b-lg mt-1 shadow-sm overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            height: isOpen ? contentRef.current?.scrollHeight : 0,
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden",
          }}
        >
          <div className="p-4">
            <p className="text-gray-600">{answer}</p>
          </div>
        </div>
      </div>
    );
  };

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    { question: "What services does StepUp offer?" , answer: 'StepUp excels with its in-depth knowledge of local markets, tailored service approach, and unwavering commitment to delivering maximum value for every client.'},
    { question: "Why should you choose StepUp over others?", answer: 'StepUp offers a comprehensive range of services, including Website Development, Content Solutions, Video Editing, E-Commerce Photo Editing, and Digital Marketing, designed to help businesses grow and succeed in the digital landscape.' },
    { question: "How do I get started with your services?" , answer: 'Getting started is simple! Just share your project details with us, and our team will guide you through the process. We’ll provide tailored solutions designed to meet your specific needs and help you achieve your goals.'},
    { question: "Do you offer custom solutions for businesses?" , answer: 'Absolutely! At StepUp, we specialize in crafting personalized solutions that are perfectly aligned with your business’s unique needs and goals. Our team takes the time to understand your challenges and aspirations, ensuring that we recommend the best strategies for your success. Whether you’re looking to boost growth, improve efficiency, or enhance customer engagement, we’re here to help you achieve your vision with tailored, effective solutions.' },
    { question: "Can StepUp manage my entire digital marketing campaign?" , answer: 'Yes, we offer complete end-to-end digital marketing solutions that cover every aspect of your marketing needs. From crafting effective strategies to managing campaigns and analyzing performance, our team ensures every step is optimized for success. We focus on delivering measurable results and driving growth, all while keeping your business goals at the forefront. Our solutions are designed to create lasting impact and help your brand thrive in a competitive market.' },
    { question: "Do you provide ongoing support?", answer: 'Absolutely! Our team is committed to providing continuous support and guidance, even after your project is completed. We believe in building long-term relationships with our clients, ensuring you’re always equipped with the tools and advice you need to succeed. Whether you have questions, need adjustments, or want to explore new opportunities, we’re here to assist you every step of the way. Your success remains our priority, even beyond project completion.' },
    { question: "How can I contact StepUp?", answer: 'You can reach us via email, phone, or through the contact form on our website.We are always here to assist you.' },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleFaq = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-green-50 p-8 md:p-16 rounded-lg">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-blue-800 text-center md:text-left">
            Discover Everything <br />
            <span className="text-blue-700">About StepUp</span>
          </h2>
        </div>

        <div className="md:w-2/3">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
