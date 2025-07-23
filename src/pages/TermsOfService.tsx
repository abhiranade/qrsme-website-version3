import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-24 bg-gradient-bg">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-glow">
              Terms of <span className="ai-text-gradient">Service</span>
            </h1>
            
            <div className="holographic-card rounded-xl p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Last updated: January 2025
              </p>
              
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-electric-blue">Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using QRS-Me services, you accept and agree to be bound by the terms 
                    and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-electric-blue">Use License</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Permission is granted to temporarily download one copy of QRS-Me services for personal, 
                    non-commercial transitory viewing only.
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li>• This is the grant of a license, not a transfer of title</li>
                    <li>• You may not modify or copy the materials</li>
                    <li>• You may not use the materials for commercial purposes</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-electric-blue">AI Service Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our AI-powered features are provided "as is" and we make no warranties regarding 
                    the accuracy or reliability of AI-generated content. Users are responsible for 
                    reviewing and validating all AI-generated materials.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-electric-blue">Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall QRS-Me or its suppliers be liable for any damages arising out of 
                    the use or inability to use the materials on QRS-Me&apos;s services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-electric-blue">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions regarding these terms, please contact us at{' '}
                    <a href="mailto:legal@qrsme.com" className="text-electric-blue hover:text-cyan-glow transition-colors">
                      legal@qrsme.com
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

export default TermsOfService;