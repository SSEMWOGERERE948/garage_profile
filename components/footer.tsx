'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white py-12 border-t border-[#3a4f63]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-[#00a8cc]">Richard Mukasa&apos;s Garage</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional motor vehicle repair and maintenance services in Kamwokya. Quality service you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-[#00a8cc] transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-[#00a8cc] transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-[#00a8cc] transition-colors">Services</a></li>
              <li><a href="/blog" className="hover:text-[#00a8cc] transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-[#00a8cc] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white">CONTACT INFO</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#00a8cc]" />
                <a href="tel:+256757251514" className="hover:text-[#00a8cc] transition-colors">0757 251 514</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#00a8cc]" />
                <a href="mailto:ricmuka93garage@gmail.com" className="hover:text-[#00a8cc] transition-colors">ricmuka93garage@gmail.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#00a8cc] mt-0.5 flex-shrink-0" />
                <span>Kamwokya, Kampala<br />Uganda</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3a4f63] pt-8 flex items-center justify-between">
          <p className="text-gray-500 text-sm">
            © 2026 Richard Mukasa&apos;s Garage. All rights reserved.
          </p>
          <button className="w-10 h-10 bg-[#00a8cc] hover:bg-[#0088aa] text-white rounded flex items-center justify-center transition-colors">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
