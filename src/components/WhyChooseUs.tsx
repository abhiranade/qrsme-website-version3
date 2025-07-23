import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, BarChart3, Zap, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeComparison, setActiveComparison] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const advantages = [
    {
      id: 1,
      title: 'AI-Powered Personalization',
      icon: Brain,
      iconClass: 'brain-icon',
      description: 'While traditional QR codes deliver the same content to everyone, QRS-Me adjusts shared content based on scan context, time, location, and user profile for personalized experiences.',
      gradient: 'from-electric-blue/20 to-cyan-glow/20',
      borderColor: 'border-electric-blue/30',
      glowColor: 'shadow-glow-electric',
      before: {
        title: 'Traditional QR Codes',
        features: [
          { text: 'Same content for everyone', icon: XCircle, color: 'text-red-400' },
          { text: 'No personalization', icon: XCircle, color: 'text-red-400' },
          { text: 'Static responses', icon: XCircle, color: 'text-red-400' }
        ]
      },
      after: {
        title: 'QRS-Me AI Solution',
        features: [
          { text: 'Context-aware content', icon: CheckCircle, color: 'text-electric-blue' },
          { text: 'User profile adaptation', icon: CheckCircle, color: 'text-electric-blue' },
          { text: 'Dynamic personalization', icon: CheckCircle, color: 'text-electric-blue' }
        ]
      }
    },
    {
      id: 2,
      title: 'Comprehensive Analytics',
      icon: BarChart3,
      iconClass: 'analytics-icon',
      description: 'Gain actionable insights with our advanced Scan Analytics platform that helps you understand user behavior and optimize your content for maximum engagement.',
      gradient: 'from-purple-accent/20 to-electric-blue/20',
      borderColor: 'border-purple-accent/30',
      glowColor: 'shadow-glow-cyan',
      before: {
        title: 'Basic QR Tracking',
        features: [
          { text: 'Simple scan counts', icon: XCircle, color: 'text-red-400' },
          { text: 'No user insights', icon: XCircle, color: 'text-red-400' },
          { text: 'Limited reporting', icon: XCircle, color: 'text-red-400' }
        ]
      },
      after: {
        title: 'QRS-Me Analytics',
        features: [
          { text: 'Real-time behavior tracking', icon: CheckCircle, color: 'text-purple-accent' },
          { text: 'User journey mapping', icon: CheckCircle, color: 'text-purple-accent' },
          { text: 'Actionable insights', icon: CheckCircle, color: 'text-purple-accent' }
        ]
      }
    },
    {
      id: 3,
      title: 'Quick Implementation',
      icon: Zap,
      iconClass: 'lightning-icon',
      description: 'Get up and running in under a minute with our AI-guided templates that make setup and customization a breeze, saving you time and resources.',
      gradient: 'from-cyan-glow/20 to-purple-accent/20',
      borderColor: 'border-cyan-glow/30',
      glowColor: 'shadow-ai',
      before: {
        title: 'Traditional Setup',
        features: [
          { text: 'Complex configuration', icon: XCircle, color: 'text-red-400' },
          { text: 'Technical expertise required', icon: XCircle, color: 'text-red-400' },
          { text: 'Hours of setup time', icon: XCircle, color: 'text-red-400' }
        ]
      },
      after: {
        title: 'QRS-Me Setup',
        features: [
          { text: 'AI-guided templates', icon: CheckCircle, color: 'text-cyan-glow' },
          { text: 'No technical skills needed', icon: CheckCircle, color: 'text-cyan-glow' },
          { text: 'Under 60 seconds', icon: CheckCircle, color: 'text-cyan-glow' }
        ]
      }
    }
  ];

  // Floating data visualization points
  const dataVizPoints = [
    { x: 15, y: 25, size: 6, color: 'electric-blue', delay: 0 },
    { x: 85, y: 20, size: 8, color: 'cyan-glow', delay: 1 },
    { x: 20, y: 75, size: 7, color: 'purple-accent', delay: 2 },
    { x: 80, y: 80, size: 5, color: 'electric-blue', delay: 0.5 },
    { x: 50, y: 15, size: 9, color: 'cyan-glow', delay: 1.5 },
    { x: 10, y: 50, size: 6, color: 'purple-accent', delay: 2.5 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.advantage-card-wrapper');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const renderNeuralNetwork = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600">
      <defs>
        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--electric-blue))" stopOpacity="0.6" />
          <stop offset="50%" stopColor="hsl(var(--cyan-glow))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--purple-accent))" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      
      {/* Neural network connections */}
      <path
        d="M 200 150 Q 400 100 600 150"
        stroke="url(#neuralGradient)"
        strokeWidth="2"
        fill="none"
        className="circuit-line"
        strokeDasharray="5,5"
      />
      <path
        d="M 600 150 Q 800 100 1000 150"
        stroke="url(#neuralGradient)"
        strokeWidth="2"
        fill="none"
        className="circuit-line"
        style={{ animationDelay: '1s' }}
        strokeDasharray="5,5"
      />
      <path
        d="M 200 450 Q 400 500 600 450"
        stroke="url(#neuralGradient)"
        strokeWidth="2"
        fill="none"
        className="circuit-line"
        style={{ animationDelay: '2s' }}
        strokeDasharray="5,5"
      />
      <path
        d="M 600 450 Q 800 500 1000 450"
        stroke="url(#neuralGradient)"
        strokeWidth="2"
        fill="none"
        className="circuit-line"
        style={{ animationDelay: '0.5s' }}
        strokeDasharray="5,5"
      />
      
      {/* Data nodes */}
      {[200, 600, 1000].map((x, i) => (
        <g key={i}>
          <circle
            cx={x}
            cy={150}
            r="6"
            fill="hsl(var(--electric-blue))"
            className="data-point"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
          <circle
            cx={x}
            cy={450}
            r="6"
            fill="hsl(var(--cyan-glow))"
            className="data-point"
            style={{ animationDelay: `${i * 0.5 + 1}s` }}
          />
        </g>
      ))}
    </svg>
  );

  const renderDataStreams = () => (
    <div className="absolute inset-0 pointer-events-none">
      {/* Horizontal data streams */}
      <div 
        className="data-stream-line" 
        style={{ top: '30%', animationDelay: '0s' }}
      />
      <div 
        className="data-stream-line" 
        style={{ top: '70%', animationDelay: '2s' }}
      />
      
      {/* Vertical streams */}
      <div 
        className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-electric-blue to-transparent animate-pulse"
        style={{ left: '33%', animationDelay: '1s' }}
      />
      <div 
        className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-glow to-transparent animate-pulse"
        style={{ left: '66%', animationDelay: '3s' }}
      />
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-bg overflow-hidden"
      id="why-us"
    >
      {/* Circuit board background */}
      <div className="absolute inset-0 circuit-board-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Floating data visualization points */}
      {dataVizPoints.map((point, index) => (
        <div
          key={index}
          className={`floating-data-viz w-${point.size} h-${point.size} rounded-full bg-${point.color} opacity-60`}
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            animationDelay: `${point.delay}s`
          }}
        />
      ))}

      {/* Neural network and data streams */}
      {renderNeuralNetwork()}
      {renderDataStreams()}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Why Choose{' '}
            <span className="ai-text-gradient">QRS-Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the AI-powered advantages that set us apart from traditional QR code solutions.
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            const isVisible = visibleCards.includes(index);
            const isActive = activeComparison === advantage.id;
            
            return (
              <div
                key={advantage.id}
                data-index={index}
                className="advantage-card-wrapper"
              >
                <div
                  className={`advantage-card ${isVisible ? 'revealed' : ''} holographic-card rounded-xl p-6 h-full transition-all duration-500 cursor-pointer ${advantage.borderColor} ${isActive ? advantage.glowColor : ''}`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                  onClick={() => setActiveComparison(isActive ? null : advantage.id)}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${advantage.gradient} border ${advantage.borderColor} flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 text-white ${advantage.iconClass}`} />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-electric-blue"
                    >
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
                    </Button>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>

                    {/* Before/After Comparison */}
                    {isActive && (
                      <div className="mt-6 space-y-4 animate-in slide-in-from-top duration-500">
                        {/* Before */}
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                          <h4 className="font-semibold text-red-400 mb-3 text-sm">
                            {advantage.before.title}
                          </h4>
                          <div className="space-y-2">
                            {advantage.before.features.map((feature, featureIndex) => {
                              const FeatureIcon = feature.icon;
                              return (
                                <div
                                  key={featureIndex}
                                  className="flex items-center gap-2 text-sm"
                                >
                                  <FeatureIcon className={`w-4 h-4 ${feature.color}`} />
                                  <span className="text-muted-foreground">{feature.text}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* After */}
                        <div className={`bg-gradient-to-br ${advantage.gradient} border ${advantage.borderColor} rounded-lg p-4`}>
                          <h4 className="font-semibold text-white mb-3 text-sm">
                            {advantage.after.title}
                          </h4>
                          <div className="space-y-2">
                            {advantage.after.features.map((feature, featureIndex) => {
                              const FeatureIcon = feature.icon;
                              return (
                                <div
                                  key={featureIndex}
                                  className="flex items-center gap-2 text-sm"
                                >
                                  <FeatureIcon className={`w-4 h-4 ${feature.color}`} />
                                  <span className="text-white">{feature.text}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            variant="ai" 
            size="xl"
            className="pulse-cta group"
          >
            <span className="flex items-center gap-3">
              Experience the Difference
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;