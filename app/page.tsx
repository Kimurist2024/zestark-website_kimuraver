'use client';

import React from 'react';
import Image from 'next/image';

{/* ====== Layout ====== */} 
import StarryBackground from '@/components/background/starry-background';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

{/* ====== Sections ====== */} 
import HomeSection from '../components/sections/home-section';
import ServicesSection from '../components/sections/services-section';
import AboutSection from '../components/sections/about-section';
import BlogSection from '../components/sections/blog-section';
import ContactSection from '../components/sections/contact-section';

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-black text-white">

      {/* 星空背景 */}
      <StarryBackground />

      {/* ===== HEADER（ロゴ + ナビ） ===== */}
      <header className="relative z-20 w-full">
        <div className="container mx-auto flex items-center justify-between py-6 px-4">

          {/* ロゴ */}
          <div className="logo-area">
            <Image
              src="/logo.svg"
              alt="Zestark Logo"
              width={180}
              height={60}
              priority
            />
          </div>

          {/* ナビゲーション */}
          <Navbar />
        </div>
      </header>

      {/* ====== MAIN CONTENT（各セクション）====== */}
      <main className="relative z-10 w-full">

        {/* Home */}
        <section id="home-section">
          <HomeSection />
        </section>

        {/* Services */}
        <section id="services-section">
          <ServicesSection />
        </section>

        {/* About */}
        <section id="aboutus-section">
          <AboutSection />
        </section>

        {/* Blog */}
        <section id="blog-section">
          <BlogSection />
        </section>

        {/* Contact */}
        <section id="contact-section">
          <ContactSection />
        </section>

      </main>

      {/* ===== FOOTER ===== */}
      <Footer />

    </div>
  );
}

