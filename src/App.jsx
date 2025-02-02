import Header from './components/Header';
import Bio from './components/Bio';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black">
      <Header />
      <Bio />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
