import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home1";
import About from "./pages/Aboutus";
import Projects from "./pages/Projects1";
import Contact from "./pages/Contact1";

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;