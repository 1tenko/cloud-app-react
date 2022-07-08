import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Platforms from "./components/platforms/Platforms";
import Pricing from "./components/Pricing";
import Support from "./components/Support";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Support />
      <Platforms />
      <Pricing />
    </>
  );
}

export default App;
