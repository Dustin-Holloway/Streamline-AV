"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">StreamlineAV</span>
          <div className="space-x-4">
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-screen pt-16 bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to StreamlineAV
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Seamless audio-visual and smart home solutions designed for the way
            you live.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="h-screen pt-30 bg-white">
        <div className="flex-col text-center justify-center items-center h-full px-4">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4 py-5">
            About StreamlineAV
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            At StreamlineAV, we specialize in transforming everyday spaces into
            intelligent, immersive environments. From home theaters and surround
            sound to smart lighting, security, and automation, we bring
            cutting-edge technology together to enhance comfort, convenience,
            and connection.
            <br />
            <br />
            Founded in 2017, StreamlineAV is built on over 20 years of hands-on
            experience in home entertainment, networking, and smart systems.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="h-screen py-20 bg-gray-100">
        <div className="flex-col items-center justify-center text-center h-full pt-20">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Our Services
          </h2>
          <ul className="text-gray-700 max-w-2xl mx-auto space-y-2">
            <li>- Home Theater Installation</li>
            <li>- Conference Room AV Systems</li>
            <li>- Smart Home Integration</li>
            <li>- Custom Audio Solutions</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-white"
      >
        <div className="max-w-xl px-4 text-center justify-center">
          <h3 className="text-3xl font-semibold mb-4">Get In Touch</h3>

          <p className="mb-6 text-gray-700">
            We&apos;d love to hear from you. Whether you&apos;re looking to
            upgrade your home entertainment system or need a custom AV solution
            for your business — let&apos;s connect!
          </p>
          <a
            href="mailto:streamlineav@outlook.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
