import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  CreditCard, 
  QrCode, 
  Users, 
  Zap, 
  ChefHat, 
  BarChart3, 
  Target, 
  Settings,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ProductShowcase = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      title: 'Digital Smart Cards',
      subtitle: 'AI-Powered Business Networking',
      description: 'Transform traditional business cards into intelligent, personalized networking tools that adapt to every interaction.',
      features: [
        'Personalized Smart Cards',
        'AI Connect',
        'Two-Way Contact Sharing',
        'Seamless Integration'
      ],
      gradient: 'glow-blue',
      icon: CreditCard,
      mockupType: 'card',
      stats: { connections: '2.5K+', success: '98%' }
    },
    {
      id: 2,
      title: 'Smart Dining Platform',
      subtitle: 'Restaurant Intelligence System',
      description: 'Revolutionize dining experiences with AI-driven menu personalization and comprehensive restaurant analytics.',
      features: [
        'Restaurant Intelligence Dashboard',
        'Dynamic QR Menu',
        'Dietary Personalization',
        'POS Integration'
      ],
      gradient: 'glow-purple',
      icon: ChefHat,
      mockupType: 'menu',
      stats: { restaurants: '500+', orders: '1.2M+' }
    },
    {
      id: 3,
      title: 'Contextual Advertising Platform',
      subtitle: 'Intelligent Ad Personalization',
      description: 'Deliver hyper-targeted advertising experiences that create value for both businesses and consumers through AI-driven insights.',
      features: [
        'Dynamic Ad Personalization',
        'Two-Way Value Exchange',
        'Real-Time Analytics'
      ],
      gradient: 'glow-pink',
      icon: Target,
      mockupType: 'dashboard',
      stats: { campaigns: '10K+', engagement: '340%' }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleCardFlip = (cardId: number) => {
    setFlippedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  const renderMockup = (type: string, product: any) => {
    const baseClasses = "product-mockup relative w-full h-48 rounded-lg overflow-hidden";
    
    switch (type) {
      case 'card':
        return (
          <div className={`${baseClasses} holographic-screen`}>
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-cyan-glow/20 p-4">
              <div className="bg-darker-navy/80 rounded-lg p-4 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-electric-blue/30 rounded border border-electric-blue">
                    <QrCode className="w-6 h-6 text-electric-blue m-1 morphing-qr" />
                  </div>
                  <span className="text-electric-blue font-semibold">QRS-Me</span>
                </div>
                <div className="space-y-1">
                  <div className="h-2 bg-muted rounded w-3/4"></div>
                  <div className="h-2 bg-muted rounded w-1/2"></div>
                  <div className="h-2 bg-muted rounded w-2/3"></div>
                </div>
                <div className="text-xs text-cyan-glow">Smart • Personalized • AI-Powered</div>
              </div>
            </div>
          </div>
        );
      
      case 'menu':
        return (
          <div className={`${baseClasses} holographic-screen`}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-accent/20 to-electric-blue/20 p-4">
              <div className="bg-darker-navy/80 rounded-lg p-3 h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-purple-accent font-semibold text-sm">Smart Menu</span>
                  <div className="w-6 h-6 border border-purple-accent rounded grid grid-cols-2 gap-0.5 p-0.5">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="bg-purple-accent rounded-sm opacity-70"></div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="h-1.5 bg-muted rounded w-16"></div>
                        <div className="h-1 bg-muted/60 rounded w-12"></div>
                      </div>
                      <div className="h-1.5 bg-purple-accent/70 rounded w-8"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'dashboard':
        return (
          <div className={`${baseClasses} holographic-screen`}>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-accent/20 p-4">
              <div className="bg-darker-navy/80 rounded-lg p-3 h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-pink-400 font-semibold text-sm">Ad Analytics</span>
                  <BarChart3 className="w-4 h-4 text-pink-400" />
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-muted/20 rounded p-1">
                      <div className="h-1 bg-pink-400/70 rounded mb-1" style={{ width: `${60 + i * 10}%` }}></div>
                      <div className="h-0.5 bg-muted/40 rounded w-full"></div>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-pink-400">Real-time targeting active</div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-bg overflow-hidden"
      id="product-line"
    >
      {/* AI Grid Background */}
      <div className="absolute inset-0 ai-grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Neural network connections */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="productGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--electric-blue))" />
              <stop offset="50%" stopColor="hsl(var(--purple-accent))" />
              <stop offset="100%" stopColor="hsl(320 100% 60%)" />
            </linearGradient>
          </defs>
          
          {/* Connecting lines between products */}
          <path
            d="M 400 300 Q 600 100 800 300"
            stroke="url(#productGradient)"
            strokeWidth="1"
            fill="none"
            className="circuit-line"
            opacity="0.6"
          />
          <path
            d="M 400 500 Q 600 700 800 500"
            stroke="url(#productGradient)"
            strokeWidth="1"
            fill="none"
            className="circuit-line"
            style={{ animationDelay: '1s' }}
            opacity="0.6"
          />
          <path
            d="M 200 400 Q 600 400 1000 400"
            stroke="url(#productGradient)"
            strokeWidth="1"
            fill="none"
            className="circuit-line"
            style={{ animationDelay: '2s' }}
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Our{' '}
            <span className="ai-text-gradient">Product Line</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our suite of AI-powered solutions that transform traditional interactions 
            into intelligent, personalized experiences.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isVisible = visibleCards.includes(index);
            const isFlipped = flippedCards.includes(product.id);
            
            return (
              <div
                key={product.id}
                data-index={index}
                className={`product-card product-card-3d h-96 ${
                  isFlipped ? 'card-flipped' : ''
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: `${index * 0.2}s`
                }}
              >
                <div className="card-inner">
                  {/* Front of card */}
                  <div className={`card-front ${product.gradient} p-6 backdrop-blur-lg`}>
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <Icon className="w-8 h-8 text-white animate-pulse" />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCardFlip(product.id)}
                          className="text-white hover:bg-white/20"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Product mockup */}
                      <div className="mb-4">
                        {renderMockup(product.mockupType, product)}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {product.title}
                        </h3>
                        <p className="text-sm text-white/80 mb-4">
                          {product.subtitle}
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(product.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-lg font-bold text-white">{value}</div>
                              <div className="text-xs text-white/70 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className={`card-back ${product.gradient} p-6 backdrop-blur-lg`}>
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-white">Features</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCardFlip(product.id)}
                          className="text-white hover:bg-white/20"
                        >
                          <ArrowRight className="w-4 h-4 rotate-180" />
                        </Button>
                      </div>

                      <p className="text-sm text-white/80 mb-6">
                        {product.description}
                      </p>

                      <div className="space-y-3 flex-1">
                        {product.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className={`feature-reveal-item ${
                              isFlipped ? 'revealed' : ''
                            } flex items-center gap-3`}
                            style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                          >
                            <CheckCircle className="w-4 h-4 text-white feature-check" />
                            <span className="text-sm text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        variant="ai-outline"
                        className="mt-4 w-full text-white border-white hover:bg-white hover:text-black"
                      >
                        Learn More
                      </Button>
                    </div>
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
              Explore All Products
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;