import React from 'react';
import { FaLocationArrow, FaMobileAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Past Seminar",
    link: "/past_seminar",
  },

];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 shadow-md shadow-slate-500">
      <div className="">
        <div className="grid md:grid-cols-3 pb-2 pt-2 gap-12">
          {/* Quick Links */}
          <div className="py-8 ">
            <h1 className="text-2xl font-bold mb-3">Quick Links</h1>
            <ul className="space-y-3 text-xl">
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <a href={data.link} className="text-gray-300 hover:text-white duration-300">{data.title}</a>
                </li>
              ))}
            </ul>
            <h3 className="pt-3 text-gray-400 text-xl">Prachi Belnekar - vu1f2223070</h3>
          </div>
          {/* Company Details */}
          <div className="py-8 px-4 ">
            <a href="/" className=" font-semibold  text-2xl  sm:text-3xl">GetFly Technologies</a>
            <h3 className="text-2xl font-semibold mt-4">Ready to Join?</h3>
            <p className="text-xl">Apply now for upcoming seminars and broaden your knowledge horizon !</p>
          </div>




          {/* Company Address */}
          <div className="py-8 px-4">
            <h1 className="text-2xl font-bold ">Get In Touch With Us</h1>
            <div>
              <div className="flex items-center gap-3 ml-48 mt-6 text-xl">
                <FaLocationArrow />
                <a href="https://maps.app.goo.gl/5qobdsqV1gRGLNBa7" className="hover:text-white duration-300">Mumbai</a>
              </div>
              <div className="flex items-center gap-3 mt-6 ml-48 text-xl">
                <FaMobileAlt />
                <p>02220847226</p>
              </div>
              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6 ml-48">
                <a href="https://www.instagram.com/vasantdadapatilcollege/"><FaInstagram className="text-3xl hover:text-primary duration-300" /></a>
                <a href="https://www.facebook.com/Vasantdadapatilpratishthancollege"><FaSquareFacebook className="text-3xl hover:text-primary duration-300" /></a>
                <a href="https://www.linkedin.com/in/prachi-belnekar-00a800203"><FaLinkedin className="text-3xl hover:text-primary duration-300" /></a>
                <a href="https://www.youtube.com/"><IoLogoYoutube className="text-3xl hover:text-primary duration-300" /></a>
                <a href="mailto:info@yourcompany.com"><AiTwotoneMail className="text-3xl hover:text-primary duration-300" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-sm text-center text-gray-400">
          <p>&copy; GetFly Technologies | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
