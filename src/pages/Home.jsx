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
import GenAiSection from '../components/ui/HomePage/GenAiSection';
import TimeSection from '../components/ui/HomePage/TimeSection'
import ChatbotAi from'../components/ui/HomePage/ChatbotAi'
import AwardsBanner from '../components/ui/HomePage/AwardPage';


export default function Home() {
  return (
    <div>
      <Header />
      <VideoBanner />
      <ClientsDataSection />
      <FeatureSection />
      <BrandPartnerSection />
      <OurWorks />
      <AwardsBanner/>
      <GenAiSection />
      <ClientsSection />
      <AddressSection />
      <BlogSection />
      <TimeSection/>
      <ChatbotAi/>
      <Footer />
    </div>
  );
}
