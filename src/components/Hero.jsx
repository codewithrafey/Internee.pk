import { useEffect } from "react";
import image from "../assets/Group7new.png";
import { images } from "../assets/items";
import { internshipsData } from "../assets/items";
import { FiTarget } from "react-icons/fi";
import { LuUsers, LuSparkles } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiRocketLaunch } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { TbBrain } from "react-icons/tb";
import { FiAward } from "react-icons/fi";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";
import { FiFileText } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Hero() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
  const data = [
    {
      id: 1,
      icon: <FiTarget className="text-3xl" />,
      title: "Goal-Oriented",
      description:
        "Focused on achieving specific learning and career objectives.",
    },
    {
      id: 2,
      icon: <LuUsers className="text-3xl" />,
      title: "Community-Driven",
      description: "Fosters a supportive network of interns and professionals.",
    },
    {
      id: 3,
      icon: <FaArrowTrendUp className="text-3xl" />,
      title: "Growth-Focused",
      description: "Emphasizes personal and professional development.",
    },
    {
      id: 4,
      icon: <LuSparkles className="text-3xl" />,
      title: "Innovative",
      description: "Encourages creative thinking and problem-solving.",
    },
  ];

  return (
    <>
      {/* ---------------- Hero Section ---------------- */}
      <div className=" px-5 sm:px-10 xl:px-20 pt-10 bg-white/70 max-lg:py-10 min-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between gap-10 max-lg:flex-col-reverse relative z-10">
          {/* Background Blur Circles (optimized) */}
          <div className="absolute bottom-10 left-10 bg-gradient-to-r from-purple-400/40 to-blue-400/40 rounded-full w-24 h-24 blur-xl animate-[pulse_4s_ease-in-out_infinite] max-sm:hidden"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400/40 rounded-full w-60 h-60 blur-2xl animate-[pulse_3s_ease-in-out_infinite]"></div>
          <div className="absolute -bottom-20 right-0 bg-purple-400/40 rounded-full w-60 h-60 blur-xl animate-[pulse_4s_ease-in-out_infinite]"></div>
          {/* Left Text Section */}
          <div className="max-w-lg">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Start Your Virtual{" "}
              <span className="text-blue-500">Internship</span> Journey Today!
            </h1>

            <p className="mt-5 text-gray-600 text-lg">
              Internee.pk kickstarts students' tech careers with their first
              internships, providing industry exposure, practical skills, and
              networking opportunities.
            </p>

            <div className="flex gap-5 flex-1">
              <button className="mt-7 px-6 py-3 bg-blue-500 text-white rounded font-semibold border-2 border-blue-500 hover:bg-white hover:text-blue-500 transition duration-200 cursor-pointer">
                Explore Internships
              </button>
              <button className="mt-7 px-6 py-3 bg-white text-[#2A344B] rounded font-semibold border-2 border-[#2A344B] hover:bg-[#2A344B] hover:text-white transition duration-200 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <img
              src={image}
              width={500}
              alt="Internship Info"
              className="max-w-full h-auto"
              loading=""
            />
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center mt-14">
          <p className="text-gray-700 text-lg">
            Collaborated with Trusted Worldwide Partners
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-8 mt-6 items-center justify-center mx-auto text-center">
            {images.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={`Partner ${item.id}`}
                className="w-20 mx-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                loading=""
              />
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="py-20">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
            Why Choose Internee.pk?
          </h1>
          <p className="text-center mt-5 text-gray-600 text-xl">
            We provide everything you need to kickstart your professional
            journey
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {data.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:-translate-y-2 hover:shadow-xl transition duration-200"
              >
                <div className="px-3 py-3 rounded-xl bg-blue-500/20 w-fit group-hover:bg-blue-500 group-hover:text-white text-blue-500 transition-all duration-300">
                  {item.icon}
                </div>
                <h2 className="text-xl font-semibold mt-4 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- Internship Cards Section ---------------- */}
      <div className="px-5 sm:px-10 xl:px-20 py-20 bg-gray-50">
        <div className="flex gap-2 mx-auto justify-center items-center text-blue-700 bg-blue-500/20 rounded-full py-2 px-4 text-sm font-medium w-fit">
          <PiRocketLaunch className="text-lg" /> Start Your Virtual Internship
          Journey Today!
        </div>

        <h1 className="text-center mx-auto text-3xl sm:text-4xl lg:text-5xl max-w-3xl pt-7 ">
          Your Dream Internship is Just One Click Away!
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {internshipsData.map((internship) => (
            <div
              key={internship.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all p-6"
            >
              <img
                src={internship.image}
                alt={internship.title}
                className="rounded-2xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{internship.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {internship.description}
              </p>
              <Link
              
                to={`/internship/${internship.id}`}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-10 px-5 sm:px-10 xl:px-20 py-20">
        <div className="">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Everything You Need to{" "}
            <span className="text-blue-500">Succeed</span>
          </h1>
          <p className="pt-5 text-gray-600 text-xl font-regular">
            Join thousands of students who have transformed their careers
            through our comprehensive virtual internship programs.
          </p>
          <div className="flex flex-col gap-3 pt-7 items-start ">
            <div className="flex gap-2 justify-center items-center text-gray-800">
              <FiCheckCircle className="text-blue-700 text-2xl" /> Get hands-on
              experience with real projects
            </div>
            <div className="flex gap-2 justify-center items-center text-gray-800">
              <FiCheckCircle className="text-blue-700 text-2xl" /> Earn stipends
              while learning
            </div>
            <div className="flex gap-2 justify-center items-center text-gray-800">
              <FiCheckCircle className="text-blue-700 text-2xl" /> Receive
              completion certificates
            </div>
            <div className="flex gap-2 justify-center items-center text-gray-800">
              <FiCheckCircle className="text-blue-700 text-2xl" /> Build your
              professional network
            </div>
            <div className="flex gap-2 justify-center items-center text-gray-800">
              <FiCheckCircle className="text-blue-700 text-2xl" /> Flexible
              remote work opportunities
            </div>
            <div className="flex gap-2 justify-center items-center text-gray-800">
              <FiCheckCircle className="text-blue-700 text-2xl" />
              No geographical constraints
            </div>
          </div>
          <button className="group  py-3 px-4 pe-6 bg-blue-500 text-white rounded mt-6 hover:bg-blue-600">
            <span className="flex gap-2 justify-center items-center">
              Start Your Journey
              <IoMdArrowForward className="group-hover:translate-x-1 transition" />
            </span>{" "}
          </button>
        </div>
        <div className="p-6 sm:p-12 rounded-xl bg-[#DDEBFE] shadow-2xl flex flex-col gap-4 h-fit">
          <div className="bg-white w-full space-y-1 py-6 px-6 rounded-xl shadow-lg">
            <div className="flex gap-2 items-center font-semibold">
              <FaCircle className="text-blue-500 text-xs" />
              Step 1: Browse
            </div>
            <p className="text-gray-600 text-sm">
              Explore hundreds of internship opportunities
            </p>
          </div>
          <div className="bg-white w-full space-y-1 py-6 px-6 rounded-xl shadow-lg">
            <div className="flex gap-2 items-center font-semibold">
              <FaCircle className="text-blue-500 text-xs" />
              Step 2: Apply
            </div>
            <p className="text-gray-600 text-sm">
              Submit your application in minutes
            </p>
          </div>
          <div className="bg-white w-full space-y-1 py-6 px-6 rounded-xl shadow-lg">
            <div className="flex gap-2 items-center font-semibold">
              <FaCircle className="text-blue-500 text-xs" />
              Step 3: Start Learning
            </div>
            <p className="text-gray-600 text-sm">
              Begin your internship and grow your skills
            </p>
          </div>
        </div>
      </div>
      {/* mock interviews */}
      <div className="relative px-5 sm:px-10 xl:px-20 py-20   overflow-hidden">
        <div className="absolute top-0 right-0 w-full max-sm:h-57 sm:h-55 md:h-50 bg-[#bad2fc]"></div>
        <div className="absolute -top-22 -left-10  w-full h-82 bg-[#bad2fc] -rotate-[5deg] transform origin-bottom"></div>

        <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-10  relative">
          <div className="">
            <div className="flex px-4 py-2 bg-amber-50 w-fit rounded-full mb-4 items-center">
              <TbBrain className="text-xl text-blue-500 mr-2" />
              <span className="text-blue-700 font-medium">
                AI Mock Interviews
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ace Your Interviews with Our{" "}
              <span className="text-blue-500">Mock Interview</span> Sessions
            </h1>
            <p className="py-6 text-gray-600 text-xl font-regular">
              AI Mock Interviews AI Mock Interview Platform for Virtual
              Internships in Pakistan Prepare for technical, marketing, or
              business interviews with our AI-powered mock interview system.
              Join Internee.pk’s virtual internship program to get unlimited
              access, real-time feedback, and role-specific practice.
            </p>
            <button className="group  py-3 px-4 pe-6 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600">
              <span className="flex gap-2 justify-center items-center">
                Apply Now for Virtual Internships
                <IoIosArrowForward className="group-hover:translate-x-1 transition" />
              </span>
            </button>
          </div>
          <div className="">
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-lg flex-1 mb-6">
              <div className="text-blue-600 bg-gray-300/20 h-fit text-xl p-3 rounded-lg">
                <FiMessageSquare className="" />
              </div>
              <div className="">
                <h5 className="text-lg font-bold">
                  Realistic AI Interview Simulations
                </h5>
                <p className="text-gray-600">
                  Simulate real interview environments powered by AI. Perfect
                  for students seeking online internship interview practice or
                  job readiness.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-lg flex-1 mb-6">
              <div className="text-blue-600 bg-gray-300/20 h-fit text-2xl p-3 rounded-lg">
                <TbBrain className="" />
              </div>
              <div className="">
                <h5 className="text-lg font-bold">Smart Feedback with AI</h5>
                <p className="text-gray-600">
                  Instantly analyze your answers, tone, and relevance. Improve
                  every time with feedback tailored for virtual internship
                  candidates.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-lg flex-1 mb-6">
              <div className="text-blue-600 bg-gray-300/20 h-fit text-2xl p-3 rounded-lg">
                <FiTarget className="" />
              </div>
              <div className="">
                <h5 className="text-lg font-bold">
                  Role-Based Mock Interviews
                </h5>
                <p className="text-gray-600">
                  Practice interviews for software engineering, product
                  management, business, and digital marketing roles in our
                  internee.pk platform.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 xl:grid-cols-3 gap-10 pt-12">
          <div className="flex flex-col gap-3 p-8 bg-gray-50 rounded-xl shadow-lg">
            <FiAward className="text-3xl text-blue-500" />
            <h2 className="text-xl  font-bold ">Become Job-Ready Fast </h2>
            <p className="text-gray-600 ">
              Structured interview training that prepares you for real-world
              scenarios. Perfect for students applying for internships.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-3 p-8 bg-gray-50 rounded-xl shadow-lg">
            <LuChartNoAxesColumnIncreasing className="text-3xl text-blue-500" />
            <h2 className="text-xl  font-bold ">Become Job-Ready Fast </h2>
            <p className="text-gray-600 ">
              Structured interview training that prepares you for real-world
              scenarios. Perfect for students applying for internships.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-3 p-8 bg-gray-50 rounded-xl shadow-lg">
            <FiFileText className="text-3xl text-blue-500" />

            <h2 className="text-xl font-bold ">Track Progress with Reports </h2>
            <p className="text-gray-600 ">
              Access detailed performance reports you can share with mentors and
              hiring managers.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* success story */}
      <div className="px-5 sm:px-10 xl:px-20 py-20  bg-gray-50">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Success Stories
        </h1>
        <p className="py-6 text-gray-600 text-xl font-regular text-center">
          What our interns say about their experiences
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pt-12">
          <div className="flex flex-col gap-3 p-8 bg-white rounded-xl shadow-lg">
            <div className="flex justify-start items-center">
              <FaStar className="text-black" />
              <FaStar className="text-black" />
              <FaStar className="text-black" />
              <FaStar className="text-black" />
              <FaStar className="text-black" />
            </div>
            <p>Internee.pk helped me landed my dream job in tech.</p>
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="">
                <p className="font-bold">Sara Johnson</p>
                <p>Software engineer, Google</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-8 bg-white rounded-xl shadow-lg">
            <div className="flex justify-start items-center">
              <FaStar className="text-black" />
              <FaStar className="text-black" />
              <FaStar className="text-black" />
              <FaStar className="text-black" />
              <FaStar className="text-black" />
            </div>
            <p>Internee.pk helped me landed my dream job in tech.</p>
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="">
                <p className="font-bold">Michael chen</p>
                <p>UX designer, Airbnb</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-8 bg-white rounded-xl shadow-lg">
            <div className="flex justify-start items-center">
              <FaStar className="text-black" />
              <FaStar className="text-black" />
              <FaStar className="text-black" />
              <FaStar className="text-black" />
              <FaStar className="text-black" />
            </div>
            <p>Internee.pk helped me landed my dream job in tech.</p>
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="">
                <p className="font-bold">Emma Rodriguez</p>
                <p>Marketing specialist, Spotify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Hero Section */}
      <div className="px-5 sm:px-10 xl:px-20 py-20 bg-gray-50">
        <div className="py-20 bg-[#0A1733] text-white rounded-xl mx-auto text-center">
          <div className="flex gap-2 justify-center items-center bg-white px-2 py-1 w-fit rounded-full mb-4 text-gray-900 text-sm font-medium mx-auto">
            <div className="bg-black rounded-full px-3 py-1 w-fit text-white text-sm font-medium">
              Trending
            </div>
            Explore Internship Opportunities
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mx-auto text-center max-w-xl leading-16">
            Unlock New Opportunities With Top-tier Internships.
          </h1>
          <p className="py-6 text-gray-400 text-center mx-auto max-w-3xl">
            Take the first step toward a successful career with Internee.pk.
            Explore top internships, gain hands-on experience, and earn a
            valuable certificate.
          </p>
          <button className="px-8 py-3 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-blue-300  text-white cursor-pointer">Get Started Now</button>
        </div>
            <section className=" pt-16">
    <div className="grid sm:grid-cols-3 text-center bg-gray-50">
      {[
        { n: 20, t: "Expert-Led Internships" },
        { n: 1500, t: "Successful Graduates" },
        { n: 50000, t: "LinkedIn Followers" },
      ].map((d, i) => (
        <div
          key={i}
          className="opacity-0 translate-y-6 transition-all duration-700 delay-100"
          data-aos="fade-up"
        >
          <CountUp
            end={d.n}
            duration={2}
            separator=","
            enableScrollSpy
          >
            {({ countUpRef }) => (
              <h2
                ref={countUpRef}
                className="text-5xl font-bold text-blue-600"
              />
            )}
          </CountUp>
          <p className="text-gray-700 mt-2">{d.t}</p>
        </div>
      ))}
    </div>
    </section>
      </div>
    </>
  );
}

export default Hero;