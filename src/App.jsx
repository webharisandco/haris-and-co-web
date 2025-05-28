import './App.css';
import AppRouter from './routes/Router';
import ScrollToTop from './components/layout/ScrollTop';
import('./Font.css');
import('./Font/helvetica-neue-55.css')

function App() {


  return (
    <div className="App">
      <ScrollToTop/>
      <AppRouter />
    </div>
  );
}

export default App;
