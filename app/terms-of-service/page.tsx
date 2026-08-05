import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { contactInfo } from '../config/contact';

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white">Terms of Service</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Introduction</h2>
            <p className="text-gray-300">
              Welcome to Tecsudo. These Terms of Service govern your use of our website and the services we provide. By accessing or using our website, you agree to be bound by these Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Use of Our Services</h2>
            <p className="text-gray-300">
              You agree to use our services only for purposes that are permitted by these Terms and any applicable law, regulation, or generally accepted practices or guidelines in the relevant jurisdictions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Intellectual Property Rights</h2>
            <p className="text-gray-300">
              The content on our website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, is the property of Tecsudo or its content suppliers and is protected by international copyright laws.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. User Content</h2>
            <p className="text-gray-300">
              Any content you submit to our website, including but not limited to comments, feedback, and suggestions, will be considered non-confidential and non-proprietary. By providing any such content, you grant us the right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Limitation of Liability</h2>
            <p className="text-gray-300">
              In no event shall Tecsudo, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any (i) errors, mistakes, or inaccuracies of content, (ii) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of our services, (iii) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Indemnification</h2>
            <p className="text-gray-300">
              You agree to defend, indemnify, and hold harmless Tecsudo, its officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s fees) arising from: (i) your use of and access to our services; (ii) your violation of any term of these Terms; (iii) your violation of any third party right, including without limitation any copyright, property, or privacy right.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">8. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">9. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-300">
              Email: <a href={`mailto:${contactInfo.legalEmail}`} className="text-brand hover:underline">{contactInfo.legalEmail}</a><br />
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