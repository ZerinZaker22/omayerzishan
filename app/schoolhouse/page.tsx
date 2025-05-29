"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun, ArrowLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function SchoolhouseProject() {
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
      <main className="pb-16">
        {/* Hero Section */}
        <div className="px-8 pt-8 pb-16 max-w-6xl mx-auto">
          <h1
            className={`text-6xl font-bold mb-6 transition-all duration-500 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Schoolhouse.world User Dashboard
          </h1>
          <p className={`text-2xl mb-8 transition-all duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Advance learning and tutoring experience
          </p>
        </div>

        {/* Full Width Banner Image */}
        <section className="mb-16">
          <div className="w-full">
            <Image
              src="https://christy-hu.com/images/graphic/shw/banner.jpg"
              alt="Schoolhouse Banner"
              width={1920}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Team and Tools Section */}
        <section className="px-8 mb-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2
                className={`text-2xl font-bold mb-6 transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
              >
                Team
              </h2>
              <div className={`space-y-2 text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                <p>Jackie Liu (Product Designer)</p>
                <p>Akshay R (PM + Engineer)</p>
                <p>Justin W (Software Engineer)</p>
              </div>
            </div>
            <div>
              <h2
                className={`text-2xl font-bold mb-6 transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
              >
                Tools
              </h2>
              <p className={`text-lg mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Figma, Github, Userleap
              </p>
              <h2
                className={`text-2xl font-bold mb-6 transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
              >
                Timeline
              </h2>
              <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Eight weeks, Summer 2021</p>
            </div>
          </div>
        </section>

        {/* Brief Section */}
        <section className="px-8 mb-16 max-w-6xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-6 transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Brief
          </h2>
          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            I was given the task to redesign the user profile page which later turned into the user dashboard.
          </p>
        </section>

        {/* Problem Section */}
        <section className="px-8 mb-16 max-w-6xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-6 transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Problem
          </h2>
          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Through user research, we discovered the problems of low discoverability, inconsistency, and inefficiency.
            The flow was confusing and difficult to navigate. There isn't a centralized place for users to manage their
            learning on Schoolhouse.
          </p>
        </section>

        {/* Goals Section */}
        <section className="px-8 mb-16 max-w-6xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-6 transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Goals
          </h2>
          <div className={`space-y-4 text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            <p>1. Improve site infrastructure to simplify user flows and make key functions more accessible</p>
            <p>2. Personalize learning and tutoring experience</p>
            <p>3. Increase session attendance rate, user retention, and engagement</p>
          </div>
          <p className={`text-lg leading-relaxed mt-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Before getting into my design process, here's a direct comparison of the redesign: a centralized dashboard
            that includes everything users need to keep track of their learning and tutoring.
          </p>
        </section>

        {/* Before After Image */}
        <section className="mb-16">
          <div className="w-full">
            <Image
              src="https://christy-hu.com/images/graphic/shw/before-after.jpg"
              alt="Before and After Comparison"
              width={1920}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Research Section */}
        <section className="px-8 mb-16 max-w-6xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-6 transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Research
          </h2>
          <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            I first sent out two separate surveys on the platform to tutors and learners to understand what's important
            to them. I received 184 survey responses and conducted five user interviews.
          </p>

          <h3
            className={`text-2xl font-bold mb-6 transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Competitive Analysis
          </h3>
          <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            I researched some competitors' dashboards to find inspiration. What I took away were
          </p>
          <div className={`space-y-2 text-lg mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            <p>1. Using modular blocks to present pieces of information on the homepage can best utilize the space</p>
            <p>2. Having a left menu helps with navigating through different information</p>
            <p>3. Grouping quick links in one place and using icons to prioritize them</p>
          </div>

          <div className="mb-8">
            <Image
              src="https://christy-hu.com/images/graphic/shw/image.jpeg"
              alt="Competitive Analysis"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </section>

        {/* Ideation Section */}
        <section className="px-8 mb-16 max-w-6xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-6 transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Ideation
          </h2>
          <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Base on my research, I found both learners and tutors rarely use "my profile" because they don't find it
            helpful. In response, I brainstormed what are some relevant information to enhance this page. Specifically
            for tutors' resources, I have categorized the available resources into tutor training, feedback,
            certifications, resourses, and session requests.
          </p>

          <div className="mb-8">
            <Image
              src="https://christy-hu.com/images/graphic/shw/sketch.jpg"
              alt="Initial Sketches"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            I spent a lot of time looking for a most efficient way to display information on the dashboard, the first
            page users see after logging in. To determine the most important information that should be displayed on
            this page, I collaborated with the team and solicited user research and their input on users' priorities.
          </p>

          <div className="mb-8">
            <Image
              src="https://christy-hu.com/images/graphic/shw/dashboard_sketch_directions.jpg"
              alt="Dashboard Sketch Directions"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            To streamline the engineering efforts and improve the dashboard's usability, I ensured that the design was
            consistent for both tutors and learners. While the learners' dashboard served as the foundation, I added
            extra features and content to the tutor side to enhance their experience.
          </p>

          <div className="mb-8">
            <Image
              src="https://christy-hu.com/images/graphic/shw/dashboard_two_directions.jpg"
              alt="Two Dashboard Directions"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            This site map shows the structure of the redesigned dashboard. I divided it into four sub pages: Overview,
            My sessions, My Certifications, and My Tutoring(for tutors only). I reorganized and structured most of the
            content and designed new features , which are highlighted in the yellow boxes.
          </p>

          <div className="mb-8">
            <Image
              src="https://christy-hu.com/images/graphic/shw/sitemap.jpg"
              alt="Site Map"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </section>

        {/* Prototype Section */}
        <section className="px-8 mb-16 max-w-6xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-6 transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Prototype
          </h2>
          <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Dashboard becomes the first page users land on after they log in. They can easily navigate between four
            sub-pages in the dashboard to find what they need. This new dashboard is highly received and loved by our
            users.
          </p>

          <div className="mb-8">
            <Image
              src="https://christy-hu.com/images/graphic/shw/prototype.gif"
              alt="Interactive Prototype"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* User Testing Section */}
        <section className="px-8 mb-16 max-w-6xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-6 transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            User Testing
          </h2>
          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            I developed a click-through prototype on Figma to conduct usability tests to get an in-depth understanding
            of how users interact with the new interface. I did 40 tests in total over two weeks with existing users
            (both tutors and learners.) I mapped out a user testing plan, designed several tasks in the prototype,
            observed users completing the tasks through screen sharing on zoom, and asked for feedback at the end. I
            received good and surprising reactions and also some areas of improvement which I later implements into the
            final design. I really enjoyed talking to users, showing them the new design, and seeing their reactions. It
            motivates me to make thoughtful design decisions that benefit my users.
          </p>
        </section>

        {/* Next Steps Section */}
        <section className="px-8 mb-16 max-w-6xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-6 transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Next Steps
          </h2>
          <div className={`space-y-2 text-lg mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            <p>1. Improve responsiveness on mobile and tablet</p>
            <p>2. Design empty states to be more intriguing</p>
            <p>3. Implement further customizations</p>
          </div>

          <div className="mb-8">
            <Image
              src="https://christy-hu.com/images/graphic/shw/dashboard_mobile.jpg"
              alt="Mobile Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </section>

        {/* Reflection Section */}
        <section className="px-8 mb-16 max-w-6xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-6 transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Reflection
          </h2>
          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            I'm proud to work on such a large-scale project from the very beginning. Thanks a lot to my team for
            believing in me and supporting me throughout the process. I learned to collaborate with engineers and hand
            off final deliverables. I challenged myself to think of a lot of iterations, present them to my manager, and
            test them with users. I took advantage of our volunteer community to ask for feedback proactively. I'm glad
            to see the dashboard was launched at the end of my internship. If there was one thing I could've done to
            improve is to onboard existing and new users to the NEW dashboard better. If I have more time, I would
            continue to gather user feedback and make improvements on v2.
          </p>
        </section>

        {/* Back to Top */}
        <div className="text-center pt-8 px-8">
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
