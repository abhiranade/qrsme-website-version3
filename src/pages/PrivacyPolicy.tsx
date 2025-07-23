import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-24 bg-gradient-bg">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-glow">
              Privacy <span className="ai-text-gradient">Policy</span>
            </h1>
            
            <div className="holographic-card rounded-xl p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Last updated: January 2025
              </p>
              
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-electric-blue">Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    QRS-Me collects information to provide better services to our users. We collect information in the following ways:
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li>• Information you give us when creating QR codes and smart cards</li>
                    <li>• Usage analytics to improve our AI-powered personalization</li>
                    <li>• Device information for optimal QR code scanning experiences</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-electric-blue">How We Use Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use the information we collect to provide, maintain, protect and improve our services, 
                    develop new ones, and protect QRS-Me and our users.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-electric-blue">AI and Data Processing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our AI systems process data to provide personalized QR code experiences. All AI processing 
                    is done with privacy-first principles, ensuring your data remains secure and anonymous where possible.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-electric-blue">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:privacy@qrsme.com" className="text-electric-blue hover:text-cyan-glow transition-colors">
                      privacy@qrsme.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;