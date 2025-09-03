import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import VideoBanner from '../components/ui/HomePage/VideoBanner';
import { ClientsDataSection } from '../components/ui/HomePage/ClientsDataSection';
import FeatureSection from '../components/ui/HomePage/FeatureSection';
import BrandPartnerSection from '../components/ui/HomePage/BrandPartnerSection';
import OurWorks from '../components/ui/HomePage/OurWorks';
import ClientsSection from '../components/ui/HomePage/ClientsSection';
import AddressSection from '../components/ui/HomePage/AddressSection';
import { BlogSection } from '../components/ui/HomePage/BlogSection';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <VideoBanner />
      <ClientsDataSection />
      <FeatureSection />
      <BrandPartnerSection />
      <OurWorks />
      <ClientsSection />
      <AddressSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
