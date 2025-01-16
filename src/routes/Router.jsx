import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
import { UIWeb } from '../pages/landing-pages/dubai/UIWeb';
import { UIPerformance } from '../pages/landing-pages/dubai/UIPerformance';
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
            <Route path="web-development-company-in-dubai" element={<UIWeb />} />
            <Route path="performance-marketing-agency-in-dubai" element={<UIPerformance />} />
          </Route>
          {/* <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

