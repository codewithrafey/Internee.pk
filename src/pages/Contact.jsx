import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import {
  FiPhone,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-16 px-6 sm:px-10 xl:px-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Get in <span className="text-blue-600">Touch</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Have questions, feedback, or collaboration ideas? We’d love to hear
          from you! Fill out the form below or reach us directly through our
          contact details.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Right - Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:col-span-8 order-1 lg:order-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter your subject"
                className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us how we can help you..."
                className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500/30 focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Left - Contact Info */}
        <div className="space-y-8 lg:col-span-4 order-2 lg:order-2">
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Contact Information
            </h2>
            <div className="space-y-3 text-gray-600">
              <div className="flex gap-3">
                <div className="text-blue-500 p-2 h-fit rounded bg-blue-500/10">
                  <MdOutlineEmail size={22} />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">Email</p>
                  <a
                    href="mailto:info@internee.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-black"
                  >
                    info@internee.pk
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-blue-500 p-2 h-fit rounded bg-blue-500/10">
                  <FiPhone size={22} />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">Phone</p>
                  <a
                    href="tel:+923001234567"
                    className="text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +92 300 1234567
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-blue-500 p-2 h-fit rounded bg-blue-500/10">
                  <GrLocation size={22} />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">Website</p>
                  <a
                    href="https://www.internee.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-black"
                  >
                    www.internee.pk
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Our Office
            </h2>
            <div className="flex justity-center gap-4 mt-4">
              <div className="p-2 rounded bg-blue-500/10 h-fit">
                <FiFacebook size={22} className="inline  text-black" />
              </div>
              <div className="p-2 rounded bg-blue-500/10 h-fit">
                <FiTwitter size={22} className="inline  text-black " />
              </div>
              <div className="p-2 rounded bg-blue-500/10 h-fit">
                <FiLinkedin size={22} className="inline  text-black" />
              </div>
              <div className="p-2 rounded bg-blue-500/10 h-fit">
              <FiInstagram size={22} className="inline  text-black" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Working Hours
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Monday – Friday: 9:00 AM – 6:00 PM <br />
              Saturday – Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="mt-20">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
          Find Us on Map
        </h2>
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Internee Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.763062285932!2d67.03300727523909!3d24.804323347252967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d7a257bcb0f%3A0xb9a0a6dc293c1216!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709876543210"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
