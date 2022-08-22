import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";


function Footer() {
  return (
    <footer>
      <h2>Made by Michael Ishmail©</h2>
      <p>
        <ul>
          <a href="https://github.com/Michael-Ishmail">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/michael-ishmail-74b451157/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;