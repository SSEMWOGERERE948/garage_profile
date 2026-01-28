'use client';

import Image from 'next/image';
import { Header } from '@/components/header';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const blogPosts = [
  {
    date: '07',
    month: 'MAR',
    title: "Do I Have To Use the Manufacturer's Oil?",
    excerpt:
      'Ten or 15 years ago, choosing the oil for your car was simple. All you needed to know was the grade and whether it was synthetic or not. Today, many vehicle manufacturers are requiring specific oil specifications...',
    image: '/garage/oil_change.png',
  },
  {
    date: '17',
    month: 'MAR',
    title: 'New Car Tyre Purchase Guide',
    excerpt:
      'Tyres are an extremely important part of keeping your car, not to mention you and your passengers safe on the road. With so many different types and brands available, choosing the right tyre can be challenging...',
    image: '/garage/tyre_and_wheel_service.jpg',
  },
  {
    date: '30',
    month: 'APR',
    title: 'How Often Should You Change the Engine Air Filter?',
    excerpt:
      'Vehicle maintenance schedules vary on how often the air filter should be changed. On most engines, the recommended replacement interval is every 15,000 to 30,000 miles or annually, depending on conditions...',
    image: '/garage/engine_repair.jpeg',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />

      {/* Blog Header */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-serif text-gray-900 mb-4">
            OUR BLOG
          </h1>
          <p className="text-gray-600 text-lg">
            Practical maintenance tips and insights from our workshop
          </p>
          <div className="w-16 h-1 bg-[#00a8cc] mt-6" />
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white overflow-hidden rounded hover:shadow-lg transition-shadow cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    unoptimized
                  />

                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-[#00a8cc] text-white px-4 py-3 text-center rounded shadow">
                    <div className="text-2xl font-bold leading-none">
                      {post.date}
                    </div>
                    <div className="text-xs font-semibold">
                      {post.month}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#00a8cc] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <span className="text-[#00a8cc] hover:text-[#0088aa] font-semibold text-sm transition-colors">
                    Read More →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
