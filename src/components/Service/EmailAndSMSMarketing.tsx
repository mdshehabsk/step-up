import Image from "next/image";
import sms1 from '@/image/emailAndSMSMarketing/1.webp'
import sms2 from '@/image/emailAndSMSMarketing/2.webp'
import sms3 from '@/image/emailAndSMSMarketing/3.webp'
import sms4 from '@/image/emailAndSMSMarketing/4.webp'
const EmailAndSMSMarketing = () => {
  return (
    <div className="bg-stone-100 py-20 " id="email-sms-marketing" >
      <div className="max-w-6xl mx-auto p-4">
        <div className="my-4">
          <h2 className="text-3xl lg:text-5xl font-bold my-4 text-center md:text-left">
            Email & SMS Marketing
          </h2>
          <p>
            Our email marketing and automation services effectively nurture
            leads through the sales funnel, boosting customer acquisition,
            improving engagement, and enhancing retention for long-term business
            growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 my-4">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">
              Post Purchase Funnels
            </h3>
            <p className="md:text-lg">
              These are marketing strategies designed to engage customers after
              they make a purchase, nurturing their relationship with your brand
              through upsells, cross-sells, and repeat purchase incentives.
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">
              Marketing Automation
            </h3>
            <p className="md:text-lg">
              The use of software and technology to automate marketing tasks
              such as email campaigns, social media posts, or customer
              segmentation, enabling efficient and personalized outreach at
              scale.
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">
              Newsletters
            </h3>
            <p className="md:text-lg">
              Regularly distributed emails or messages that keep subscribers
              informed about new products, offers, or company updates, fostering
              long-term engagement and customer loyalty.
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">Upsells</h3>
            <p className="md:text-lg">
              We implement in cart and after checkout optimizations to upsell
              and drive up average order value.
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold my-3">
              SMS Marketing
            </h3>
            <p className="md:text-lg">
              A direct and personalized communication channel using text
              messages to inform customers about promotions, updates, or
              exclusive offers, creating a sense of urgency and encouraging
              action.
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

export default EmailAndSMSMarketing;
