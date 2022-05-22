import "./App.scss";
import Header from "./components/header/Header";
import Navbar, { NavItem } from "./components/navbar/Navbar";
import { HiOutlineHome } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BsJournalBookmark } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
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
          <NavItem name="experience" url="#experience" s>
            <BsJournalBookmark />
          </NavItem>
          <NavItem name="services" url="#services">
            <MdOutlineMiscellaneousServices />
          </NavItem>
          <NavItem name="contact" url="#contact">
            <MdOutlineContactPhone />
          </NavItem>
        </Navbar>
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
