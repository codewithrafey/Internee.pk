import React from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-gray-900 py-12 px-6 sm:px-12 md:px-20">
      {/* Subscribe Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-b border-gray-700 pb-8">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Subscribe to Newsletter
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Subscribe to our newsletter and get exclusive insights, industry trends.
          </p>
        </div>

        <div className="flex items-center bg-gray-800 rounded-full overflow-hidden w-full sm:w-auto border border-gray-700">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 outline-none flex-grow bg-transparent text-gray-300 text-sm placeholder-gray-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-400">
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-3">
            {/* <img src={logo} alt="Internee.pk Logo" className="w-12" /> */}
            <h2 className="text-xl font-bold text-white">
              Internee<span className="text-blue-500">.pk</span>
            </h2>
          </div>

          <p className="mt-4 text-sm text-gray-400 max-w-sm">
            The ultimate platform designed to turbocharge the IT sector in Pakistan.
          </p>

          <div className="flex items-center gap-2 mt-5 text-gray-400">
            <FaPhoneAlt className="text-blue-500" />
            <span className="text-sm">+92 312 3023645</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Student Ambassador</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Interns Profiles</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition">Community</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Certification</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Scholarships</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm">
        <p>Copyright © {new Date().getFullYear()} internee.pk</p>
        <div className="flex gap-4 mt-3 sm:mt-0">
          <a href="#" className="hover:text-blue-500 transition">Terms of Use</a>
          <a href="#" className="hover:text-blue-500 transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;