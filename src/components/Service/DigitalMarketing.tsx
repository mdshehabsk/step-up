import Image from "next/image";
import digitalmarketingImage from '@/image/digital-marketing/marketing.webp'
const DigitalMarketing = () => {
  return (
    <div className="bg-stone-100 py-20 " id="digital-marketing" >
      <div className="max-w-6xl mx-auto p-4 ">
        <div className="my-4">
          <h2 className="text-3xl lg:text-5xl font-bold my-4 text-center md:text-left">
            Digital Marketing
          </h2>
          <p>
            Your future customers are spending hours a day on platforms such as
            Facebook, Instagram, and Google – we meet them where they are with
            strategic targeting and placement to cut through the noise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 my-4">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">
              Marketing Strategy and Consultancy
            </h3>
            <p className="md:text-lg">
              Take your business to the next level with customized strategies
              and expert advice to improve your online presence and drive
              long-term success.
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">
              E-commerce Tracking With GTM and Analytics
            </h3>
            <p className="md:text-lg">
              We configure Google Tag Manager and GA4 with e-commerce tracking,
              providing insights to help you analyze data and drive business
              growth.
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">
              Facebook Ad Management
            </h3>
            <p className="md:text-lg">
              Take your business to the next level with customized strategies
              and expert advice to improve your online presence and drive
              long-term success.
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">
              Conversion Rate Optimisation (CRO)
            </h3>
            <p className="md:text-lg">
              We study user behavior, identify roadblocks, and use tools like
              GTM, GA4, Microsoft Clarity, and Hotjar to optimize conversions
              with data-backed strategies.
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">
              Facebook Pixel and Server side tracking
            </h3>
            <p className="md:text-lg">
              Improve ad performance with Facebook Pixel and CAPI, ensuring
              accurate tracking and consistent campaign insights.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-2">
        <Image src={digitalmarketingImage} alt="digital marketing image" className="scale-75" />
      </div>
    </div>
  );
};

export default DigitalMarketing;
