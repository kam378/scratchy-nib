import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FeedBacks from "./pages/feedbacks";
import Gallery from "./pages/Gallery";
import Sitemap from "./pages/Sitemap";
import Footer from "./components/footer";


function App() {
  return (
    <Router>
      <Header />
      <div style={{ height: 'calc(40px + 75px + 14px)' }}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedbacks" element={<FeedBacks />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;