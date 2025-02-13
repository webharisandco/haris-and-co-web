import './App.css';
import AppRouter from './routes/Router';
import('./Font.css');
import('./Font/helvetica-neue-55.css')

function App() {
  const { pathname } = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
