import { useEffect } from "react";
import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/header/Header";
import Navbar, { NavItem } from "./components/navbar/Navbar";
import { HiOutlineHome, HiOutlineBriefcase } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BsJournalBookmark } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        <div className="container">
          <Header />
          <Navbar defaultActive="home">
            <NavItem name="home" url="#home">
              <HiOutlineHome />
            </NavItem>
            <NavItem name="about" url="#about">
              <FiUser />
            </NavItem>
            <NavItem name="experience" url="#experience">
              <BsJournalBookmark />
            </NavItem>
            <NavItem name="services" url="#services">
              <MdOutlineMiscellaneousServices />
            </NavItem>
            <NavItem name="portfolio" url="#portfolio">
              <HiOutlineBriefcase />
            </NavItem>
            <NavItem name="contact" url="#contact">
              <MdOutlineContactPhone />
            </NavItem>
          </Navbar>
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Contact />
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
