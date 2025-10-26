import React from "react";
import { Link } from "react-router-dom";
import { internshipsData } from "../assets/items";

function Internship() {
  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="px-5 sm:px-10 xl:px-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Explore Our Internships
        </h2>
        <p className="text-gray-600 mb-12">
          Choose your field and gain hands-on experience through virtual internships.
        </p>

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
    </section>
  );
}

export default Internship;
