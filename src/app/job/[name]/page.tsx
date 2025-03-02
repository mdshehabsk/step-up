// interface Job {
//     position: string;
//     location: string;
//     category: string;
//     jobType: string;
//     workingDays: string;
//     workingHours: string;
//     salary: string;
//     applicationDeadline: string;
//     status: string;
//     href: string;
//     jobDescription: string;
//     aboutUs: string;
//     jobResponsibilities: string[];
//     qualifications: string[];
//     experience: string;
//   }

import JobApplicationForm from "@/components/job/JobApplications";
import Link from "next/link";

interface Jobs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const jobData: Jobs[] = [
  {
    position: "Flutter Developer",
    location: "Uttara, Dhaka",
    category: "Software Development",
    jobType: "Full Time (On Site)",
    workingDays: "Sunday to Thursday",
    workingHours: "Not specified",
    salary: "30K - 50K (Based on experience)",
    applicationDeadline: "March 10, 2025",
    status: "Open",
    href: "flutter-developer",
    jobDescription: `We are seeking a skilled Flutter Developer to join our team and contribute to building high-quality mobile applications. As a Flutter Developer, you will be responsible for developing cross-platform mobile apps using the Flutter framework, ensuring performance, usability, and code quality.`,
    aboutUs: `StepUp Technology Ltd. is a leading tech company providing online business solutions, including web development, software services, and digital marketing. With a growing team of 100+ professionals, we are committed to delivering innovative solutions worldwide.`,
    jobResponsibilities: [
      "Collaborate with cross-functional teams to understand project requirements and objectives.",
      "Develop and implement mobile applications using the Flutter framework.",
      "Translate designs and wireframes into high-quality code.",
      "Optimize app performance and ensure compatibility across various devices.",
      "Troubleshoot and debug issues to maintain app stability.",
      "Stay updated on Flutter and mobile development trends.",
      "Communicate effectively with team members and stakeholders.",
    ],
    qualifications: [
      "Proven experience as a Flutter Developer or similar role, with a strong portfolio of mobile applications developed using Flutter.",
      "Proficiency in Dart programming language and Flutter framework.",
      "Understanding of mobile app design principles and UI/UX best practices.",
      "Familiarity with RESTful APIs and third-party integrations.",
      "Experience with Git and version control workflows.",
      "Excellent problem-solving and analytical skills.",
      "Degree in Computer Science, Engineering, or related field (preferred).",
    ],
    experience: "2+ Years experience in related field.",
  },
  {
    position: "Creative Content Writer (English & Bangla)",
    location: "Uttara, Dhaka",
    category: "Content Creation",
    jobType: "Full Time (On Site)",
    workingDays: "Sunday to Thursday",
    workingHours: "Not specified",
    salary: "15K - 25K",
    applicationDeadline: "April 6, 2025",
    status: "Open",
    href: "creative-content-writer",
    jobDescription: `We are looking for a highly creative and skilled Creative Content Writer (English & Bangla) to craft compelling, engaging, and persuasive content across multiple platforms. You will play a key role in developing high-quality written materials, including website content, ad copies, social media posts, sales pages, and SEO-optimized articles. This role requires a strong understanding of digital marketing strategies, storytelling techniques, and search intent to create impactful content that resonates with our audience and drives engagement.`,
    aboutUs: `StepUp Technology Ltd. is a leading tech company providing online business solutions, including web development, software services, and digital marketing. With a growing team of 100+ professionals, we are committed to delivering innovative solutions worldwide.`,
    jobResponsibilities: [
      "Writing engaging and high-converting content for ads, social media, and sales pages.",
      "Creating compelling website content in English.",
      "Conducting in-depth research to develop SEO-friendly articles.",
      "Crafting content with a storytelling approach to captivate audiences.",
    ],
    qualifications: [
      "Strong understanding of SEO writing & search intent.",
      "Ability to write highly persuasive and engaging content.",
      "Excellent research skills and attention to detail.",
      "Exceptional English writing and speaking skills.",
    ],
    educationalRequirements: "Bachelor’s degree from a reputed university.",
    otherBenefits: [
      "Fully subsidized lunch & transport.",
      "Evening Snacks Provided.",
      "Festival Bonus: 2 per year.",
      "Collaborative and supportive work environment.",
      "Continuous learning and career development opportunities.",
      "Annual Retreat & Gaming Facility (PS5).",
    ],
    experience: "Minimum 1+ years of experience in a similar role.",
  },
  {
    position: "Frontend Engineer (Mid-Senior)",
    location: "Uttara, Dhaka",
    category: "Software Development",
    jobType: "Full Time (On Site)",
    workingDays: "Sunday to Thursday",
    workingHours: "Not specified",
    salary: "30K - 45K",
    applicationDeadline: "March 24, 2025",
    status: "Open",
    href: "frontend-engineer",
    jobDescription: `We are seeking a skilled Frontend Engineer specializing in React.js and modern web technologies to design, develop, and optimize high-performance web applications. You will work closely with designers, backend engineers, app developers, and product managers to build scalable and maintainable frontend solutions that enhance user experiences.`,
    aboutUs: `StepUp Technology Ltd. is a leading tech company providing online business solutions, including web development, software services, and digital marketing. With a growing team of 100+ professionals, we are committed to delivering innovative solutions worldwide.`,
    jobResponsibilities: [
      "Build and optimize web apps with React.js, JavaScript (ES6+), HTML, and CSS.",
      "Style UI components with Tailwind, SCSS, Styled Components.",
      "Implement state management with Redux, Context API, Recoil, or Zustand.",
      "Integrate RESTful APIs and GraphQL for efficient data handling.",
      "Optimize performance using Lighthouse and follow best practices.",
      "Work with Webpack, Vite, and Babel for build optimization.",
      "Write tests using Jest, React Testing Library, and Cypress.",
      "Apply UI/UX principles and ensure accessibility.",
      "Collaborate in an Agile environment and stay updated on frontend trends.",
    ],
    qualifications: [
      "Strong proficiency in React.js, JavaScript (ES6+), HTML, and CSS.",
      "Experience with state management libraries (Redux, Context API, Recoil, Zustand).",
      "Familiarity with RESTful APIs, GraphQL, and integration techniques.",
      "Knowledge of performance optimization tools (Lighthouse) and best practices.",
      "Experience with frontend build tools (Webpack, Vite, Babel).",
      "Proficiency in modern CSS frameworks (Tailwind, SCSS, Styled Components).",
      "Familiarity with testing libraries (Jest, React Testing Library, Cypress).",
      "Basic understanding of UI/UX principles and accessibility best practices.",
    ],
    bonusSkills: [
      "Excellent problem solver",
      "Experience with Next.js or other SSR frameworks.",
      "Knowledge of micro-frontends or modular architecture.",
      "Understanding of CI/CD pipelines for frontend deployment.",
      "Experience with Agile methodologies.",
    ],
    otherBenefits: [
      "Competitive salary.",
      "Fully subsidized lunch & transport.",
      "Opportunity to work on exciting and challenging projects.",
      "Collaborative and supportive work environment.",
      "Continuous learning and career development opportunities.",
    ],
    experience: "Mid-Senior level experience in related field.",
  },
  {
    position: "Search Engine Optimization (SEO) Specialist",
    location: "Uttara, Dhaka",
    category: "Digital Marketing",
    jobType: "Full Time (On Site)",
    workingDays: "Sunday to Thursday",
    workingHours: "Not specified",
    salary: "20K - 30K (based on experience)",
    applicationDeadline: "March 11, 2025",
    status: "Open",
    href: "seo-specialist",
    jobDescription: `We are seeking a skilled Search Engine Optimization (SEO) Specialist to join our team at StepUp Technology Ltd. The role involves developing and implementing data-driven SEO strategies, conducting keyword research, SEO audits, link building, and web analytics to enhance website visibility and engagement.`,
    aboutUs: `StepUp Technology Ltd. is a leading tech company providing online business solutions, including web development, software services, and digital marketing. With a growing team of 100+ professionals, we are committed to delivering innovative solutions worldwide.`,
    jobResponsibilities: [
      "Develop and implement outcome-based data-driven SEO & AEO strategies to achieve measurable outcomes.",
      "Lead and manage content creators, developers, and marketing teams to integrate SEO best practices.",
      "Use tools like Google Analytics, Google Search Console, SEMrush, and Ahrefs to track performance metrics.",
      "Conduct technical SEO audits to identify and resolve issues.",
      "Optimize website content, architecture, and meta elements to improve organic rankings.",
      "Develop effective backlink strategies to enhance domain authority.",
      "Collaborate with teams to create SEO-friendly content and implement internal linking strategies.",
    ],
    qualifications: [
      "Keyword Research, SEO Audits, and Link Building skills",
      "Web Analytics and On-Page SEO skills",
      "Experience in optimizing websites for search engines",
      "Knowledge of SEO tools and techniques",
      "Strong analytical and problem-solving skills",
      "Excellent communication and teamwork abilities",
    ],
    otherBenefits: [
      "Annual Increments: Yearly salary increments based on performance.",
      "Performance Bonus: Additional incentives for outstanding contributions.",
      "Festival Bonuses: Two full bonuses during major festivals.",
      "Team Retreat: An annual company-sponsored tour for relaxation and team bonding.",
      "Meals & Snacks: Fully subsidized lunch and snacks provided.",
      "Additional Perks: Other benefits as per company policy.",
    ],
    experience: "2+ years of experience in related field.",
  },
  {
    position: "PHP Laravel Developer",
    location: "Uttara, Dhaka",
    category: "Software Development",
    jobType: "Full Time (On Site)",
    workingDays: "Sunday to Thursday",
    workingHours: "Not specified",
    salary: "30K - 50K (based on experience)",
    applicationDeadline: "March 11, 2025",
    status: "Open",
    href: "php-laravel-developer",
    jobDescription: `We are seeking a skilled PHP Laravel Developer with at least 2 years of experience to join our dynamic team. The ideal candidate should have a strong background in Laravel development, maintaining clean and scalable code, and collaborating with a team of developers.`,
    aboutUs: `StepUp Technology Ltd. is a leading tech company providing online business solutions, including web development, software services, and digital marketing. With a growing team of 100+ professionals, we are committed to delivering innovative solutions worldwide.`,
    jobResponsibilities: [
      "Develop, test, and maintain Laravel-based web applications.",
      "Write clean, maintainable, and well-documented code.",
      "Work closely with frontend developers, designers, and other team members to ensure seamless integration.",
      "Maintain the existing codebase, fix bugs, and optimize application performance.",
      "Follow best practices for coding standards, security, and database design.",
      "Implement APIs and third-party integrations as required.",
      "Participate in code reviews, team meetings, and Agile development processes.",
      "Stay up to date with the latest Laravel updates and industry trends.",
    ],
    qualifications: [
      "Proficiency in MySQL, PostgreSQL, or other relational databases.",
      "Strong understanding of RESTful APIs, authentication, and authorization.",
      "Experience with JavaScript, Reactjs, Alpine.js, or other frontend frameworks is a plus.",
      "Knowledge of Git version control and collaborative development workflows.",
      "Familiarity with queues, caching, and job scheduling in Laravel.",
      "Ability to write efficient Eloquent queries and work with complex database structures.",
      "Experience with third-party payment gateways (PayPal, Stripe, etc.) is a plus.",
      "Strong problem-solving skills and a proactive approach to development.",
      "Good communication skills and ability to work in a team environment.",
    ],
    preferredSkills: [
      "Experience with Livewire or Filament PHP.",
      "Knowledge of Docker, Redis, and server management.",
      "Familiarity with unit testing and Laravel testing frameworks.",
      "Experience working with Agile or Scrum methodologies.",
    ],
    otherBenefits: [
      "Work-Life Balance: Two weekly holidays for better productivity.",
      "Annual Increments: Yearly salary increments based on performance.",
      "Performance Bonus: Additional incentives for outstanding contributions.",
      "Festival Bonuses: Two full bonuses during major festivals.",
      "Team Retreat: An annual company-sponsored tour for relaxation and team bonding.",
      "Meals & Snacks: Fully subsidized lunch and snacks provided.",
      "Additional Perks: Other benefits as per company policy.",
    ],
    experience: "Minimum 2 years of experience in PHP & Laravel development.",
  },
];

const JobPostingPage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const name = (await params).name;
  const currentJobInfo = jobData?.find((item) => item.href === name);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8  my-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Job Details Section - Takes 2/3 of the space on larger screens */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold border-b border-blue-500 pb-2 mb-4">
              JOB DETAILS
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">
                {" "}
                {currentJobInfo?.position}{" "}
              </h3>

              <div className="mt-4">
                <h4 className="font-medium">Job Description:</h4>
                <p className=" text-gray-700 mt-1">
                  {currentJobInfo?.jobDescription}
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-medium">About Us:</h4>
                <p className=" text-gray-700 mt-1">{currentJobInfo?.aboutUs}</p>
              </div>

              <div className="mt-4">
                <h4 className="font-medium">Job Responsibilities:</h4>
                <ul className="list-disc pl-5  text-gray-700 mt-1">
                  {currentJobInfo?.jobResponsibilities?.map(
                    (responsibility: string, ind: number) => (
                      <li key={ind}> {responsibility} </li>
                    )
                  )}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-medium">Qualifications:</h4>
                <ul className="list-disc pl-5  text-gray-700 mt-1">
                  {currentJobInfo?.qualifications?.map(
                    (qualification: string, ind: number) => (
                      <li key={ind}> {qualification} </li>
                    )
                  )}
                </ul>
              </div>

             
                  {
                    currentJobInfo?.preferredSkills &&  <div className="mt-4">
                    <h4 className="font-medium">Preferred Skills:</h4>
                    <ul className="list-disc pl-5  text-gray-700 mt-1">
                      {currentJobInfo?.preferredSkills?.map(
                        (skill: string, ind: number) => (
                          <li key={ind}> {skill} </li>
                        )
                      )}
                    </ul>
                  </div>
                  }
            
                  {
                    currentJobInfo?.otherBenefits &&   <div className="mt-4">
                    <h4 className="font-medium">Other Benefits:</h4>
                    <ul className="list-disc pl-5  text-gray-700 mt-1">
                    {currentJobInfo?.otherBenefits?.map(
                        (benefits: string, ind: number) => (
                          <li key={ind}> {benefits} </li>
                        )
                      )}
    
                    </ul>
                  </div>
                  }
              <div className="mt-4">
                <h4 className="font-medium">Experience:</h4>
                <p className=" text-gray-700 mt-1">
                  {currentJobInfo?.experience}
                </p>
              </div>
            </div>
          </div>

          {/* Job Summary Section - Takes 1/3 of the space on larger screens */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold border-b border-blue-500 pb-2 mb-4">
              JOB SUMMARY
            </h2>

            <div className="mb-4">
              <h4 className="font-medium">Location:</h4>
              <p className=" text-gray-700"> {currentJobInfo?.location} </p>
            </div>

            <div className="mb-4">
              <h4 className="font-medium">Category:</h4>
              <p className=" text-gray-700">{currentJobInfo?.category}</p>
            </div>

            <div className="mb-4">
              <h4 className="font-medium">Job Types:</h4>
              <p className=" text-gray-700">Full-Time (On-Site)</p>
            </div>

            <div className="mb-4">
              <h4 className="font-medium">Working Hours:</h4>
              <p className=" text-gray-700">Sunday to Thursday</p>
            </div>

            <div className="mb-4">
              <h4 className="font-medium">Salary:</h4>
              <p className=" text-gray-700"> {currentJobInfo?.salary} </p>
            </div>

            <div className="mb-4">
              <h4 className="font-medium">Application Deadline:</h4>
              <p className=" text-gray-700"> {currentJobInfo?.applicationDeadline} </p>
            </div>

            <div className="mt-6">
              <Link href='#apply-now' className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300">
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <JobApplicationForm jobPosition={currentJobInfo?.position} />
    </div>
  );
};

export default JobPostingPage;
