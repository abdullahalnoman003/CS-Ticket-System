import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <footer className=" mx-auto max-w-7xl footer sm:footer-horizontal   p-10">
          <aside>
            <p className="max-w-md">
              <span className="text-2xl font-bold">CS - Ticket System</span>
              <br />
              <br />
              CS Ticketing system is a Helpful system that provides the
              necessary services to the users so that they can get the best
              about their problems. <br /> Your satisfaction is our priority
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Our Mission</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Products & Services</a>
            <a className="link link-hover">Customer Stories</a>
            <a className="link link-hover">Download Apps</a>
          </nav>
          <nav>
            <h6 className="footer-title">Information</h6>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Join Us</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social Links</h6>

            <ul>
              <li className="gap-0.5 flex items-center">
                <FaXTwitter className="bg-white rounded-full  text-black" />
                <a className="link link-hover">@CS — Ticket System</a>
              </li>
              <li className="gap-0.5 flex items-center">
                <FaFacebook className="bg-white rounded-full  text-black" />
                <a className="link link-hover">@CS — Ticket System</a>
              </li>
              <li className="gap-0.5 flex items-center">
                <FaLinkedin className="bg-white rounded-full  text-black" />
                <a className="link link-hover">@CS — Ticket System</a>
              </li>
              <li className="gap-0.5 flex items-center">
                <MdOutlineMail className="bg-white rounded-full  text-black" />
                <a className="link link-hover">support@cst.com</a>
              </li>
            </ul>
          </nav>
        </footer>

        <div className="bg-black text-center text-md p-6">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by CS
              - Ticket System Ltd
            </p>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Footer;
