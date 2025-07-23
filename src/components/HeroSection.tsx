import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Transform Static QR Codes into Intelligent Business Solutions';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Particle system
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 6,
  }));

  // Floating shapes
  const shapes = [
    { type: 'triangle', size: 40, x: 10, y: 20 },
    { type: 'circle', size: 30, x: 85, y: 15 },
    { type: 'square', size: 35, x: 15, y: 70 },
    { type: 'hexagon', size: 45, x: 80, y: 75 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-bg">
      {/* Animated background patterns */}
      <div className="absolute inset-0 qr-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Particle system */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="floating-shape absolute opacity-20"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
        >
          {shape.type === 'triangle' && (
            <div 
              className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-electric-blue"
              style={{ borderBottomWidth: `${shape.size}px`, borderLeftWidth: `${shape.size * 0.6}px`, borderRightWidth: `${shape.size * 0.6}px` }}
            />
          )}
          {shape.type === 'circle' && (
            <div className="w-full h-full rounded-full border-2 border-cyan-glow" />
          )}
          {shape.type === 'square' && (
            <div className="w-full h-full border-2 border-purple-accent transform rotate-45" />
          )}
          {shape.type === 'hexagon' && (
            <div className="w-full h-full bg-electric-blue/20 transform rotate-30 clip-path-hexagon" />
          )}
        </div>
      ))}

      {/* QR Code network pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--electric-blue))" />
              <stop offset="100%" stopColor="hsl(var(--cyan-glow))" />
            </linearGradient>
          </defs>
          
          {/* Animated connection lines */}
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              opacity="0.6"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
          
          {/* Network nodes */}
          {[...Array(15)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r="3"
              fill="hsl(var(--electric-blue))"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main headline with typewriter effect */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="typewriter inline-block">
            {typedText}
            {typedText.includes('Intelligent') && (
              <span className="holographic font-extrabold">Intelligent</span>
            )}
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Experience the power of{' '}
          <span className="ai-text-gradient font-semibold">QRS-Me's revolutionary AI technology</span>{' '}
          that turns ordinary QR codes into dynamic, personalized interactions that captivate users and drive unprecedented engagement.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="ai" 
            size="xl"
            className="relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore Our Solutions
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-glow to-purple-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>

          <Button 
            variant="ai-outline" 
            size="xl"
            className="group"
          >
            <span className="flex items-center gap-3">
              Watch Demo
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707a1 1 0 00.707.293H15" />
              </svg>
            </span>
          </Button>
        </div>

        {/* Stats or indicators */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-16 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
            <span>AI-Powered Intelligence</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-glow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <span>Real-time Analytics</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <span>Seamless Integration</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;