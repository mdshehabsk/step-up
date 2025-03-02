import layer from "@/image/layer.webp";
import Image from "next/image";
const Approach = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="flex flex-col-reverse md:flex-row px-4 items-center justify-between">
        <Image src={layer} alt="layer image" width={500} />
        <div>
          <p>How We do it</p>
          <h2 className="text-5xl text-bold">The Full-Funnel Approach.</h2>
          <p className="text-xl">
            Our comprehensive full-funnel marketing strategy ensures our team
            connects with clients at every stage of their journey, providing
            customized solutions that boost both new customer acquisition and
            retention for e-commerce brands. At the top of the funnel, we employ
            broad-reaching tactics to attract a diverse pool of potential
            prospects. As these prospects move deeper into the funnel, our
            marketing efforts become more targeted, honing in on the most
            qualified audiences with the greatest potential for conversion.
          </p>
          <div className="my-2" >
            <p className="text-xl" >Includes:</p>
            <div className="flex gap-3 flex-wrap my-2">
                <button className="px-2 rounded-full border border-black/30 text-lg" >Creative</button>
                <button className="px-2 rounded-full border border-black/30 text-lg" >Digital Marketing</button>
                <button className="px-2 rounded-full border border-black/30 text-lg" >Email + SMS</button>
                <button className="px-2 rounded-full border border-black/30 text-lg" >Website Development</button>
                <button className="px-2 rounded-full border border-black/30 text-lg" >SEO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
