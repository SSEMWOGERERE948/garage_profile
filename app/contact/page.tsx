'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />

      {/* Contact Header */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">CONTACT US</h1>
          <div className="w-12 h-1 bg-[#00a8cc]"></div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00a8cc] text-white rounded flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Customer Support</h3>
                    <p className="text-gray-600">0757251514</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00a8cc] text-white rounded flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600">ricmuka93garage@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00a8cc] text-white rounded flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Kampala, Uganda</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00a8cc] text-white rounded flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-white p-8 rounded shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Row */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00a8cc]"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00a8cc]"
                    required
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00a8cc]"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00a8cc]"
                  />
                </div>

                {/* Subject */}
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00a8cc]"
                  required
                />

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00a8cc] resize-none"
                  required
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#00a8cc] text-white py-3 rounded font-bold uppercase hover:bg-[#0088aa] transition-colors"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'What are your service hours?',
                a: 'We are open Monday to Sunday from 8:00 AM to 6:00 PM. We are closed on Sundays and public holidays.',
              },
              {
                q: 'Do you offer warranty on repairs?',
                a: 'Yes, we provide warranties on all our repair work. Details depend on the type of service performed.',
              },
              {
                q: 'Can I schedule a service online?',
                a: 'You can contact us via this form or call us directly to schedule your service appointment.',
              },
              {
                q: 'Do you service all vehicle types?',
                a: 'We service most vehicle makes and models. Contact us to confirm if we service your specific vehicle.',
              },
            ].map((faq, index) => (
              <div key={index} className="border-l-4 border-[#00a8cc] pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
