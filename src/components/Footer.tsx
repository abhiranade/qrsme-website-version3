import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, QrCode } from 'lucide-react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Final CTA Section */}
      <section className="relative py-20 bg-gradient-bg border-t border-electric-blue/20">
        <div className="absolute inset-0 qr-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
            Ready to Transform Your{' '}
            <span className="ai-text-gradient">Business?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join QRS-Me&apos;s intelligent QR solutions to create meaningful connections with your customers.
          </p>
          <Button 
            variant="ai" 
            size="xl"
            className="pulse-cta group"
          >
            <span className="flex items-center gap-3">
              Get Started Today
              <QrCode className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-darker-navy border-t border-electric-blue/10">
        <div className="absolute inset-0 circuit-board-bg opacity-20" />
        
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 border-2 border-electric-blue rounded-lg bg-electric-blue/10 flex items-center justify-center footer-logo">
                  <div className="w-8 h-8 grid grid-cols-3 gap-0.5">
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
                </div>
              </div>
              <div className="text-xl font-bold">
                <span className="text-foreground">QRS</span>
                <span className="text-electric-blue">-</span>
                <span className="ai-text-gradient">Me</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex justify-center space-x-8">
              <a 
                href="/privacy" 
                className="text-muted-foreground hover:text-electric-blue transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-muted-foreground hover:text-electric-blue transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>

            {/* Copyright */}
            <div className="text-right">
              <p className="text-sm text-muted-foreground">
                © 2025 QRS-Me. All rights reserved.
              </p>
            </div>
          </div>

          {/* Bottom section with additional info */}
          <div className="mt-8 pt-8 border-t border-electric-blue/10 text-center">
            <p className="text-xs text-muted-foreground">
              Powered by AI • Secured by Advanced Encryption • Built for the Future
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 text-white rocket-icon" />
      </button>
    </>
  );
};

export default Footer;