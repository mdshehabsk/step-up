const stepsData = [
  {
    id: "01",
    title: "Identifying your Needs",
    color: "#8dd3c7",
    bgColor: "#f0faf8",
    description:
      "We begin by understanding your goals, taking the time to dive into your needs and aspirations. This clarity allows us to craft tailored solutions that align with your vision, setting the stage for a successful collaboration.",
  },
  {
    id: "02",
    title: "Designing the Right Strategy",
    color: "#b3a2e3",
    bgColor: "#f5f2fd",
    description:
      "Once we understand your business and brand vision, we explore all marketing possibilities—from improving search visibility to running targeted ads. We carefully plan and evaluate strategies to identify the most effective approach, setting a timeline to test and deliver measurable results for your business.",
  },
  {
    id: "03",
    title: "Making it Happen",
    color: "#8ecae6",
    bgColor: "#f0f8fc",
    description:
      "Now it's time to take action. StepUp drives growth by expanding your digital reach and implementing sustainable strategies. We also provide continuous support, updates, and maintenance to keep your digital assets secure, efficient, and aligned with your goals. Don't fall behind Partner with the best Digital Marketing Agency to achieve everlasting success.",
  },
];
const MarketingPhilosophy = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-8 lg:py-12">
      <div className="flex flex-col gap-4 justify-center">
        <h2 className="text-5xl font-bold text-center">
          Our Marketing Philosophy
        </h2>
        <p className="text-xl text-center">
          You know your business—we know data. Let’s bring it together by
          combining passion, innovation, and results-driven strategies.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl mx-auto p-4">
        {stepsData.map((step) => (
          <div
            key={step.id}
            className="flex-1 rounded-lg p-8"
            style={{ backgroundColor: step.bgColor }}
          >
            <h2
              className="text-6xl font-light mb-4"
              style={{ color: step.color }}
            >
              Step {step.id}
            </h2>
            <h3 className="text-xl font-bold mb-5 text-gray-800">
              {step.title}
            </h3>
            <p
              className="text-gray-700 leading-relaxed"
              style={{ lineHeight: "1.8" }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingPhilosophy;
