import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavBarIcon, NavBarImageIcon } from '@/icons';
import { Menu } from 'lucide-react';

const NavBar = () => {
  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About Us', href: '#' },
    { name: 'Roadmap', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 py-12 px-20">
      <div className="max-w-screen mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <NavBarImageIcon className="w-[45px] h-[45px] md:w-[75px] md:h-[73px]" />
          <NavBarIcon className="w-[66px] md:w-[106px] h-auto ml-2 md:ml-3" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-raleway font-extrabold text-[18px] transition-colors
                ${
                  link.active
                    ? 'text-yellow-400'
                    : 'text-white hover:text-yellow-400'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="absolute right-6 lg:relative lg:block ">
          <Button
            className="h-[47px] px-6 bg-gradient-to-r from-[#E4B40D] to-[rgba(255,230,143,0.84)] 
              text-black font-raleway font-extrabold hover:opacity-90 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95
              hover:shadow-[0_0_20px_rgba(228,180,13,0.3)]"
          >
            Connect Wallet
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center lg:hidden">
          <div className="absolute left-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-[#071624]/95 border-[#E4B40D]/20"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`font-raleway font-extrabold text-[18px] transition-colors
                        ${
                          link.active
                            ? 'text-[#EDD955]'
                            : 'text-white hover:text-[#EDD955]/80'
                        }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
