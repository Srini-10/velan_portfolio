import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarAnimated from "./components/NavbarAnimated";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Services from "./components/Services";
import EduExp from "./components/EduExp";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import Loading from "./components/common/Loading";

const App = () => {
  return (
    <>
      <div className="">
        <Router>
          <div className="scroll-smooth cursor-default">
            <Loading />
            <Navbar />
            <NavbarAnimated />
            <Hero />
            <Services />
            <Works />
            <EduExp />
            <Skills />
            <Testimonials />
            <Blogs />
            <Contact />
            <Footer />
            <ScrollToTopButton />
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
