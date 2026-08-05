"use client";

import React, { useState } from "react";
import Image from "next/image";
import { teamMembers } from "../config/team";
import { motion } from "framer-motion";

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleCardLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-3xl sm:text-4xl font-bold">
          Meet Our Team
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-4 text-center mb-12">
          Our talented professionals are passionate about creating innovative
          solutions for our clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => {
            return (
              <motion.div
                key={index}
                className={`card p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300 
                ${
                  activeIndex === index
                    ? "bg-[#3a4652] shadow-xl scale-105"
                    : "bg-[#343e48] hover:bg-[#3a4652]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
              >
                <div className="mb-6 relative w-40 h-40 rounded-full overflow-hidden border-4 border-brand/30">
                  {member.image ? (
                    member.image.startsWith("http") ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                      />
                    ) : (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    )
                  ) : (
                    <div className="h-full w-full rounded-full bg-brand/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-16 w-16 text-brand"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-1 text-white">
                  {member.name}
                </h3>
                <p className="text-brand font-medium mb-4">{member.role}</p>

                <div className="bg-secondary-bg/50 p-4 rounded-lg mb-6 min-h-[80px] flex items-center">
                  <p className="text-gray-300">{member.bio}</p>
                </div>

                <div className="flex flex-col items-start w-full mb-6 bg-secondary-bg/30 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-white flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-brand mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2 w-full">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-brand/20 text-brand px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 mt-auto">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand transition-colors p-2 bg-secondary-bg/50 rounded-full hover:bg-secondary-bg"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                      </svg>
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand transition-colors p-2 bg-secondary-bg/50 rounded-full hover:bg-secondary-bg"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand transition-colors p-2 bg-secondary-bg/50 rounded-full hover:bg-secondary-bg"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                  {member.social.portfolio && (
                    <a
                      href={member.social.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand transition-colors p-2 bg-secondary-bg/50 rounded-full hover:bg-secondary-bg"
                      aria-label={`${member.name}'s Portfolio`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
