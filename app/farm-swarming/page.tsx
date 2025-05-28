"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun, ArrowLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function FarmSwarmingProject() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-8 py-6">
        {/* Back Button */}
        <Link href="/" className="flex items-center text-xl font-medium hover:opacity-70 transition-opacity">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Omayer Zishan.
        </Link>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-3">
          <Sun className={`h-4 w-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`} />
          <div className="relative">
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              className={`data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300 ${
                isDarkMode ? "shadow-[0_0_10px_rgba(59,130,246,0.5)]" : ""
              }`}
            />
          </div>
          <Moon className={`h-4 w-4 ${isDarkMode ? "text-blue-400" : "text-gray-400"}`} />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link
            href="/#work"
            className={`text-base font-medium transition-colors ${
              isDarkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-600"
            }`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-base font-medium transition-colors ${
              isDarkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-600"
            }`}
          >
            About
          </Link>
          <Link
            href="https://www.linkedin.com/in/omayer-zishan-92a521321/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-base font-medium transition-colors ${
              isDarkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-600"
            }`}
          >
            LinkedIn
          </Link>
        </div>
      </nav>

      {/* Project Content */}
      <main className="px-8 pt-8 pb-16 max-w-4xl mx-auto">
        {/* Project Title and Details */}
        <div className="mb-16">
          <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Farm Swarming</h1>
          <h2 className={`text-2xl mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Born from necessity, built for community.
          </h2>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3
                className={`text-sm font-medium mb-2 uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Role
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Senior Designer</p>
            </div>
            <div>
              <h3
                className={`text-sm font-medium mb-2 uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Agency
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Independent</p>
            </div>
            <div>
              <h3
                className={`text-sm font-medium mb-2 uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Deliverables
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Brand Identity & Website
                <br />
                Marketing Materials
              </p>
            </div>
            <div>
              <h3
                className={`text-sm font-medium mb-2 uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                My Role
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Brand Designer</p>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            When the pandemic disrupted food systems, our general store became an opportunity where an online
            marketplace that connects neighborhood families with nearby farmers and makers that existed as a resource
            became a lifeline for our community. Farm Swarming was born.
          </p>
          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Farm Swarming wasn't just about transactions, it was about relationships. We designed an e-commerce
            experience that honored that connection - clean, approachable, and grounded in the real stories behind the
            food.
          </p>
        </section>

        {/* Hero Image Section */}
        <div className="mb-16">
          <Image
            src="/images/fs-1.avif"
            alt="Farm Swarming Hero"
            width={1200}
            height={800}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Eggs Section */}
        <section className="mb-16">
          <div className="mb-8">
            <Image
              src="/images/fs-2.avif"
              alt="Farm Fresh Eggs"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Fresh Produce Section */}
        <section className="mb-16">
          <div className="mb-8">
            <Image
              src="/images/fs-3.avif"
              alt="Fresh Produce"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="text-center">
            <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
              Taste the difference with Farm Swarming's farm-fresh produce, picked at the peak of ripeness.
            </h3>
          </div>
        </section>

        {/* Product Categories */}
        <section className="mb-16">
          <div className="mb-8">
            <Image
              src="/images/fs-4.avif"
              alt="Product Categories"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Community Map */}
        <section className="mb-16">
          <div className="mb-8">
            <Image
              src="/images/fs-5.avif"
              alt="Upstate New York Community"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="text-center">
            <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
              Upstate New York Proud
            </h3>
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Supporting our local farming community and connecting neighbors with fresh, sustainable produce from farms
              within a 50-mile radius.
            </p>
          </div>
        </section>

        {/* Brand Identity */}
        <section className="mb-16">
          <div className="mb-8">
            <Image
              src="/images/fs-6.avif"
              alt="Brand Identity"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Interactive Animation */}
        <section className="mb-16">
          <div className="mb-8">
            <Image
              src="/images/fs-8.gif"
              alt="Interactive Animation"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <div className="mb-8">
            <Image
              src="/images/fs-8-1.avif"
              alt="Typography System"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Final Logo */}
        <section className="mb-16">
          <div className="mb-8">
            <Image
              src="/images/fs-9.avif"
              alt="Farm Swarming Logo"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="text-center">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
              The design direction pairs simplicity with function—a fresh, versatile logo a dynamic layout showcases
              products and seamlessly integrates multiple touchpoints for a streamlined brand experience.
            </h3>
          </div>
        </section>

        {/* Back to Top */}
        <div className="text-center pt-8">
          <Link
            href="#top"
            className={`text-lg font-medium transition-colors ${
              isDarkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-600"
            }`}
          >
            Back to Top ↑
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}
