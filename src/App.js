import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Cursor from './components/Cursor/Cursor';

function App() {
  return (
    <div className="App">
      <Cursor />
      <Home />
      <Projects />
      {/* <Skills /> */}
      <Footer />
    </div>
  );
}

export default App;
