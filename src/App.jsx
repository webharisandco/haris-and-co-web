import {  useEffect } from "react";
import './App.css';
import AppRouter from './routes/Router';
import ScrollToTop from './components/layout/ScrollTop';
import './Font.css';
import './Font/helvetica-neue-55.css';
  import { useLocation } from 'react-router-dom';
import { sendEvent } from "./utils/data/aixel";

function App() {

// <!-- aixel script starts -->

const location = useLocation();
useEffect(() => {
  sendEvent("page_view",{});
	// console.log('Location changed', location);
}, [location]);

// <!-- aixel script End -->

  return (
    <div className="App ">
      <ScrollToTop />
      <AppRouter />
      <div className="container">
      </div>
    </div>
  );
}

export default App;
