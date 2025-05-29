"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun, ArrowLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function BreakTheIceProject() {
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
      <main className="px-8 pt-8 pb-16 max-w-6xl mx-auto">
        {/* Hero Image */}
        <div className="mb-16">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5f84a90214a92c7962100b44/897ff9e4-b399-4095-bd4b-3f92baf6154f/cover+%281%29.png?format=1500w"
            alt="Break the Ice Hero"
            width={1500}
            height={600}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Problem Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>problem —</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className={`text-3xl font-medium mb-6 text-blue-500`}>It's hard to make friends in a new city.</h3>
              </div>

              <div>
                <p className={`text-base leading-relaxed mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Since 3 out of 5 of us were new to Seattle, we wanted to tackle the Seattle Freeze, the widely held
                  belief that it is difficult to make new friends in Seattle (especially for newcomers).
                </p>
                <p className={`text-base leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  However,{" "}
                  <strong>
                    difficulty making new friends can happen in any city, especially for university students.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>research —</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className={`text-3xl font-medium mb-6 text-blue-500`}>
                  Students are lonely, find it hard to connect with peers, and struggle with busy schedules.
                </h3>
              </div>

              <div>
                <p className={`text-base leading-relaxed mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  We conducted <strong>field observations and interviews</strong> in communal spaces on campus and
                  interviewed a variety of students about their experiences as a UW student and within the community.
                </p>

                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-blue-50"}`}>
                    <p className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      <strong>loneliness</strong> both from the pandemic but also from moving to a new area if that was
                      applicable.
                    </p>
                  </div>

                  <div className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-blue-50"}`}>
                    <p className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      <strong>hard to form connections</strong> because of large class sizes (200+) or lack of options
                      for student organizations
                    </p>
                  </div>

                  <div className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-blue-50"}`}>
                    <p className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      <strong>difficulty scheduling</strong> among the people they did know, everyone has their own
                      complicated schedule
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="mb-16">
          <div className="mb-8">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5f84a90214a92c7962100b44/e8fc641e-fcd0-4364-a727-1a7835d2289c/Copy+of+Final+Presentation+%285%29.png?format=1500w"
              alt="Break the Ice Overview"
              width={1500}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Our Solution Text Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>our solution —</h2>
            <h3 className={`text-3xl font-medium text-blue-500`}>
              Providing a way to find Third Places and break the ice with new friends.
            </h3>
          </div>
        </section>

        {/* Interactive Features Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>
            Interactive Features
          </h2>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5f84a90214a92c7962100b44/752dcdf4-f3bf-47f6-8bca-5bbbe80451b5/lock+screen+%282%29.png?format=300w"
                alt="Lock screen notification"
                width={300}
                height={600}
                className="mx-auto rounded-lg"
              />
            </div>
            <div className="text-center">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5f84a90214a92c7962100b44/be275850-c8dc-4747-a893-18608cba4c02/OnOff.gif?format=300w"
                alt="On/Off toggle"
                width={300}
                height={300}
                className="mx-auto rounded-lg"
              />
            </div>
            <div className="text-center">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5f84a90214a92c7962100b44/fffa24d7-b287-4ba4-98c6-1bd3fad8b9a5/Active+User+%281%29.png?format=300w"
                alt="Active user screen"
                width={300}
                height={600}
                className="mx-auto rounded-lg"
              />
            </div>
            <div className="text-center">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5f84a90214a92c7962100b44/ee679eb1-c79a-4461-925d-85e1bd5a3b35/ezgif.com-gif-maker+%281%29.gif?format=300w"
                alt="User interaction"
                width={300}
                height={600}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* All App Screens Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>
            Complete App Experience
          </h2>
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tVFDyzePVmrAeePOwcPlKzN8POStPX.png"
              alt="All app screens overview"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className={`text-center text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Overview of all the app screens we designed.
          </p>
        </section>

        {/* An Idea Section */}
        <section className="mb-16">
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4fuWh6kJvMSWy7uv3tdKeGPtQrVFyZ.png"
              alt="Third Places Concept"
              width={1200}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Reflections Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>reflections —</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className={`text-xl font-medium mb-4 italic ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  navigating ambiguity
                </h3>
                <p className={`text-base leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  With the prompt for this project simply being to "design an experience," we as a team had to practice
                  scoping and defining our problem space. I personally drew inspiration from the course content and
                  questioned what an experience really is (spoiler, everything is one).
                </p>
              </div>

              <div>
                <h3 className={`text-xl font-medium mb-4 italic ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  prioritization
                </h3>
                <p className={`text-base leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Our team had lots of feature ideas for improving the experience of students finding community such as
                  filters based on goals like mentorship or study groups. However given our limited time together, we
                  focused on what provided the most value to the experience.
                </p>
              </div>
            </div>
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
