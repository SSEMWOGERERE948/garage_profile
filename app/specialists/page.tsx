'use client';

import { Header } from '@/components/header';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const brands = [
  { name: 'BMW', logo: '/garage/bmw_logo.png' },
  { name: 'Audi', logo: '/garage/audi_logo.png' },
  { name: 'Toyota', logo: '/garage/toyota.png' },
  { name: 'Nissan', logo: '/garage/nissan_logo.png' },
  { name: 'Honda', logo: '/garage/honda.jpg' },
  { name: 'Mercedes-Benz', logo: '/garage/Mercedes-Logo.svg.png' },
  { name: 'Land Rover', logo: '/garage/land_rover.jpg' },
  { name: 'Lexus', logo: '/garage/lexus_logo.png' },
  { name: 'Mitsubishi', logo: '/garage/mitsubishi.png' },
  { name: 'Infiniti', logo: '/garage/Infiniti_logo.svg.png' },
  { name: 'Jeep', logo: '/garage/Jeep_logo.svg.png' },
  { name: 'Volvo', logo: '/garage/volvo.jpg' },
];

export default function Specialists() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6">WE SPECIALIZE IN</h2>
            <div className="w-12 h-1 bg-[#00a8cc] mb-6" />

            <p className="text-gray-700 mb-4">
              Since 1993 <strong>Richard Mukasa&apos;s Garage</strong> has provided
              reliable and affordable vehicle service across Uganda.
            </p>

            <p className="text-gray-700">
              We service a wide range of vehicles using genuine spare parts and
              expert workmanship.
            </p>
          </div>

          {/* Brands */}
          <div className="grid grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="h-40 border-2 border-gray-300 rounded flex flex-col items-center justify-center hover:border-[#00a8cc] hover:shadow-lg transition group"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-16 mb-3 grayscale group-hover:grayscale-0 transition"
                />
                <span className="text-xs font-semibold group-hover:text-[#00a8cc]">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
