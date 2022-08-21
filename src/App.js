import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Hero />

      {/* Main  */}
      <div className='container'>
        <About />
        <Projects />
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
