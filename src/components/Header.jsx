import { Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {delay, motion} from 'framer-motion'
const animationLink={
  initial: {
    delay:6,
    y: "-100%",
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
  },
}
function Header({ setMenuOpen, menuOpen }) {

  return (
    <header style={{position:'sticky',top:0,zIndex:999,background:"lightskyblue",boxShadow:"0px 10px 5px 10px lightskyblue"}}>

      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>
      <Button id="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu size={40} />
      </Button>
    </header>
  );
}

export default Header;

const NavContent = ({ setMenuOpen }) => {
  return (
    <>
      <h2>Varun</h2>
      <div>
        <motion.a {...animationLink}  href="#home" onClick={() => setMenuOpen(false)}>
       Home 
        </motion.a>
        <motion.a href="#work"  {...animationLink} className="menu_link" onClick={() => setMenuOpen(false)}>
          Work
        </motion.a>
        {/* <motion.a href="#timeline"  {...animationLink} className="menu_link"  onClick={() => setMenuOpen(false)}>
          Experience
        </motion.a> */}
        <motion.a href="#services"  {...animationLink} className="menu_link" onClick={() => setMenuOpen(false)}>
          Services
        </motion.a>
        {/* <motion.a href="#education"  {...animationLink} className="menu_link"  onClick={() => setMenuOpen(false)}>
          Education
        </motion.a> */}

        <motion.a href="#contact" {...animationLink}  className="menu_link" onClick={() => setMenuOpen(false)}>
          Contact
        </motion.a>
      </div>
      <motion.a  {...animationLink} href="mailto:varuntiwari23072004@gmail.com">
        <button>
<a href="#" className="btn menu_link">Email</a></button>
      </motion.a>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : " "}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};
