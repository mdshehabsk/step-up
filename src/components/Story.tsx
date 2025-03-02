const Story = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between gap-5  px-4 md:max-w-[75%]  mx-auto py-12 ">
      <div className=" basis-full md:basis-6/12">
        <video
          className=" w-full h-full object-cover aspect-[1.7] "
          autoPlay
          muted
          loop
          playsInline
          controls
          
        >
          <source src="/video/stepup-feature-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className=" basis-full md:basis-6/12">
        <h2 className="text-4xl font-bold capitalize">Our Story</h2>
        <p className="text-lg/7  my-2 " >
        Founded in July 2023, StepUp has roots dating back to 2014 when CEO Fahmid Al Nayem began his digital marketing career serving foreign clients. After building successful ventures in the US & UK market, he identified Bangladesh&apos;s potential for online business.
        </p>
        <p className="text-lg/7 my-2" >
        In 2021, Fahmid formed a small team to provide business services, and as demand stands up, he established StepUp as a dedicated agency.
        With the motto “Your Growth Partner,” StepUp specializes in comprehensive digital marketing and now owns 500+ successful partnerships with businesses nationwide.
        </p>
      </div>
    </div>
  );
};

export default Story;
