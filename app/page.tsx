'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Header } from '@/components/header';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />

      {/* HERO / SLIDE */}
      <section className="relative">
        <div className="relative h-[520px] md:h-[620px] w-full overflow-hidden">
          <Image
            src="/garage/mech.jpg"
            alt="Garage service"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized
          />

          {/* overlays for readability */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

          <div className="absolute inset-0">
            <div className="max-w-6xl mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <p className="text-white/80 text-sm uppercase tracking-widest">
                  Richard Mukasa&apos;s Garage
                </p>

                <h1 className="mt-3 text-white text-4xl md:text-6xl font-serif leading-tight">
                  Reliable vehicle servicing, diagnostics & repairs
                </h1>

                <p className="mt-5 text-white/85 text-lg md:text-xl leading-relaxed">
                  From routine maintenance to electrical faults, brakes, tyre work and AC —
                  we keep you safely on the road with quality workmanship and genuine parts.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full bg-[#00a8cc] text-white px-7 py-3 font-bold uppercase tracking-wide hover:bg-[#0088aa] transition-colors shadow"
                  >
                    View Services
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white/95 text-gray-900 px-7 py-3 font-bold uppercase tracking-wide hover:bg-white transition-colors shadow"
                  >
                    Get a Quote
                  </Link>
                </div>

                {/* quick trust points */}
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-white/85 text-sm">
                  <span>• 30+ years experience</span>
                  <span>• 50+ technicians</span>
                  <span>• Open Mon–Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK NAV (no redundant data) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Explore
              </h2>
              <p className="text-gray-600 mt-2">
                Jump straight to what you need — no repeated sections here.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HomeCard
              title="About Us"
              desc="Learn who we are and why customers trust our workmanship."
              href="/about"
              tag="Company"
            />
            <HomeCard
              title="Services"
              desc="Routine maintenance, brakes, tyres, electrical and AC support."
              href="/services"
              tag="Core"
            />
            <HomeCard
              title="Specialists"
              desc="See the brands we work on and what we specialize in."
              href="/specialists"
              tag="Brands"
            />
            <HomeCard
              title="Contact"
              desc="Get directions, call, or request a quote."
              href="/contact"
              tag="Talk"
            />
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Need a quick inspection before repairs?
              </h3>
              <p className="text-gray-600 mt-2">
                We diagnose first, explain the issue, then recommend the best fix.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#00a8cc] text-white px-7 py-3 font-bold uppercase tracking-wide hover:bg-[#0088aa] transition-colors shadow"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-900 px-7 py-3 font-bold uppercase tracking-wide hover:border-[#00a8cc] hover:text-[#00a8cc] transition-colors"
              >
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function HomeCard({
  title,
  desc,
  href,
  tag,
}: {
  title: string;
  desc: string;
  href: string;
  tag: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition overflow-hidden"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00a8cc]">
          {tag}
        </span>
        <span className="text-sm text-gray-400 group-hover:text-[#00a8cc] transition">
          →
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold text-gray-900 group-hover:text-[#00a8cc] transition">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>

      <div className="mt-6 h-1 w-16 bg-gray-200 group-hover:bg-[#00a8cc] transition" />
    </Link>
  );
}
