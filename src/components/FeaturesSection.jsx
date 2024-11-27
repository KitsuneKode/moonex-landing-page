const FeatureCard = ({ icon, title, description }) => (
  <div
    className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-[100px] rounded-[18px] p-8
    transition-all duration-300 hover:scale-105 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
    group cursor-pointer"
  >
    <div
      className="w-[68px] h-[68px] bg-white/10 rounded-full flex items-center justify-center mb-6
      transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
    >
      <span className="text-2xl text-white">{icon}</span>
    </div>
    <h3
      className="text-[#ECF1F0] font-raleway font-semibold text-[20px] leading-[30px] mb-3
      transition-colors duration-300 group-hover:text-yellow-400"
    >
      {title}
    </h3>
    <p className="text-[#B6B6B6] font-roboto text-base leading-6">
      {description}
    </p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: '$',
      title: 'Cheapest TXs',
      description:
        'Exchange popular digital currencies at the cheapest possible transaction price',
    },
    {
      icon: '🛡️',
      title: 'CerTIK',
      description:
        'We are Audited by CertiK. CertiK is the leading security focused ranking platform to',
    },
    {
      icon: '✂️',
      title: 'No Contract Sets',
      description: 'No contract calls to fund the marketing wallets',
    },
    {
      icon: '↔️',
      title: 'CrossDex Support',
      description:
        'Exchange popular digital currencies at the cheapest possible transaction price',
    },
  ];

  return (
    <section className="py-20 bg-[#071624]">
      <div className="max-w-[1343px] mx-auto px-6">
        <h2 className="text-[45px] font-machina font-extrabold leading-[43px] text-white mb-12 text-center">
          Our <span className="text-yellow-400">Features</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
