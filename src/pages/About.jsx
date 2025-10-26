import { FiEye } from "react-icons/fi";
import CountUp from "react-countup";
import {
  FaUserGraduate,
  FaRibbon,
  FaChartLine,
  FaBullseye,
  FaGlobe,
  FaMedal,
  FaBuilding,
} from "react-icons/fa";

function About() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* About VirtuIntern Section */}
      <section className="w-full py-20 px-5 sm:px-10 xl:px-20">
        <div className="text-center mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            About <span className="text-blue-500">Internee.pk</span>
          </h1>
          <p className="mt-5 text-gray-600 text-xl max-w-3xl mx-auto">
            Empowering the next generation of professionals through quality
            virtual internship experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center bg-white py-10 px-8 rounded-3xl shadow-lg">
          {/* Left Text Side */}
          <div>
            <button className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full mb-6 flex items-center gap-2">
              <FaMedal className="text-blue-600" /> Our Mission
            </button>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bridging the Gap Between Education and Employment
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At VirtuIntern, we believe that every student deserves access to
              quality internship opportunities that prepare them for successful
              careers. Our mission is to democratize professional experience by
              providing virtual internships that are accessible from anywhere in
              the world.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We partner with leading companies to offer real-world projects,
              mentorship, and skill development opportunities that help students
              transition smoothly from education to employment.
            </p>
          </div>

          {/* Right Stats Side */}
          <div className="bg-blue-100 p-6 rounded-3xl flex flex-col gap-6 shadow-sm">
            {[
              { icon: <FaUserGraduate />, value: 10000, label: "Students Trained", suffix: "+" },
              { icon: <FaMedal />, value: 500, label: "Internship Programs", suffix: "+" },
              { icon: <FaChartLine />, value: 95, label: "Success Rate", suffix: "%" },
              { icon: <FaBuilding />, value: 50, label: "Partner Companies", suffix: "+" },
            ].map((item, index) => (
              <div key={index} className="bg-white group rounded-2xl p-6 flex items-center gap-4 shadow-md">
                <div className="p-3 rounded bg-blue-500/20 w-fit group-hover:bg-blue-500 group-hover:text-white text-blue-500 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    <CountUp end={item.value} duration={2.5} />{item.suffix}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="w-full px-5 sm:px-10 xl:px-20">
        <div className="bg-blue-600 text-white py-20 px-5 sm:px-10 xl:px-20 text-center items-center mx-auto rounded-3xl shadow-lg">
        <div className="max-w-4xl mx-auto">
          <span className="bg-white/20 text-sm px-4 py-1 rounded-full font-semibold flex gap-1 w-fit mx-auto items-center">
            <FiEye /> Our Vision
          </span>
          <h2 className="text-4xl font-bold mt-4">
            A World Where Every Student Has Equal Opportunity
          </h2>
          <p className="mt-6 text-lg text-blue-100 leading-relaxed">
            We envision a future where geographical boundaries and economic
            constraints don't limit anyone's potential. Through virtual
            internships, we're creating a level playing field where talent and
            dedication are the only prerequisites for success.
          </p>
        </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-5 sm:px-10 xl:px-20 text-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          <p className="text-gray-500 mt-2">
            The principles that guide everything we do
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                title: "Excellence",
                desc: "We strive for excellence in everything we do, providing top-quality internship experiences.",
                icon: <FaBullseye className="text-blue-600 text-4xl mx-auto mb-4" />,
              },
              {
                title: "Accessibility",
                desc: "Making quality internships accessible to students everywhere, regardless of location.",
                icon: <FaGlobe className="text-blue-600 text-4xl mx-auto mb-4" />,
              },
              {
                title: "Growth",
                desc: "Fostering personal and professional growth through hands-on learning experiences.",
                icon: <FaChartLine className="text-blue-600 text-4xl mx-auto mb-4" />,
              },
              {
                title: "Recognition",
                desc: "Recognizing and celebrating the achievements of our interns and partners.",
                icon: <FaMedal className="text-blue-600 text-4xl mx-auto mb-4" />,
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
                {value.icon}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How VirtuIntern Helps Students Section */}
      <section className="pb-20 px-5 sm:px-10 xl:px-20">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            How <span className="text-blue-500">Internee.pk</span> Helps Students
          </h2>
          <div className="grid sm:grid-cols-2 gap-10 text-left">
            {[
              { num: "1", title: "Real-World Experience", desc: "Work on actual industry projects and build a portfolio that stands out to employers." },
              { num: "2", title: "Flexible Learning", desc: "Learn at your own pace from anywhere, fitting internships around your schedule." },
              { num: "3", title: "Earn While Learning", desc: "Many of our internships offer competitive stipends, helping you earn while you gain experience." },
              { num: "4", title: "Expert Mentorship", desc: "Get guidance from industry professionals who are invested in your success." },
              { num: "5", title: "Verified Certificates", desc: "Receive industry-recognized certificates upon successful completion of your internship." },
              { num: "6", title: "Network Building", desc: "Connect with professionals and peers, building relationships that last beyond the internship." },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 font-bold px-4 py-2 rounded-lg text-lg">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
