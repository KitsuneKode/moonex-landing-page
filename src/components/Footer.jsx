import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DiscordIcon, FooterIcon, TwitterIcon, TelegramIcon } from '@/icons';

const Footer = () => {
  return (
    <footer className="relative w-full h-[319px] bg-[#051422]">
      <div className="absolute lg:w-[155px] lg:h-[155px] lg:left-[112px] left-6 top-20 ">
        <FooterIcon className="w-[70%] h-[70%] lg:w-[155px] lg:h-[155px] " />
      </div>

      <div className="absolute lg:w-[403px] h-[81px]  top-[82px] text-center w-fit right-8 ">
        <h3 className="font-raleway font-extrabold lg:text-[30px] lg:leading-[20px] text-white text-[16px]">
          <span>Contact </span>
          <span className="text-yellow-400">Us</span>
        </h3>
      </div>

      <div className="absolute top-[120px]  lg:top-[137px] flex right-8 space-x-3 lg:right-36 lg:space-x-14 ">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 lg:w-8 lg:h-8 flex items-center justify-center text-white transition-colors duration-300 hover:bg-yellow-400 hover:scale-120 "
        >
          <TelegramIcon />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 lg:w-8 lg:h-8 flex items-center justify-center text-white transition-colors duration-300 hover:bg-yellow-400 hover:scale-120 "
        >
          <DiscordIcon />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 lg:w-8 lg:h-8 flex items-center justify-center text-white transition-colors duration-300 hover:bg-yellow-400 hover:scale-120"
        >
          <TwitterIcon />
        </Button>
      </div>

      <div className="absolute lg:w-[535px] h-auto   flex flex-col lg:flex-row left-[40%] lg:space-x-16 top-[82px] lg:left-[35%] justify-between">
        <a
          href="#"
          className="font-raleway font-extrabold lg:text-[20px] text-white hover:text-yellow-400 transition-colors duration-300"
        >
          About Us
        </a>
        <a
          href="#"
          className="font-raleway font-extrabold lg:text-[20px] text-white hover:text-yellow-400 transition-colors duration-300"
        >
          Roadmap
        </a>
        <a
          href="#"
          className="font-raleway font-extrabold lg:text-[20px] text-white hover:text-yellow-400 transition-colors duration-300"
        >
          FAQs
        </a>
        <a
          href="#"
          className="font-raleway font-extrabold lg:text-[20px] text-white hover:text-yellow-400 transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>

      <Separator className="absolute w-full h-[1px] bg-white/10 bottom-0" />
    </footer>
  );
};

export default Footer;
