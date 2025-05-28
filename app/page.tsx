"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun, ArrowRight } from "lucide-react"
import Footer from "@/components/footer"

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  const roles = [
    "UI/UX Designer",
    "Web Designer",
    "Brand Designer",
    "User Researcher",
    "Product Designer",
    "User Experience Designer",
    "Design Strategist",
    "Motion Designer",
    "High Fidelity Prototyper",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [roles.length])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-50">
        {/* Logo/Name */}
        <Link href="/" className="text-lg sm:text-xl font-medium hover:opacity-70 transition-opacity">
          Omayer Zishan.
        </Link>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Sun className={`h-3 w-3 sm:h-4 sm:w-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`} />
          <div className="relative">
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              className={`data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300 ${
                isDarkMode ? "shadow-[0_0_10px_rgba(59,130,246,0.5)]" : ""
              } scale-75 sm:scale-100`}
            />
          </div>
          <Moon className={`h-3 w-3 sm:h-4 sm:w-4 ${isDarkMode ? "text-blue-400" : "text-gray-400"}`} />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
          <Link
            href="#featured-projects"
            className={`text-sm sm:text-base font-medium transition-colors ${
              isDarkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-600"
            }`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-sm sm:text-base font-medium transition-colors ${
              isDarkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-600"
            }`}
          >
            About
          </Link>
          <Link
            href="https://www.linkedin.com/in/omayer-zishan-92a521321/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:block text-sm sm:text-base font-medium transition-colors ${
              isDarkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-600"
            }`}
          >
            LinkedIn
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-20 pb-8 sm:pb-12 lg:pb-16">
        {/* Main Heading */}
        <div className="mb-6 sm:mb-8">
          <h1
            className={`text-4xl sm:text-6xl lg:text-8xl font-bold leading-none mb-2 sm:mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-400"}`}
          >
            Omayer Zishan.
          </h1>
          <div className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-none">
            I'm known for{" "}
            <span className="inline-block min-w-[280px] sm:min-w-[400px] lg:min-w-[600px] text-left">
              <span
                className="transition-all duration-500 ease-in-out bg-gradient-to-r from-[rgb(102,126,234)] to-[rgb(118,75,162)] bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {roles[currentRoleIndex]}.
              </span>
            </span>
          </div>
        </div>

        {/* Experience Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mt-16 sm:mt-24 lg:mt-32">
          {/* Current */}
          <div className="space-y-3 sm:space-y-4">
            <h3
              className={`text-xs sm:text-sm font-medium tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              CURRENT
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              UI/UX Designer at{" "}
              <Link
                href="https://www.lemonade.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline transition-colors bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-400 hover:to-pink-400"
              >
                Lemonade
              </Link>
            </p>
          </div>

          {/* Past */}
          <div className="space-y-3 sm:space-y-4">
            <h3
              className={`text-xs sm:text-sm font-medium tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              PAST
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              Former Brand Designer at{" "}
              <Link
                href="https://www.pranfoods.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline transition-colors bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-400 hover:to-pink-400"
              >
                Pran Foods Ltd.
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2
          className={`font-extrabold leading-tight tracking-normal text-left mb-12 sm:mb-16 lg:mb-24 ${isDarkMode ? "text-gray-600" : "text-gray-300"}`}
          style={{
            fontFamily: "'Inter', sans-serif",
            WebkitFontSmoothing: "antialiased",
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            fontStyle: "normal",
            fontWeight: 800,
            lineHeight: "1.2",
            letterSpacing: "0em",
            textAlign: "left",
            margin: 0,
          }}
        >
          Featured Projects.
        </h2>

        {/* Projects Container */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Helios Project */}
          <Link href="/helios" className="block group cursor-pointer">
            <div className="transition-all duration-500 ease-out group-hover:transform group-hover:scale-[1.01] sm:group-hover:scale-[1.02]">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center mb-3 sm:mb-4 mt-8 sm:mt-12 lg:mt-16">
                  <h3
                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    Helios
                  </h3>
                  <ArrowRight
                    className={`ml-3 sm:ml-4 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:translate-x-2 ${isDarkMode ? "text-white" : "text-black"}`}
                  />
                </div>
                <p className={`text-base sm:text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Building a community of entrepreneurship and talent.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src="/images/helios2.png"
                  alt="Helios Project"
                  width={1200}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
            </div>
          </Link>

          {/* Farm Swarming Project */}
          <Link href="/farm-swarming" className="block group cursor-pointer">
            <div className="transition-all duration-500 ease-out group-hover:transform group-hover:scale-[1.01] sm:group-hover:scale-[1.02]">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center mb-3 sm:mb-4">
                  <h3
                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    Farm Swarming
                  </h3>
                  <ArrowRight
                    className={`ml-3 sm:ml-4 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:translate-x-2 ${isDarkMode ? "text-white" : "text-black"}`}
                  />
                </div>
                <p className={`text-base sm:text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Born from necessity, built for community.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src="https://i.postimg.cc/ZnTTYyMq/Untitled-1-Recovered-01-01.png"
                  alt="Farm Swarming Project"
                  width={1200}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
            </div>
          </Link>

          {/* Jollyseeding Project */}
          <Link href="/jollyseeding" className="block group cursor-pointer">
            <div className="transition-all duration-500 ease-out group-hover:transform group-hover:scale-[1.01] sm:group-hover:scale-[1.02]">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center mb-3 sm:mb-4">
                  <h3
                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    Jollyseeding
                  </h3>
                  <ArrowRight
                    className={`ml-3 sm:ml-4 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:translate-x-2 ${isDarkMode ? "text-white" : "text-black"}`}
                  />
                </div>
                <p className={`text-base sm:text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  A planting toy set for autistic children to solve sensory issues.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src="/images/jollyseeding-cover.png"
                  alt="Jollyseeding Project"
                  width={1200}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
            </div>
          </Link>

          {/* Break the Ice Project */}
          <Link href="/break-the-ice" className="block group cursor-pointer">
            <div className="transition-all duration-500 ease-out group-hover:transform group-hover:scale-[1.01] sm:group-hover:scale-[1.02]">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center mb-3 sm:mb-4">
                  <h3
                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    Break the Ice
                  </h3>
                  <ArrowRight
                    className={`ml-3 sm:ml-4 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:translate-x-2 ${isDarkMode ? "text-white" : "text-black"}`}
                  />
                </div>
                <p className={`text-base sm:text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  An app to help students make friends by utilizing the sociology concept of "third places".
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src="https://i.postimg.cc/DyHtBXPb/Untitled-1-02-01.png"
                  alt="Break the Ice Project"
                  width={1200}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
            </div>
          </Link>

          {/* Schoolhouse.world User Dashboard Project */}
          <Link href="/schoolhouse" className="block group cursor-pointer">
            <div className="transition-all duration-500 ease-out group-hover:transform group-hover:scale-[1.01] sm:group-hover:scale-[1.02]">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center mb-3 sm:mb-4">
                  <h3
                    className={`text-xl sm:text-2xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-black"} leading-tight`}
                  >
                    Schoolhouse.world User Dashboard
                  </h3>
                  <ArrowRight
                    className={`ml-3 sm:ml-4 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:translate-x-2 ${isDarkMode ? "text-white" : "text-black"} flex-shrink-0`}
                  />
                </div>
                <p className={`text-base sm:text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Advance learning and tutoring experience.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src="/images/schoolhouse-cover.png"
                  alt="Schoolhouse.world User Dashboard Project"
                  width={1200}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}
