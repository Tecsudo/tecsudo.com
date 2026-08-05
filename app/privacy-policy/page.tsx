"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { contactInfo } from '../config/contact';

export default function PrivacyPolicy() {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(new Date().toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    }));
  }, []);

  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300">Last Updated: {formattedDate}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Introduction</h2>
            <p className="text-gray-300">
              At Tecsudo, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. The Data We Collect</h2>
            <p className="text-gray-300">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
              <li><strong className="text-white">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong className="text-white">Contact Data</strong> includes email address, telephone numbers, and physical address.</li>
              <li><strong className="text-white">Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong className="text-white">Usage Data</strong> includes information about how you use our website and services.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. How We Use Your Data</h2>
            <p className="text-gray-300">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
              <li>To provide you with the services you have requested.</li>
              <li>To respond to your inquiries and contact requests.</li>
              <li>To improve our website and services.</li>
              <li>To send you marketing communications if you have opted in to receive them.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Data Security</h2>
            <p className="text-gray-300">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Data Retention</h2>
            <p className="text-gray-300">
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Your Legal Rights</h2>
            <p className="text-gray-300">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
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