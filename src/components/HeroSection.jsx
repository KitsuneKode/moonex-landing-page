import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen md:pt-[393px] pt-[246px] overflow-hidden px-4 md:px-6 lg:px-20 bg-[url('/circles.png')] bg-cover bg-center">
      <div className="absolute top-[30px] md:top-[74px] left-[-150px] md:left-[-278px] w-[300px] md:w-[675px] h-[200px] md:h-[314px] bg-[#EDD955] opacity-20 blur-[100px] md:blur-[200px]" />
      <div className="absolute top-[200px] md:top-[372px] right-[-100px] md:right-[-200px] lg:left-[780px] w-[300px] md:w-[675px] h-[200px] md:h-[314px] bg-[#EDD955] opacity-20 blur-[100px] md:blur-[200px]" />

      <img
        src="/star1.png"
        alt="Star"
        className="lg:block absolute lg:top-[241px] lg:left-[190px] opacity-50 lg:opacity-100 right-17 top-[23%]"
      />
      <div className="max-w-[1343px] mx-auto relative z-10 p-6 md:p-0">
        <div className="max-w-[906px]">
          <h1 className="font-neue-machina font-extrabold text-[45px] md:text-[60px] lg:text-[75px] leading-[1.1] md:leading-[72px] text-white">
            Trusted Multi-Chain
            <br />
            <span className="text-yellow-400">DEX </span>
            <span>Platform</span>
          </h1>
          <p className="font-neue-machina text-[18px] md:text-[22px] lg:text-[25px] leading-[1.4] md:leading-[34px] text-[#9E9E9E] mt-4 md:mt-6 max-w-[856px]">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>

          <div className="flex flex-row gap-4 md:gap-7 mt-6 md:mt-10">
            <Button
              className="h-[40px] md:h-[47px] bg-gradient-to-r from-[#E4B40D] to-[#FBD966] text-black font-raleway 
                font-extrabold hover:opacity-90 transition-all w-[140px] md:w-[159px] text-sm md:text-base hover:bg-yellow-400/10 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 "
            >
              Connect Wallet
            </Button>
            <Button
              variant="outline"
              className="h-[40px] md:h-[47px] border-2 border-[#E4B40D] text-[#E4B40D] font-raleway 
                font-extrabold hover:bg-[#E4B40D]/10 transition-all w-[140px] md:w-[159px] text-sm md:text-base hover:bg-yellow-400/10 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95
                hover:shadow-[0_0_20px_rgba(228,180,13,0.2)]"
            >
              Trade Crypto
            </Button>
          </div>
        </div>
      </div>
      {/* Decorative Sphere */}
      <img
        src="/star2.png"
        alt="Star"
        className="lg:block absolute lg:top-[176px] lg:right-64 right-10 top-[20%] opacity-50 lg:opacity-100"
      />
      <div
        className="absolute lg:right-36 top-[29%] w-[259px] h-[259px] rounded-full bg-gradient-to-br from-[#fff6d7] to-[#e4b40d] opacity-40 lg:opacity-100 right-10"
        style={{
          boxShadow: `
            inset 0px 0px 24px rgba(255, 255, 255, 0.26),
            inset 0px 20.0205px 40px rgba(194, 255, 255, 0.25),
            inset -35.0358px -50.0511px 80.1px rgba(228, 180, 13, 0.55)
          `,
        }}
      />
      <img
        src="/star3.png"
        alt="Star"
        className="lg:block absolute lg:top-[721px] lg:right-72 right-10 top-[67%] opacity-50 lg:opacity-100 "
      />
    </section>
  );
};

export default HeroSection;
