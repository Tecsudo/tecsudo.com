import React from "react";
import { services } from "../config/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-3xl sm:text-4xl font-bold">
          Our Services
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-4 text-center">
          We deliver cutting-edge solutions in data, AI, and automation to
          transform your business operations and drive innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="card p-6">
              <div className="h-16 w-16 rounded-full bg-brand/20 flex items-center justify-center mb-6">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-brand mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary-bg text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Service Approach</h3>
          <p className="mb-4">
            At Tecsudo, we take a strategic approach to solution delivery,
            tailoring our services to meet your unique business challenges. We
            combine technical expertise with industry best practices to ensure
            maximum value and impact.
          </p>
          <p>
            Our comprehensive service portfolio spans data strategy, AI
            transformation, and automation solutions, enabling businesses to
            stay competitive in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
}
