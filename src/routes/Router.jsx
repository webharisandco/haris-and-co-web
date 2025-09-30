import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Layout from "@/layout/Layout";
import UIWebDubai from "@/pages/landing-pages/dubai/UIWeb";
import UIWebSharjah from "@/pages/landing-pages/sharjah/UIWeb";
import UIWebAbudhabi from "@/pages/landing-pages/abudhabi/UIWeb";
import UIPerformanceDubai from "@/pages/landing-pages/dubai/UIPerformance";
import UIPerformanceSharjah from "@/pages/landing-pages/sharjah/UIPerformance";
import UIPerformanceAbudhabi from "@/pages/landing-pages/abudhabi/UIPerformance";
import UIPerformanceKerala from "@/pages/landing-pages/kerala/UIPerformance";
import MarketingKerala from "../pages/landing-pages/marketing/kerala";
import MarketingDubai from "../pages/landing-pages/marketing/dubai";
import MarketingSharjah from "../pages/landing-pages/marketing/sharjah";
import MarketingAbudabi from "../pages/landing-pages/marketing/abudhabi";

import SEOCompanyKerala from "../pages/landing-pages/seo/kerala";
import SEOCompanyDubai from "../pages/landing-pages/seo/dubai";
import SEOCompanySharjah from "../pages/landing-pages/seo/sharjah";
import SEOCompanyAbudhabi from "../pages/landing-pages/seo/abudhabi";

import Services from "@/pages/serivices";
import ServiceMarketing from "@/pages/serivices/types/creative";
import Works from "@/pages/works";
import WorkBranding from "@/pages/works/types/branding";
import Contact from "@/pages/contact";
import Careers from "@/pages/careers";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import Awards from "@/pages/awards";
import BlogDetails from "@/pages/blog/blogDetails";

import DigitalMarketing from "../pages/blog/blogDetails/digitamMarketingHealth";
import AiRole from "../pages/blog/blogDetails/aiRole";
import The7cs from "../pages/blog/blogDetails/the7cs";
import Roi from "../pages/blog/blogDetails/roi";
import SmallBusiness from "../pages/blog/blogDetails/smallBusiness";
import RightAgency from "../pages/blog/blogDetails/rightAgency";
import UltimateGuide from "../pages/blog/blogDetails/ultimateGuide";
import AwardWinning from "../pages/blog/blogDetails/awardWinning";
import DifferenceFromTraditional from "../pages/blog/blogDetails/difference";

import Clients from "@/pages/clients";
import PrivacyPolicy from "../pages/privacyAnd/PrivacyPolicy";
import TermsAndConditions from "../pages/privacyAnd/TermsConditions";

const AppRouter = () => {
  const routes = [
    "branding",
    "web-development",
    "creative",
    "digital",
    "performance",
    "shama-perfumes",
    "med7online",
    "algate",
    "amend-dental",
    "riso-detergents",
    "mall-of-mukkam",
    "organic-netra",
    "production",
    "social-media",
  ];
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="ae/services">
          <Route
            path="web-development-company-in-dubai"
            element={<UIWebDubai />}
          />
          <Route
            path="web-development-company-in-sharjah"
            element={<UIWebSharjah />}
          />
          <Route
            path="web-development-company-in-abudhabi"
            element={<UIWebAbudhabi />}
          />
          <Route
            path="performance-marketing-agency-in-dubai"
            element={<UIPerformanceDubai />}
          />
          <Route
            path="performance-marketing-agency-in-abudhabi"
            element={<UIPerformanceAbudhabi />}
          />
          <Route
            path="performance-marketing-agency-in-sharjah"
            element={<UIPerformanceSharjah />}
          />
        </Route>
        <Route
          path="services/performance-marketing-agency-in-kerala"
          element={<UIPerformanceKerala />}
        />
        <Route
          path="digital-marketing-agency-in-kerala"
          element={<MarketingKerala />}
        />
        <Route
          path="ae/digital-marketing-agency-in-dubai"
          element={<MarketingDubai />}
        />
        <Route
          path="ae/digital-marketing-agency-in-sharjah"
          element={<MarketingSharjah />}
        />
        <Route
          path="ae/digital-marketing-agency-in-abudhabi"
          element={<MarketingAbudabi />}
        />
        <Route
          path="services/seo-company-in-kerala"
          element={<SEOCompanyKerala />}
        />
        <Route
          path="ae/services/seo-company-in-dubai"
          element={<SEOCompanyDubai />}
        />
        <Route
          path="ae/services/seo-company-in-sharjah"
          element={<SEOCompanySharjah />}
        />
        <Route
          path="ae/services/seo-company-in-abudhabi"
          element={<SEOCompanyAbudhabi />}
        />
        <Route path="Privacy" element={<PrivacyPolicy />} />
          <Route path="TermsAndConditions" element={<TermsAndConditions />} />

        <Route element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="awards" element={<Awards />} />
          <Route path="blogs" element={<Blog />} />
          {/* <Route path="blogs/:id" element={<BlogDetails />} /> */}
          <Route
            path="blogs/digital-marketing-health"
            element={<DigitalMarketing />}
          />
          <Route path="blogs/ai-role" element={<AiRole />} />
          <Route path="blogs/the7cs" element={<The7cs />} />
          <Route path="blogs/roi" element={<Roi />} />
          <Route path="blogs/small-business" element={<SmallBusiness />} />
          <Route path="blogs/right-agency" element={<RightAgency />} />
          <Route path="blogs/ultimate-guide" element={<UltimateGuide />} />
          <Route path="blogs/award-winning" element={<AwardWinning />} />
          <Route
            path="blogs/digital-marketing-difference"
            element={<DifferenceFromTraditional />}
          />
          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Careers />} />
          <Route path="services" element={<Services />} />
          <Route path="services">
            <Route path="branding" element={<ServiceMarketing />} />
            <Route path="web-development" element={<ServiceMarketing />} />
            <Route path="creative" element={<ServiceMarketing />} />
            <Route path="digital" element={<ServiceMarketing />} />
            <Route path="performance" element={<ServiceMarketing />} />
            <Route path="production" element={<ServiceMarketing />} />
            <Route path="seo" element={<ServiceMarketing />} />
            <Route path="social-media" element={<ServiceMarketing />} />
            <Route path="influencer-marketing" element={<ServiceMarketing />} />
            
          </Route>
          {/* <Route path='marketing' element={<Marketing />} /> */}
          <Route path="works" element={<Works />} />
          
          
          <Route path="works">
            {routes.map((path) => (
              <Route key={path} path={path} element={<WorkBranding />} />
            ))}
          </Route>
          {/* <Route path='branding' element={<Branding />} /> */}
          <Route path="clients" element={<Clients />} />
        </Route>
        {/* <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
