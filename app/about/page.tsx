'use client';

import React from 'react';
import Image from 'next/image';

import { Header } from '@/components/header';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

type Reason = { title: string; desc: string };

const reasons: Reason[] = [
  { title: '30+ Years of Experience', desc: 'Trusted workmanship and consistent delivery.' },
  { title: '50 Expert Technicians', desc: 'Capacity to handle routine and complex repairs.' },
  { title: 'Mon–Sun Operations', desc: 'Convenient schedules for individuals and fleets.' },
  { title: 'Competitive Prices', desc: 'Good value without cutting corners.' },
  { title: 'Instant Quotes', desc: 'Quick inspection and clear cost guidance.' },
  { title: 'Latest Technology', desc: 'Modern diagnostics for accurate fault detection.' },
];

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">{children}</div>
    </section>
  );
}

function IntroCopy() {
  return (
    <div>
      {/* Drop-cap line */}
      <div className="flex items-start gap-2">
        <span className="text-7xl font-serif text-gray-300 leading-none">W</span>
        <p className="text-gray-700 leading-relaxed text-lg pt-3">
          e specialize in giving our customers a{' '}
          <span className="font-semibold">first-class, reliable service</span>. With over{' '}
          <span className="font-semibold">50 technicians on-site</span>, we’ll have you back on
          the road in no time.
        </p>
      </div>

      <div className="w-16 h-1 bg-[#00a8cc] my-8" />

      <h3 className="text-2xl font-bold text-gray-900 mb-4">WHY CHOOSE US?</h3>
      <p className="text-gray-600 mb-8">
        We focus on accuracy, speed, and quality control — for both private vehicles and fleets.
      </p>

      {/* Reasons (better than arrows) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="rounded-xl border border-gray-200 bg-white p-5 hover:border-[#00a8cc]/40 hover:shadow-sm transition"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#00a8cc]" />
              <div>
                <p className="font-semibold text-gray-900">{r.title}</p>
                <p className="text-sm text-gray-600 mt-1">{r.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-bold text-gray-900">Need service or a quick inspection?</p>
          <p className="text-sm text-gray-600 mt-1">
            We can diagnose first and advise before repairs.
          </p>
        </div>
        <button className="bg-[#00a8cc] text-white px-7 py-3 font-bold uppercase tracking-wide rounded-full hover:bg-[#0088aa] transition-colors shadow">
          More About Us
        </button>
      </div>
    </div>
  );
}

function MechanicImage() {
  /**
   * Using next/image:
   * - unoptimized helps if you’re using output: 'export' or if image optimization is misconfigured.
   * - bg-gray placeholder ensures you SEE the container even if image path is wrong.
   */
  return (
    <div className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg bg-gray-200">
      <Image
        src="/garage/mechanic.jpg"
        alt="Richard Mukasa's Garage mechanic at work"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority
        unoptimized
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-3 border border-white/50">
          <p className="text-sm font-semibold text-gray-900">Richard Mukasa&apos;s Garage</p>
          <p className="text-xs text-gray-600 mt-0.5">
            Skilled hands. Modern diagnostics. Reliable repairs.
          </p>
        </div>
      </div>
    </div>
  );
}

function StatsRow() {
  const stats = [
    { value: '30+', label: 'Years Experience' },
    { value: '50+', label: 'Technicians' },
    { value: 'Mon–Sun', label: 'Open Days' },
    { value: 'Fast', label: 'Turnaround' },
  ];

  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-xl border border-gray-200 p-5 bg-white">
          <p className="text-2xl font-bold text-gray-900">{s.value}</p>
          <p className="text-sm text-gray-600 mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <PageShell>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <IntroCopy />
          <div>
            <MechanicImage />
            <StatsRow />
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
