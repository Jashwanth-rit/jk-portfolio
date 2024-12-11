import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white 
p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold ">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal ">
          Feel Free to reach out
        </h3>
      </div>
      <ul className="text-sm md:text-xl pr-50">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} /> jk.karunadu01@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a
            href="https://www.linkedin.com/in/jashwanth-071725310"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a
            href="https://github.com/Jashwanth-rit"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaTwitter />
          <a
            href="https://x.com/JkKarunadu01"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaInstagram />
          <a
            href="https://www.instagram.com/jk_karunadu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
