import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  ArrowLeft,
  BookOpen,
  UserCircle,
  Settings,
  HelpCircle,
  MessageCircle,
  ChevronRight,
  PlayCircle,
} from "lucide-react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      icon: <BookOpen className='text-obs-mint' />,
      title: "Getting Started",
      desc: "Learn the basics of creating your first test.",
    },
    {
      icon: <UserCircle className='text-obs-mint' />,
      title: "Student Management",
      desc: "How to invite and manage your test takers.",
    },
    {
      icon: <Settings className='text-obs-mint' />,
      title: "Account Settings",
      desc: "Manage your subscription and team members.",
    },
    {
      icon: <ShieldCheck className='text-obs-mint' />,
      title: "Security & Proctoring",
      desc: "Setting up AI proctoring and browser locks.",
    },
    {
      icon: <PlayCircle className='text-obs-mint' />,
      title: "Video Tutorials",
      desc: "Step-by-step visual guides for all features.",
    },
    {
      icon: <HelpCircle className='text-obs-mint' />,
      title: "Taking a Test",
      desc: "Information for students and test-takers.",
    },
  ];

  return (
    <div className='min-h-screen bg-obs-dark text-white selection:bg-obs-mint selection:text-obs-dark'>
      {/* Header */}
      <nav className='border-b border-white/10 py-6'>
        <div className='max-w-6xl mx-auto px-6 flex justify-between items-center'>
          <Link to='/' className='flex items-center gap-2'>
            <div className='bg-obs-mint p-1 rounded'>
              <ShieldCheck className='text-obs-dark w-5 h-5' />
            </div>
            <span className='font-bold tracking-tight text-xl'>
              observeX <span className='text-white/50 font-normal'>Help Center</span>
            </span>
          </Link>
          <Link
            to='/signup'
            className='text-sm font-medium bg-obs-mint text-obs-dark px-4 py-2 rounded-lg hover:bg-white transition-colors'>
            Back to Sign up
          </Link>
        </div>
      </nav>

      {/* Hero Search Section */}
      <section className='bg-gradient-to-b from-obs-mint/10 to-transparent py-20 px-6'>
        <div className='max-w-3xl mx-auto text-center space-y-8'>
          <h1 className='text-4xl lg:text-5xl font-extrabold'>How can we help you?</h1>
          <div className='relative'>
            <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-white/40' size={20} />
            <input
              type='text'
              placeholder="Search for articles (e.g. 'how to proctor', 'pricing')..."
              className='w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-6 focus:outline-none focus:border-obs-mint focus:ring-1 focus:ring-obs-mint transition-all text-lg'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className='max-w-6xl mx-auto px-6 py-20'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className='p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-obs-mint/50 transition-all cursor-pointer group'>
              <div className='bg-obs-dark p-3 rounded-xl w-fit mb-6 border border-white/5 group-hover:scale-110 transition-transform'>
                {cat.icon}
              </div>
              <h3 className='text-xl font-bold mb-3'>{cat.title}</h3>
              <p className='text-white/50 text-sm leading-relaxed mb-6'>{cat.desc}</p>
              <div className='flex items-center text-obs-mint text-sm font-bold gap-1 group-hover:gap-2 transition-all'>
                View Articles <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className='max-w-4xl mx-auto px-6 py-20 border-t border-white/10'>
        <h2 className='text-3xl font-bold mb-10 text-center'>Frequently Asked Questions</h2>
        <div className='space-y-4'>
          {[
            "How do I reset my password?",
            "Can I use ObserveX for free?",
            "What devices are supported for proctoring?",
            "How do I export my test results to Excel?",
          ].map((faq, i) => (
            <div
              key={i}
              className='flex items-center justify-between p-5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors'>
              <span className='font-medium text-white/80'>{faq}</span>
              <ChevronRight size={18} className='text-white/20' />
            </div>
          ))}
        </div>
      </section>

      {/* Support Footer */}
      <section className='max-w-6xl mx-auto px-6 py-20 mb-20'>
        <div className='bg-obs-mint rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10'>
          <div className='text-obs-dark max-w-lg'>
            <h2 className='text-3xl font-extrabold mb-4'>Still need help?</h2>
            <p className='text-obs-dark/70 font-medium'>
              Our support team is available 24/7 to help you with any technical difficulties or billing questions.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <a
              href='tel:01644411029'
              className='flex items-center justify-center gap-2 bg-obs-dark text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform'>
              <MessageCircle size={20} /> Contact Support
            </a>
          </div>
        </div>
      </section>

      <footer className='py-10 text-center text-white/20 text-sm border-t border-white/5'>
        &copy; 2026 observeX Knowledge Base. All rights reserved.
      </footer>
    </div>
  );
};

export default HelpCenter;
