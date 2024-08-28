import Header from './components/Header';
import Bio from './components/Bio';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
    return (
      <div style={{ backgroundColor: 'black' }}>
        <Header />
        <Bio />
        <Education />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
}

export default App
