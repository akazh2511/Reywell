import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Contact from "./component/Contact/Contact";
import Careers from "./component/Careers/Careers";
import Products from "./component/Products/Products";
import About from "./component/About/About";
import Services from "./component/Services/Services";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
