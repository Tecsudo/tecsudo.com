import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { contactInfo } from "./config/contact";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Transforming Ideas into
                <span className="text-brand"> Intelligent Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We build custom web applications, mobile solutions, and business
                intelligence tools that help growing businesses scale and
                succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="btn-primary px-8 py-3 rounded-full font-medium text-center"
                >
                  Get in Touch
                </a>
                <a
                  href="#services"
                  className="btn-secondary px-8 py-3 rounded-full font-medium text-center"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/hero-illustration.svg"
                alt="Software development illustration"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      >
        <ServicesSection />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-bg relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="section-heading text-3xl sm:text-4xl font-bold">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-4 text-center">
            Ready to transform your business with innovative technology
            solutions? Our team is here to help you succeed.
          </p>

          <div className="bg-background rounded-2xl shadow-xl overflow-hidden mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Contact Info */}
              <div className="lg:col-span-2 bg-gradient-to-br from-background to-secondary-bg p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-8 text-white">
                  Contact Information
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6 text-brand"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white">
                        Email
                      </h4>
                      <a
                        href={`mailto:${contactInfo.contactEmail}`}
                        className="text-brand hover:underline block mb-1"
                      >
                        {contactInfo.contactEmail}
                      </a>
                      <p className="text-gray-400 text-sm">
                        For general inquiries
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6 text-brand"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white">
                        Phone
                      </h4>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-brand hover:underline block mb-1"
                      >
                        {contactInfo.phone}
                      </a>
                      <p className="text-gray-400 text-sm">
                        Mon-Fri from 9am to 6pm (PKT)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6 text-brand"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white">
                        Office
                      </h4>
                      <p className="text-brand block mb-1">
                        {contactInfo.address}
                        {contactInfo.address1}
                        {contactInfo.city}
                        {contactInfo.state}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {contactInfo.country}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="text-lg font-semibold mb-4 text-white">
                    Connect With Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href={`${contactInfo.social.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center text-brand hover:bg-brand/20 transition-colors"
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
                    <a
                      href={`${contactInfo.social.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center text-brand hover:bg-brand/20 transition-colors"
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
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Let&apos;s Build Something Amazing Together
                </h3>
                <p className="text-gray-300 mb-8">
                  Tell us about your project, and we&apos;ll get back to you
                  within 24 hours.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
