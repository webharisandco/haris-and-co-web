import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
import UIWebDubai from '../pages/landing-pages/dubai/UIWeb';
import UIWebSharjah from '../pages/landing-pages/sharjah/UIWeb';
import UIWebAbudhabi from '../pages/landing-pages/abudhabi/UIWeb';
import UIPerformanceDubai from '../pages/landing-pages/dubai/UIPerformance';
import UIPerformanceSharjah from '../pages/landing-pages/sharjah/UIPerformance';
import UIPerformanceAbudhabi from '../pages/landing-pages/abudhabi/UIPerformance';
import UIPerformanceKerala from '../pages/landing-pages/kerala/UIPerformance';
import Services from '../pages/serivices';
import Works from '../pages/works';
import Clients from '../pages/clients';
import Branding from '../pages/branding';
import Contact from '../pages/contact';
import Careers from '../pages/careers';
import About from '../pages/about';
import Blog from '../pages/blog';
import Awards from '../pages/awards';
import BlogDetails from '../pages/blog/blogDetails';

// import About from '@/pages/About';
// import Contact from '@/pages/Contact';
// import NotFound from '@/pages/NotFound';

const AppRouter = () => {
  return (
    <Router>
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
            <Route path='careers' element={<Careers />} />
            <Route path='services' element={<Services />} />
            <Route path='works' element={<Works />} />
            <Route path='clients' element={<Clients />} />
            <Route path='branding' element={<Branding />} />
          </Route>
          {/* <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

