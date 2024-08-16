import React from "react";
import {
  FaGithub as Github,
  FaInstagram as Insta,
  FaFileAlt,
  FaLinkedin
} from "react-icons/fa";

export default function Social() {
  return (
    <>
      <div className="h3 mt-5">
        <a
          className="mr-5 icon"
          href="https://www.linkedin.com/in/arpanguptaa/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="mr-5 icon"
          href="https://github.com/arpan491"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a
          className="mr-5 icon"
          href="https://drive.google.com/file/d/1AlOWOM80JOdaLx3gr15ePQzt4eI7zJ0U/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <FaFileAlt />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.instagram.com/arpan491_/"
          target="_blank"
          rel="noreferrer"
        >
          <Insta />
        </a>
      </div>
    </>
  );
}
