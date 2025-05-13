import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx'; // ✅ Add this line

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 space-y-20">
        <Hero />
        <Services />
        <Projects /> {/* ✅ Render Projects section */}
      </main>
    </>
  );
}

export default App;
