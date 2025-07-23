import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-darker-navy/95 backdrop-blur-lg border-b border-electric-blue/20' 
          : 'bg-gradient-bg'
      }`}
    >
      {/* Animated QR pattern background */}
      <div className="absolute inset-0 qr-pattern opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-10 h-10 border-2 border-electric-blue rounded-lg bg-electric-blue/10 flex items-center justify-center">
                <div className="w-6 h-6 grid grid-cols-3 gap-0.5">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1 h-1 ${
                        [0, 2, 6, 8].includes(i) ? 'bg-electric-blue' : 'bg-cyan-glow'
                      } rounded-sm animate-pulse`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 border border-cyan-glow rounded-lg animate-pulse" />
              </div>
            </div>
            <div className="text-2xl font-bold">
              <span className="text-foreground">QRS</span>
              <span className="text-electric-blue">-</span>
              <span className="ai-text-gradient">Me</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a 
              href="#digital-cards" 
              className="text-foreground hover:text-electric-blue transition-colors duration-300 relative group"
            >
              Digital Smart Cards
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full" />
            </a>
            <a 
              href="#company" 
              className="text-foreground hover:text-electric-blue transition-colors duration-300 relative group"
            >
              Company
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full" />
            </a>
            <a 
              href="#product-line" 
              className="text-foreground hover:text-electric-blue transition-colors duration-300 relative group"
            >
              Product Line
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full" />
            </a>
            <a 
              href="#why-us" 
              className="text-foreground hover:text-electric-blue transition-colors duration-300 relative group"
            >
              Why Choose Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full" />
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-electric-blue transition-colors duration-300 relative group"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* CTA Button */}
          <Button 
            variant="ai" 
            size="lg"
            className="relative overflow-hidden"
          >
            <span className="relative z-10">Join Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-cyan-glow opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </Button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-foreground hover:text-electric-blue">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Scan line effect */}
      <div className="scan-line absolute bottom-0 left-0 right-0 h-0.5" />
    </header>
  );
};

export default Header;