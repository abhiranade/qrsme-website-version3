import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  MessageCircle, 
  QrCode, 
  Zap, 
  Smartphone, 
  Globe,
  Send,
  ArrowRight
} from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Floating UI elements positions
  const uiElements = [
    { icon: Mail, x: 15, y: 20, size: 32, color: 'electric-blue' },
    { icon: MessageCircle, x: 85, y: 15, size: 28, color: 'cyan-glow' },
    { icon: Smartphone, x: 20, y: 80, size: 36, color: 'purple-accent' },
    { icon: Globe, x: 80, y: 85, size: 30, color: 'electric-blue' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-bg overflow-hidden"
      id="contact"
    >
      {/* Circuit board background */}
      <div className="absolute inset-0 circuit-board-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Floating UI elements */}
      {uiElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <div
            key={index}
            className={`floating-ui-element absolute communication-icon`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
          >
            <div className={`w-12 h-12 rounded-xl bg-${element.color}/20 border border-${element.color}/30 flex items-center justify-center backdrop-blur-sm`}>
              <Icon className={`w-6 h-6 text-${element.color}`} />
            </div>
          </div>
        );
      })}

      {/* Background particle system */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-electric-blue/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Neural network connections */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--electric-blue))" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(var(--cyan-glow))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--purple-accent))" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {/* Connection lines */}
          <path
            d="M 100 150 Q 600 100 1100 150"
            stroke="url(#contactGradient)"
            strokeWidth="2"
            fill="none"
            className="circuit-line"
            strokeDasharray="10,5"
          />
          <path
            d="M 100 450 Q 600 500 1100 450"
            stroke="url(#contactGradient)"
            strokeWidth="2"
            fill="none"
            className="circuit-line"
            style={{ animationDelay: '1s' }}
            strokeDasharray="10,5"
          />
          
          {/* Network nodes */}
          <circle cx="600" cy="300" r="8" fill="hsl(var(--electric-blue))" className="data-point" />
          <circle cx="300" cy="200" r="6" fill="hsl(var(--cyan-glow))" className="data-point" style={{ animationDelay: '1s' }} />
          <circle cx="900" cy="400" r="7" fill="hsl(var(--purple-accent))" className="data-point" style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            <span className="ai-text-gradient">Contact Us</span>
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Info */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="holographic-card rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-glow">
                Get In Touch
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ready to transform your customer engagement with intelligent QR solutions? 
                Contact us today!
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-electric-blue/10 border border-electric-blue/20 hover:bg-electric-blue/20 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-electric-blue/20 border border-electric-blue/30 flex items-center justify-center communication-icon">
                    <Mail className="w-6 h-6 text-electric-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">Send us a message at:</div>
                    <a 
                      href="mailto:contact@qrsme.com" 
                      className="text-lg font-semibold text-electric-blue hover:text-cyan-glow transition-colors"
                    >
                      contact@qrsme.com
                    </a>
                  </div>
                  <ArrowRight className="w-5 h-5 text-electric-blue group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-cyan-glow/10 border border-cyan-glow/20">
                  <div className="w-12 h-12 rounded-lg bg-cyan-glow/20 border border-cyan-glow/30 flex items-center justify-center communication-icon">
                    <MessageCircle className="w-6 h-6 text-cyan-glow" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">Response time:</div>
                    <div className="text-lg font-semibold text-cyan-glow">Within 2-4 hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-purple-accent/10 border border-purple-accent/20">
                  <div className="w-12 h-12 rounded-lg bg-purple-accent/20 border border-purple-accent/30 flex items-center justify-center communication-icon">
                    <Zap className="w-6 h-6 text-purple-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">Setup time:</div>
                    <div className="text-lg font-semibold text-purple-accent">24-48 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Holographic Divider */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-64 holographic-divider"></div>

          {/* Right Side: CTA Area */}
          <div 
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="holographic-card rounded-xl p-8 text-center">
              {/* Animated QR Code */}
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="contact-qr-scan w-full h-full bg-gradient-to-br from-electric-blue/20 to-cyan-glow/20 rounded-xl border border-electric-blue/30 flex items-center justify-center">
                  <div className="relative">
                    <QrCode className="w-24 h-24 text-electric-blue morphing-qr" />
                    
                    {/* QR code squares animation */}
                    <div className="absolute inset-0 grid grid-cols-8 gap-1 p-2">
                      {[...Array(64)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 h-1 rounded-sm ${
                            [0, 1, 6, 7, 8, 15, 48, 55, 56, 57, 62, 63].includes(i)
                              ? 'bg-electric-blue animate-pulse'
                              : Math.random() > 0.7
                              ? 'bg-cyan-glow/70 animate-pulse'
                              : 'bg-transparent'
                          }`}
                          style={{ animationDelay: `${i * 0.02}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Scanning effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/20 to-transparent h-full rounded-xl animate-pulse"></div>
              </div>

              <h3 className="text-3xl font-bold mb-4 text-glow">
                Transform Your{' '}
                <span className="ai-text-gradient">Networking</span>
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Get your AI-powered digital smart card in 24-48 hours and revolutionize 
                your networking game!
              </p>

              {/* CTA Button */}
              <Button 
                variant="ai" 
                size="xl"
                className="cta-enhanced group w-full"
              >
                <span className="flex items-center justify-center gap-3">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Join Now
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>

              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-4 mt-8 text-center">
                <div className="holographic-card rounded-lg p-3">
                  <div className="text-lg font-bold text-electric-blue">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
                <div className="holographic-card rounded-lg p-3">
                  <div className="text-lg font-bold text-cyan-glow">AI</div>
                  <div className="text-xs text-muted-foreground">Powered</div>
                </div>
                <div className="holographic-card rounded-lg p-3">
                  <div className="text-lg font-bold text-purple-accent">Fast</div>
                  <div className="text-xs text-muted-foreground">Setup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;