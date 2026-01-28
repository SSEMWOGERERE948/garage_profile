'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';

import { Header } from '@/components/header';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

import {
  Wrench,
  ShieldCheck,
  Clock,
  BadgeCheck,
  Search,
  ArrowRight,
} from 'lucide-react';

type ServiceCategory =
  | 'All'
  | 'Maintenance'
  | 'Tyres'
  | 'Repairs'
  | 'Electrical'
  | 'Brakes'
  | 'AC';

type Service = {
  title: string;
  description: string;
  image: string;
  category: Exclude<ServiceCategory, 'All'>;
  highlights: string[];
};

const services: Service[] = [
  {
    title: 'MOTOR VEHICLE ROUTINE MAINTENANCE AND SERVICE',
    description:
      'Complete routine servicing including oil change, filter replacement, and a full vehicle inspection (fluids, brakes, tyres, belts, leaks, and safety checks).',
    image: '/garage/oil_change.png',
    category: 'Maintenance',
    highlights: ['Oil + filter', 'Full inspection', 'Service record update'],
  },
  {
    title: 'TIRE & WHEEL SERVICE',
    description:
      'Professional tire inspection, balancing, replacement, puncture repair, and wheel alignment to improve safety and fuel economy.',
    image: '/garage/tyre_and_wheel_service.jpg',
    category: 'Tyres',
    highlights: ['Wheel alignment', 'Balancing', 'Puncture repair'],
  },
  {
    title: 'ENGINE REPAIR & DIAGNOSTICS',
    description:
      'Advanced engine diagnostics and mechanical repairs for all major brands. We identify root causes (misfires, overheating, leaks, sensor issues) and fix properly.',
    image: '/garage/engine_repair.jpeg',
    category: 'Repairs',
    highlights: ['Scan diagnostics', 'Leak checks', 'Performance tuning'],
  },
  {
    title: 'ELECTRICAL SYSTEMS',
    description:
      'Electrical fault diagnosis and repairs: wiring, sensors, battery, alternator, starter, lights, charging issues, and intermittent faults.',
    image: '/garage/wiring.jpg',
    category: 'Electrical',
    highlights: ['Battery + alternator', 'Wiring repair', 'Fault tracing'],
  },
  {
    title: 'BRAKE SERVICE & REPAIR',
    description:
      'Brake inspections, pad replacement, disc skimming, fluid service, and brake system overhaul. Safety-first checks and test drive validation.',
    image: '/garage/brake_repair.jpg',
    category: 'Brakes',
    highlights: ['Pads + discs', 'Brake fluid', 'Safety inspection'],
  },
  {
    title: 'AC & CLIMATE CONTROL',
    description:
      'Air conditioning repair: gas refill, leak detection, compressor diagnosis, cabin cooling issues, and full climate control servicing.',
    image: '/garage/ac_repair.jpg',
    category: 'AC',
    highlights: ['Leak detection', 'Refrigerant service', 'Cooling performance'],
  },
];

const categories: ServiceCategory[] = [
  'All',
  'Maintenance',
  'Tyres',
  'Repairs',
  'Electrical',
  'Brakes',
  'AC',
];

function categoryPillClasses(active: boolean) {
  return active
    ? 'bg-[#00a8cc] text-white border-[#00a8cc]'
    : 'bg-white text-gray-700 border-gray-200 hover:border-[#00a8cc] hover:text-[#00a8cc]';
}

export default function Services() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All');
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Service | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services.filter((s) => {
      const inCategory =
        activeCategory === 'All' ? true : s.category === activeCategory;
      const inQuery =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.highlights.some((h) => h.toLowerCase().includes(q));
      return inCategory && inQuery;
    });
  }, [query, activeCategory]);

  function openDetails(service: Service) {
    setSelected(service);
    setOpen(true);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,#00a8cc_0,transparent_35%),radial-gradient(circle_at_80%_30%,#111827_0,transparent_40%),radial-gradient(circle_at_50%_90%,#00a8cc_0,transparent_40%)]" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 relative">
          <div className="flex flex-col gap-6">
            <div className="text-sm text-gray-500">
              Home <span className="mx-2">/</span> Services
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                We offer innovative solutions for a wide variety of{' '}
                <span className="font-bold">vehicle repairs</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl">
                From routine maintenance to diagnostics and repairs — we deliver
                reliable workmanship, genuine parts, and transparent service.
              </p>
              <div className="w-20 h-1 bg-[#00a8cc]" />
            </div>

            {/* Trust bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-3 rounded-xl border bg-white p-4">
                <ShieldCheck className="h-5 w-5 text-[#00a8cc]" />
                <div>
                  <p className="font-semibold text-gray-900">Genuine Parts</p>
                  <p className="text-sm text-gray-600">
                    Quality you can trust
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border bg-white p-4">
                <Clock className="h-5 w-5 text-[#00a8cc]" />
                <div>
                  <p className="font-semibold text-gray-900">Fast Turnaround</p>
                  <p className="text-sm text-gray-600">
                    Efficient diagnosis & repair
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border bg-white p-4">
                <BadgeCheck className="h-5 w-5 text-[#00a8cc]" />
                <div>
                  <p className="font-semibold text-gray-900">Trusted Service</p>
                  <p className="text-sm text-gray-600">
                    Skilled technicians
                  </p>
                </div>
              </div>
            </div>

            {/* Search + Filters */}
            <div className="mt-6 flex flex-col lg:flex-row gap-4 lg:items-center">
              <div className="relative w-full lg:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services (e.g., brake, oil, wiring)..."
                  className="pl-9 bg-white"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition ${categoryPillClasses(
                      activeCategory === cat
                    )}`}
                    type="button"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Core Services</h2>
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filtered.length}</span>{' '}
                services
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Wrench className="h-4 w-4" />
              Quality checks before delivery
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-xl border bg-white p-10 text-center">
              <p className="text-gray-900 font-semibold">No services found</p>
              <p className="text-gray-600 mt-1">
                Try a different keyword or category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((service, index) => (
                <button
                  key={`${service.title}-${index}`}
                  onClick={() => openDetails(service)}
                  className="text-left group rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition"
                  type="button"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                    <div className="absolute left-4 top-4">
                      <Badge className="bg-white/90 text-gray-900 border border-white/40">
                        {service.category}
                      </Badge>
                    </div>

                    <div className="absolute left-4 right-4 bottom-4">
                      <h3 className="text-white font-bold leading-snug line-clamp-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.highlights.slice(0, 3).map((h) => (
                        <span
                          key={h}
                          className="text-xs rounded-full border px-3 py-1 text-gray-700 bg-gray-50"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#00a8cc]">
                        View details
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#00a8cc] transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Details Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {selected ? (
            <>
              <div className="relative h-56">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <div className="absolute left-5 bottom-5 right-5">
                  <Badge className="bg-white/90 text-gray-900 border border-white/40">
                    {selected.category}
                  </Badge>
                  <DialogHeader className="mt-3">
                    <DialogTitle className="text-white text-xl md:text-2xl leading-snug">
                      {selected.title}
                    </DialogTitle>
                  </DialogHeader>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  {selected.description}
                </p>

                <div className="mt-5">
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    What’s included
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-sm rounded-full border px-3 py-1 text-gray-800 bg-white"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <div className="text-sm text-gray-600">
                    Need a quote? We can inspect and advise before repairs.
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setOpen(false)}
                      className="rounded-full"
                    >
                      Close
                    </Button>
                    <Button className="rounded-full bg-[#00a8cc] hover:bg-[#0088aa]">
                      Book service
                    </Button>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
