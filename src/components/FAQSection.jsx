import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#BBBBBB]/10">
      <button
        className="w-full py-6 flex items-center justify-between text-left group transition-colors duration-300 hover:bg-white/[0.02] rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white font-raleway font-medium text-lg group-hover:text-yellow-400 transition-colors duration-300">
          {question}
        </span>
        <div
          className="w-[45px] h-[45px] bg-white/10 rounded-full flex items-center justify-center
          transition-all duration-300 group-hover:bg-yellow-400/20"
        >
          <span
            className={`text-white text-2xl transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            {isOpen ? '−' : '+'}
          </span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-6 text-[#BAB8B8] font-raleway text-[15px] leading-[18px]">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: 'Do I get rewarded in tokens or ETH when I refer buyers?',
      answer:
        'You receive your rewards in ETH instantly once someone you refer makes a transaction',
    },
    {
      question: 'How do I connect my wallet?',
      answer:
        'Click on the "Connect Wallet" button in the top right corner and select your preferred wallet provider',
    },
    {
      question: 'What chains are supported?',
      answer:
        'We support multiple chains including Ethereum, Binance Smart Chain, and more',
    },
  ];

  return (
    <section className="py-20 bg-[#071624]">
      <div className="max-w-[1343px] mx-auto px-6">
        <div
          className="bg-white/[0.02] rounded-[10px] p-8 max-w-[997px] mx-auto
          hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-shadow duration-300"
        >
          <h2 className="text-[35px] font-machina font-extrabold leading-[34px] text-yellow-400 text-center mb-8">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
