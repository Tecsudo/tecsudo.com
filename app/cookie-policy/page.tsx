import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { contactInfo } from '../config/contact';

export default function CookiePolicy() {
  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white">Cookie Policy</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. What Are Cookies</h2>
            <p className="text-gray-300">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site. Cookies enhance user experience by allowing websites to remember your preferences and understand how you use different parts of a website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. How We Use Cookies</h2>
            <p className="text-gray-300">
              We use cookies for several reasons. Some cookies are required for technical reasons for our website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties may also serve cookies through our website for advertising, analytics, and other purposes.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Types of Cookies We Use</h2>
            <p className="text-gray-300">
              The types of cookies we use on our website include:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
              <li><strong className="text-white">Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</li>
              <li><strong className="text-white">Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</li>
              <li><strong className="text-white">Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
              <li><strong className="text-white">Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Managing Cookies</h2>
            <p className="text-gray-300">
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Cookie Preferences</h2>
            <p className="text-gray-300">
              When you first visit our website, you will be presented with a cookie banner that allows you to accept or decline non-essential cookies. You can change your cookie preferences at any time by clicking on the &quot;Cookie Settings&quot; link in the footer of our website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Changes to Our Cookie Policy</h2>
            <p className="text-gray-300">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the &quot;Last Updated&quot; date at the top of this page.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <p className="text-gray-300">
              Email: <a href={`mailto:${contactInfo.privacyEmail}`} className="text-brand hover:underline">{contactInfo.privacyEmail}</a><br />
              Phone: {contactInfo.phone}<br />
              Address: {contactInfo.completeAddress}
            </p>
            
            <div className="mt-12 flex">
              <Link href="/" className="text-brand hover:underline">← Back to Home</Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
} 