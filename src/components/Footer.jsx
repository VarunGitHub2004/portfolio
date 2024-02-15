import { Avatar } from "@chakra-ui/react";
import React from "react";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Avatar size="30px" />
        <h2>Varun Tiwari</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://instagram.com/The_varun_tiwari_2004" target="_blank">
            <AiFillInstagram className="social" size={"40px"} />
          </a>
          <a href="https://github.com/VarunGitHub2004" target="_blank">
            <AiFillGithub className="social" size={"40px"} />
          </a>
          <a href="mailto:http://varuntiwari20042307@gmail.com" target="_blank">
            <AiFillGoogleCircle className="social" size={"40px"} />
          </a>
          <a
            href="https://www.linkedin.com/in/varun-tiwari-1a662b285/"
            target="_blank"
          >
            <AiFillLinkedin className="social" size={"40px"} />
          </a>
        </article>
      </aside>
      <a href="#home">
      <button className="button">
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </button>
      </a>
    </footer>
  );
};

export default Footer;
