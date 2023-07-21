import "./App.css";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
