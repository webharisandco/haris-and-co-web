import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Layout from '@/layout/Layout';
import UIWebDubai from '@/pages/landing-pages/dubai/UIWeb';
import UIWebSharjah from '@/pages/landing-pages/sharjah/UIWeb';
import UIWebAbudhabi from '@/pages/landing-pages/abudhabi/UIWeb';
import UIPerformanceDubai from '@/pages/landing-pages/dubai/UIPerformance';
import UIPerformanceSharjah from '@/pages/landing-pages/sharjah/UIPerformance';
import UIPerformanceAbudhabi from '@/pages/landing-pages/abudhabi/UIPerformance';
import UIPerformanceKerala from '@/pages/landing-pages/kerala/UIPerformance';
import Services from '@/pages/serivices';
import ServiceMarketing from '@/pages/serivices/types/creative';
import Works from '@/pages/works';
import WorkBranding from '@/pages/works/types/branding';
import Contact from '@/pages/contact';
import Careers from '@/pages/careers';
import About from '@/pages/about';
import Blog from '@/pages/blog';
import Awards from '@/pages/awards';
import BlogDetails from '@/pages/blog/blogDetails';
import Clients from '@/pages/clients';



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="ae/services">
          <Route path="web-development-company-in-dubai" element={<UIWebDubai />} />
          <Route path="web-development-company-in-sharjah" element={<UIWebSharjah />} />
          <Route path="web-development-company-in-abudhabi" element={<UIWebAbudhabi />} />
          <Route path="performance-marketing-agency-in-dubai" element={<UIPerformanceDubai />} />
          <Route path="performance-marketing-agency-in-abudhabi" element={<UIPerformanceAbudhabi />} />
          <Route path="performance-marketing-agency-in-sharjah" element={<UIPerformanceSharjah />} />
        </Route>
        <Route path='services/performance-marketing-agency-in-kerala' element={<UIPerformanceKerala />} />
        <Route element={<Layout />}>
          <Route path='about' element={<About />} />
          <Route path='awards' element={<Awards />} />
          <Route path='blogs' element={<Blog />} />
          <Route path='blogs/:id' element={<BlogDetails />} />
          <Route path='contact' element={<Contact />} />
          <Route path='career' element={<Careers />} />
          <Route path='services' element={<Services />} />
          <Route path='services'>
            <Route path='branding' element={<ServiceMarketing />} />
            <Route path='web-development' element={<ServiceMarketing />} />
            <Route path='creative' element={<ServiceMarketing />} />
            <Route path='digital' element={<ServiceMarketing />} />
            <Route path='performance' element={<ServiceMarketing />} />
            <Route path='production' element={<ServiceMarketing />} />
            <Route path='seo' element={<ServiceMarketing />} />
            <Route path='social-media' element={<ServiceMarketing />} />
            <Route path='influencer-marketing' element={<ServiceMarketing />} />
          </Route>
          {/* <Route path='marketing' element={<Marketing />} /> */}
          <Route path='works' element={<Works />} />
          <Route path='works'>
            <Route path='all' element={<WorkBranding />} />
            <Route path='branding' element={<WorkBranding />} />
            <Route path='web-development' element={<WorkBranding />} />
            <Route path='creative' element={<WorkBranding />} />
            <Route path='digital' element={<WorkBranding />} />
            <Route path='performance' element={<WorkBranding />} />
            <Route path='production' element={<WorkBranding />} />
            <Route path='seo' element={<WorkBranding />} />
            <Route path='social-media' element={<WorkBranding />} />
          </Route>
          {/* <Route path='branding' element={<Branding />} /> */}
          <Route path='clients' element={<Clients />} />
        </Route>
        {/* <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes> 
  );
};

export default AppRouter;

