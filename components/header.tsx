'use client';

import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export function Header() {
  return (
    <div className="border-b border-gray-200 bg-white py-3">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#00a8cc]">RICHARD MUKASA&apos;S GARAGE</h1>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm">
            <Phone size={16} className="text-[#00a8cc]" />
            <span className="text-gray-700 font-semibold">0757 251 514</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail size={16} className="text-[#00a8cc]" />
            <a href="mailto:ricmuka93garage@gmail.com" className="text-[#00a8cc] hover:text-[#0088aa]">
              ricmuka93garage@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
