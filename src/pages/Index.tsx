import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DigitalSmartCards from '@/components/DigitalSmartCards';
import CompanySection from '@/components/CompanySection';
import ProductShowcase from '@/components/ProductShowcase';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DigitalSmartCards />
      <CompanySection />
      <ProductShowcase />
    </div>
  );
};

export default Index;
