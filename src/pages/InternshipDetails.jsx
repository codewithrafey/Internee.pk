import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { internshipsData } from "../assets/items";
import { FaArrowLeft, FaClock, FaLevelUpAlt } from "react-icons/fa";

function InternshipDetails() {
  const { id } = useParams();
  const internship = internshipsData.find(
    (item) => item.id.toString() === id.toString()
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  if (!internship) {
    return (
      <p className="text-center py-20 text-gray-600">Internship not found!</p>
    );
  }

  const openModal = (sub) => {
    setSelectedInternship(sub.name);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { ...formData, internship: selectedInternship });
    alert(`✅ Application submitted for: ${selectedInternship}`);
    closeModal();
  };

  return (
    <div className="py-20 bg-gray-50 text-gray-800 px-5 sm:px-10 xl:px-20">
      <Link
        to="/internship"
        className="inline-flex items-center text-blue-600 hover:underline mb-6"
      >
        <FaArrowLeft className="mr-2" /> Back to Internships
      </Link>

      <div className="bg-white rounded-3xl shadow-lg p-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          {internship.title}
        </h2>
        <p className="text-gray-600 mb-10">{internship.description}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {internship.subInternships?.map((sub, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-2xl p-6 text-center hover:bg-blue-100 transition"
            >
              <h3 className="text-lg font-semibold mb-3">{sub.name}</h3>
              <div className="flex justify-center items-center gap-2 text-gray-600 text-sm">
                <FaClock /> {sub.duration}
              </div>
              <div className="flex justify-center items-center gap-2 text-gray-600 text-sm mt-2">
                <FaLevelUpAlt /> {sub.level}
              </div>
              <button
                onClick={() => openModal(sub)}
                className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md shadow-lg relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Apply for {selectedInternship}
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Fill in your details below to apply.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default InternshipDetails;
