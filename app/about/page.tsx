"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun, ArrowLeft, Target, Sparkles, User, Search } from "lucide-react"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode for this page

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
        <Link
          href="/"
          className={`flex items-center text-xl font-medium hover:opacity-70 transition-opacity ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
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

      {/* Main Content */}
      <main className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className={`text-8xl font-bold tracking-wider ${isDarkMode ? "text-white" : "text-black"}`}>
              ABOUT ME
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
            {/* Photo Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 h-[600px]">
                {/* First photo - top left, larger */}
                <div className="relative">
                  <Image
                    src="https://i.postimg.cc/MpsC4gDF/1.jpg"
                    alt="Omayer Zishan"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Second and third photos - right column */}
                <div className="space-y-4">
                  <div className="relative h-[290px]">
                    <Image
                      src="https://i.postimg.cc/Hk3Zn58c/9001b8fa5ba08b077b3ba783024ae6ab.jpg"
                      alt="Omayer Zishan"
                      width={400}
                      height={290}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="relative h-[290px]">
                    <Image
                      src="https://i.postimg.cc/J48CBN0P/1735834429307.jpg"
                      alt="Omayer Zishan"
                      width={400}
                      height={290}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <div className="text-xl leading-relaxed">
                <p className={`mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
                  Hi, I'm Omayer Zishan! I'm a{" "}
                  <span
                    className="font-bold"
                    style={{
                      background: "linear-gradient(45deg, #00f5ff, #ff00ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    multidisciplinary designer
                  </span>{" "}
                  specializing in graphic, product, UI/UX, and brand design, with extensive experience leading creative
                  projects that combine strategy and visual storytelling.
                </p>

                <p className={`mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
                  My passion for design goes beyond aesthetics—I'm fascinated by how thoughtful, user-centered design
                  can solve problems and create meaningful experiences for both users and brands.
                </p>

                <p className={`mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
                  I spend my time exploring new design tools, conducting user research, and crafting innovative
                  solutions that balance creativity with functionality.
                </p>

                <p className={`mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
                  <span
                    className="font-bold"
                    style={{
                      background: "linear-gradient(45deg, #00f5ff, #ff00ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    I've been shaping brands and digital experiences my entire career — even before I fully realized the
                    power of great design.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="w-full">
              {/* Years Badge */}
              <div className="flex justify-start mb-8">
                <div
                  className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-medium ${
                    isDarkMode ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  5+ Years in the industry
                </div>
              </div>

              {/* Separator Line */}
              <div className={`w-full h-px mb-12 ${isDarkMode ? "bg-white" : "bg-black"}`}></div>

              {/* Experience List */}
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                  <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>2023 - 2025</div>
                  <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>
                    Beximco Pharmaceuticals Ltd.
                  </div>
                  <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>Senior Designer</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                  <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>2022 - 2023</div>
                  <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>Premiummultishop</div>
                  <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>Brand Designer</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                  <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>2020 - 2022</div>
                  <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>Buzz Communication</div>
                  <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>Design Director</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                  <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>2019 - 2020</div>
                  <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>United Group</div>
                  <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>Graphic Designer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Collaborations Section */}
          <div className="mb-16">
            <div className="w-full">
              {/* Collaborations Badge */}
              <div className="flex justify-start mb-8">
                <div
                  className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-medium ${
                    isDarkMode ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  200+ Collaborations
                </div>
              </div>

              {/* Separator Line */}
              <div className={`w-full h-px mb-12 ${isDarkMode ? "bg-white" : "bg-black"}`}></div>

              {/* Collaboration Text */}
              <div className="max-w-4xl mx-auto space-y-8">
                <p className={`text-xl leading-relaxed ${isDarkMode ? "text-white" : "text-black"}`}>
                  I team up with companies, big and small, spanning all sorts of industries, each redefining how we
                  live, work, and interact with the world.
                </p>

                <p className={`text-xl leading-relaxed ${isDarkMode ? "text-white" : "text-black"}`}>
                  Whether it's helping startups find their voice or keeping established brands relevant, my role is to{" "}
                  <span className="italic">align every aspect of their presence with who they are</span>—through
                  strategy, design, and storytelling.
                </p>
              </div>
            </div>
          </div>

          {/* Hours Invested Section */}
          <div className="mb-16">
            <div className="w-full">
              {/* Hours Badge */}
              <div className="flex justify-start mb-8">
                <div
                  className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-medium ${
                    isDarkMode ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  5K+ Hours invested
                </div>
              </div>

              {/* Separator Line */}
              <div className={`w-full h-px mb-12 ${isDarkMode ? "bg-white" : "bg-black"}`}></div>

              {/* Skills Grid */}
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                  {/* Column 1 */}
                  <div className="space-y-6">
                    <div className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>Creative Direction</div>
                    <div className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>Marketing Campaigns</div>
                    <div className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>User Research</div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-6">
                    <div className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>Brand Design</div>
                    <div className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>Web Design</div>
                    <div className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>Accessibility</div>
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-6">
                    <div className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>Visual Strategy</div>
                    <div className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>Experience Design</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophies Section */}
          <div className="mb-16">
            <div className="w-full">
              {/* Header with Number and Arrow */}
              <div className="flex items-start mb-8">
                <div className="relative">
                  {/* Large Number 6 */}
                  <div className="text-8xl font-bold text-blue-500 mr-4">6</div>
                  {/* Curved Arrow */}
                  <div className="absolute -top-4 -right-8">
                    <svg
                      width="60"
                      height="40"
                      viewBox="0 0 60 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-500"
                    >
                      <path
                        d="M5 35C15 25 25 15 35 10C40 7.5 45 6 50 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path d="M45 5L50 8L47 12" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 mt-4">
                  {/* Hover Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm font-medium mb-4">
                    Hover to see more
                  </div>
                  {/* Title */}
                  <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>
                    Here are 6 philosophies you can always expect from me
                  </h2>
                </div>
              </div>

              {/* Philosophy Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {/* Card 1 */}
                <div
                  className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "bg-gray-900 border border-gray-800" : "bg-gray-100 border border-gray-200"
                  } hover:bg-black hover:text-white`}
                >
                  <div className="mb-4 group-hover:hidden">
                    <User className={`h-8 w-8 ${isDarkMode ? "text-white" : "text-black"}`} />
                  </div>
                  <h3
                    className={`text-lg font-medium ${isDarkMode ? "text-white group-hover:text-white" : "text-black group-hover:text-white"}`}
                  >
                    Design should be at the strategy table
                  </h3>
                  <p className="hidden group-hover:block">
                    The best design decisions come from being part of the bigger conversation.
                  </p>
                </div>

                {/* Card 2 */}
                <div
                  className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "bg-gray-900 border border-gray-800" : "bg-gray-100 border border-gray-200"
                  } hover:bg-black hover:text-white`}
                >
                  <div className="mb-4 group-hover:hidden">
                    <Target className={`h-8 w-8 ${isDarkMode ? "text-white" : "text-black"}`} />
                  </div>
                  <h3
                    className={`text-lg font-medium ${isDarkMode ? "text-white group-hover:text-white" : "text-black group-hover:text-white"}`}
                  >
                    First impressions matters
                  </h3>
                  <p className="hidden group-hover:block">
                    Visuals often speak before words. My job is to create visuals that do the talking.
                  </p>
                </div>

                {/* Card 3 */}
                <div
                  className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "bg-gray-900 border border-gray-800" : "bg-gray-100 border border-gray-200"
                  } hover:bg-black hover:text-white`}
                >
                  <div className="mb-4 group-hover:hidden">
                    <Sparkles className={`h-8 w-8 ${isDarkMode ? "text-white" : "text-black"}`} />
                  </div>
                  <h3
                    className={`text-lg font-medium ${isDarkMode ? "text-white group-hover:text-white" : "text-black group-hover:text-white"}`}
                  >
                    I get things done, the right way
                  </h3>
                  <p className="hidden group-hover:block">
                    No matter the challenge, I deliver — on time, every time, without sacrificing quality.
                  </p>
                </div>

                {/* Card 4 */}
                <div
                  className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "bg-gray-900 border border-gray-800" : "bg-gray-100 border border-gray-200"
                  } hover:bg-black hover:text-white`}
                >
                  <div className="mb-4 group-hover:hidden">
                    <User className={`h-8 w-8 ${isDarkMode ? "text-white" : "text-black"}`} />
                  </div>
                  <h3
                    className={`text-lg font-medium ${isDarkMode ? "text-white group-hover:text-white" : "text-black group-hover:text-white"}`}
                  >
                    I like to keep things easy for everyone
                  </h3>
                  <p className="hidden group-hover:block">
                    That means clear communication and going the extra mile whenever I can.
                  </p>
                </div>

                {/* Card 5 */}
                <div
                  className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "bg-gray-900 border border-gray-800" : "bg-gray-100 border border-gray-200"
                  } hover:bg-black hover:text-white`}
                >
                  <div className="mb-4 group-hover:hidden">
                    <div className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>Aa</div>
                  </div>
                  <h3
                    className={`text-lg font-medium ${isDarkMode ? "text-white group-hover:text-white" : "text-black group-hover:text-white"}`}
                  >
                    I'm all about typography
                  </h3>
                  <p className="hidden group-hover:block">
                    Typography plays a crucial role in my design work. I believe it can make or break a design.
                  </p>
                </div>

                {/* Card 6 */}
                <div
                  className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "bg-gray-900 border border-gray-800" : "bg-gray-100 border border-gray-200"
                  } hover:bg-black hover:text-white`}
                >
                  <div className="mb-4 group-hover:hidden">
                    <Search className={`h-8 w-8 ${isDarkMode ? "text-white" : "text-black"}`} />
                  </div>
                  <h3
                    className={`text-lg font-medium ${isDarkMode ? "text-white group-hover:text-white" : "text-black group-hover:text-white"}`}
                  >
                    I'm curious and love learning
                  </h3>
                  <p className="hidden group-hover:block">
                    Especially about how creativity and technology intertwine and grow together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}
