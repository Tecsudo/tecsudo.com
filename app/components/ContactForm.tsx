"use client";

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation errors when user types
    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const errors: {
      name?: string;
      email?: string;
      message?: string;
    } = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Reset previous submission status
    setFormStatus({
      isSubmitting: false,
      isSubmitted: false,
      isError: false,
      message: ''
    });
    
    // Validate form
    if (!validateForm()) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Please correct the errors in the form.'
      });
      return;
    }
    
    setFormStatus({
      ...formStatus,
      isSubmitting: true,
      message: ''
    });

    try {
      // This would be replaced with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // If you want to keep the simulation for testing, uncomment this:
      // await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!response.ok) throw new Error('Failed to submit form');
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'There was an error submitting your message. Please try again.'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 bg-[#1a2229] border ${validationErrors.name ? 'border-red-500' : 'border-[#3a4750]'} rounded-lg focus:outline-none focus:ring-2 focus:ring-brand text-white`}
            placeholder="Your name"
          />
          {validationErrors.name && (
            <p className="mt-1 text-sm text-red-400">{validationErrors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email <span className="text-brand">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 bg-[#1a2229] border ${validationErrors.email ? 'border-red-500' : 'border-[#3a4750]'} rounded-lg focus:outline-none focus:ring-2 focus:ring-brand text-white`}
            placeholder="your.email@example.com"
          />
          {validationErrors.email && (
            <p className="mt-1 text-sm text-red-400">{validationErrors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#1a2229] border border-[#3a4750] rounded-lg focus:outline-none focus:ring-2 focus:ring-brand text-white"
            placeholder="(123) 456-7890"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#1a2229] border border-[#3a4750] rounded-lg focus:outline-none focus:ring-2 focus:ring-brand text-white"
            placeholder="Your company name"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message <span className="text-brand">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`w-full px-4 py-3 bg-[#1a2229] border ${validationErrors.message ? 'border-red-500' : 'border-[#3a4750]'} rounded-lg focus:outline-none focus:ring-2 focus:ring-brand text-white resize-none`}
          placeholder="Tell us about your project and requirements..."
        ></textarea>
        {validationErrors.message && (
          <p className="mt-1 text-sm text-red-400">{validationErrors.message}</p>
        )}
      </div>
      
      {formStatus.message && (
        <div className={`p-4 rounded-lg ${formStatus.isError ? 'bg-red-900/50 text-red-200' : 'bg-green-900/50 text-green-200'}`}>
          {formStatus.message}
        </div>
      )}
      
      <div>
        <button
          type="submit"
          disabled={formStatus.isSubmitting || formStatus.isSubmitted}
          className={`w-full md:w-auto px-8 py-3 rounded-full font-medium text-center transition-colors ${
            formStatus.isSubmitting || formStatus.isSubmitted
              ? 'bg-brand/50 text-white cursor-not-allowed'
              : 'bg-brand text-[#1a2229] hover:bg-brand/90'
          }`}
        >
          {formStatus.isSubmitting ? 'Sending...' : formStatus.isSubmitted ? 'Sent!' : 'Send Message'}
        </button>
      </div>
    </form>
  );
} 