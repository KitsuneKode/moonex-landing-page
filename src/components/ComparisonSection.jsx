import { Card, CardContent } from '@/components/ui/card';
import { NavBarIcon } from '@/icons';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const comparisonPoints = [
    'Point no one',
    'Point no two this',
    'Point no two this',
    'Point no two this',
    'Point no two this',
  ];

  return (
    <section className="py-12 md:py-20 bg-[#071624]">
      <div className="max-w-[1343px] mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-[45px] font-machina font-extrabold leading-tight md:leading-[43px] text-white mb-8 md:mb-12 pl-14">
          Why <span className="text-yellow-400">MoonEX</span> ?
        </h2>

        <Card className="bg-white/[0.02] border-none">
          <CardContent className="p-4 md:p-8">
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {/* Headers */}
              <div className="text-yellow-400 font-conthrax text-xl md:text-[28px] leading-tight md:leading-[34px]">
                Comparison
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <NavBarIcon className="h-[35px] md:h-[45px] pl-[100px]" />
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <img
                  src="/uniswap.png"
                  alt="Uniswap"
                  className="h-[35px] md:h-[45px] pl-[100px]"
                />
              </div>

              {/* Comparison Points */}
              {comparisonPoints.map((point, index) => (
                <div key={index} className="contents">
                  <div className="text-[#F0F0F0]/70 font-machina text-sm md:text-[20px] leading-tight md:leading-[19px] py-3 md:py-4">
                    {point}
                  </div>
                  <div className="text-center py-3 md:py-4">
                    <Check className="h-5 w-5 md:h-6 md:w-6 text-[#B2FFAC] mx-auto" />
                  </div>
                  <div className="text-center py-3 md:py-4">
                    <X className="h-5 w-5 md:h-6 md:w-6 text-[#FF5050] mx-auto" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComparisonSection;
