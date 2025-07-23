import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Network, RefreshCw, BarChart3, Play, QrCode } from 'lucide-react';

const DigitalSmartCards = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Brain,
      title: "Instant Personalization",
      description: "Your smart card adapts to every meeting, showing relevant information based on context and audience.",
      color: "electric-blue"
    },
    {
      icon: Network,
      title: "AI-Powered Insights", 
      description: "Get real-time intelligence about new connections, mutual contacts, and best follow-up strategies.",
      color: "cyan-glow"
    },
    {
      icon: RefreshCw,
      title: "Two-Way Exchange",
      description: "Automatically capture contact details while sharing yours - no more typing or lost business cards.",
      color: "purple-accent"
    },
    {
      icon: BarChart3,
      title: "Track Your Network",
      description: "Monitor engagement, follow-up success rates, and grow your professional network strategically.",
      color: "electric-blue"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleFeatures(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const featureElements = document.querySelectorAll('.feature-item');
    featureElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-bg overflow-hidden"
      id="digital-cards"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 qr-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Neural network connections */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="hsl(var(--electric-blue))" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          
          {/* Animated neural connections */}
          {[...Array(6)].map((_, i) => (
            <line
              key={i}
              x1={200 + i * 150}
              y1={300}
              x2={200 + i * 150}
              y2={700}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              className="neural-connection"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
          
          {/* Horizontal connections */}
          {[...Array(4)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1={150}
              y1={350 + i * 100}
              x2={850}
              y2={350 + i * 100}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              className="neural-connection"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="glitch-text" data-text="Digital Smart Cards">
              Digital Smart Cards
            </span>
          </h2>
          <h3 className="text-2xl md:text-3xl mb-4 holographic font-semibold">
            Your Next Connection is Just One Scan Away
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Revolutionize your networking game using{' '}
            <span className="ai-text-gradient font-semibold">AI-powered smart cards</span>
          </p>
        </div>

        {/* Split layout: Video + Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Demo Side */}
          <div className="relative">
            {/* Video container with holographic border */}
            <div className="relative holographic-card rounded-2xl p-8 card-flip">
              <div className="aspect-video bg-darker-navy rounded-xl relative overflow-hidden qr-pulse">
                {/* Video placeholder with QR animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <QrCode className="w-24 h-24 text-electric-blue mx-auto animate-pulse" />
                      <div className="absolute inset-0 border-2 border-cyan-glow rounded-lg animate-ping opacity-20" />
                    </div>
                    <Button variant="ai-outline" size="lg" className="group">
                      <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Watch Demo
                    </Button>
                  </div>
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 border-2 border-electric-blue/30 rounded-xl" />
                <div className="absolute inset-0 border border-cyan-glow/20 rounded-xl animate-pulse" />
              </div>
            </div>

            {/* Holographic smart card mockup */}
            <div className="absolute -bottom-8 -right-8 w-32 h-20 holographic-card rounded-lg p-3 card-flip">
              <div className="text-xs space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
                  <span className="text-electric-blue font-semibold">QRS-Me</span>
                </div>
                <div className="space-y-0.5">
                  <div className="h-1 bg-muted rounded w-full" />
                  <div className="h-1 bg-muted rounded w-3/4" />
                  <div className="h-1 bg-muted rounded w-1/2" />
                </div>
                <div className="flex justify-end">
                  <div className="w-6 h-6 border border-electric-blue rounded grid grid-cols-3 gap-0.5 p-0.5">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-full h-full rounded-sm ${
                          [0, 2, 6, 8, 4].includes(i) ? 'bg-electric-blue' : 'bg-transparent'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Side */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isVisible = visibleFeatures.includes(index);
              
              return (
                <div
                  key={index}
                  data-index={index}
                  className={`feature-item feature-reveal ${isVisible ? 'revealed' : ''} card-flip`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="holographic-card rounded-xl p-6 group hover:shadow-glow-electric transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-${feature.color}/20 border border-${feature.color}/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 text-${feature.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2 group-hover:text-electric-blue transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Feature connection indicator */}
                    <div className="mt-4 flex justify-end">
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full bg-${feature.color} animate-pulse`}
                            style={{ animationDelay: `${i * 0.2}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                variant="ai" 
                size="xl"
                className="pulse-cta group w-full sm:w-auto"
              >
                <span className="flex items-center gap-3">
                  Get Your Smart Card
                  <QrCode className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "98%", label: "Connection Success Rate", color: "electric-blue" },
            { value: "5x", label: "Faster Networking", color: "cyan-glow" },
            { value: "24/7", label: "AI Analysis", color: "purple-accent" }
          ].map((stat, index) => (
            <div key={index} className="holographic-card rounded-lg p-6 card-flip">
              <div className={`text-3xl font-bold text-${stat.color} mb-2 holographic`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalSmartCards;