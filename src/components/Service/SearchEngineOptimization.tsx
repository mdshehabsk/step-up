import Image from "next/image";
import sms1 from '@/image/emailAndSMSMarketing/1.webp'
import sms2 from '@/image/emailAndSMSMarketing/2.webp'
import sms3 from '@/image/emailAndSMSMarketing/3.webp'
import sms4 from '@/image/emailAndSMSMarketing/4.webp'
const SearchEngineOptimization = () => {
  return (
    <div className="bg-stone-100 py-20" id="search-engine-optimization" >
      <div className="max-w-6xl mx-auto p-4">
        <div className="my-4">
          <h2 className="text-3xl lg:text-5xl font-bold my-4 text-center md:text-left">
          Search Engine optimization
          </h2>
          <p>
          We create SEO-optimized, high-converting websites with clear pathways that guide visitors, enhancing user experience and increasing leads without extra traffic.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 my-4">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">
            SEO audit and reporting
            </h3>
            <p className="md:text-lg">
            Conduct detailed audits and provide insightful reports to track performance, identify issues, and implement improvements for ongoing SEO success.
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">
            Technical SEO
            </h3>
            <p className="md:text-lg">
            Ensure your website’s technical health with fast load times, mobile-friendliness, and proper indexing for improved search engine performance.
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">
            On-page SEO
            </h3>
            <p className="md:text-lg">
            Optimize your website’s content, structure, and user experience to improve search engine rankings and drive organic traffic.
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">Local SEO</h3>
            <p className="md:text-lg">
            Boost your local presence and attract nearby customers with geo-targeted optimization for local search results.
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">
            Off-page SEO
            </h3>
            <p className="md:text-lg">
            Build your website’s authority through backlinks, social signals, and external factors to enhance visibility and ranking.
            </p>
          </div>
        </div>
        <div className="grid  grid-cols-2 gap-6">
            <Image src={sms1}  alt="sms marketing image" />
            <Image src={sms2}  alt="sms marketing image" />
            <Image src={sms3}  alt="sms marketing image" />
            <Image src={sms4}  alt="sms marketing image" />
        </div>
      </div>
    </div>
  );
};

export default SearchEngineOptimization;
