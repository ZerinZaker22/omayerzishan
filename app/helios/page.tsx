"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun, ArrowLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function HeliosProject() {
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
        {/* Hero Image */}
        <div className="mb-16">
          <Image
            src="https://gracemmaa.com/images/helios2.png"
            alt="Helios Project Overview"
            width={1200}
            height={600}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Project Title */}
        <div className="mb-12">
          <h1 className={`text-5xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>Helios</h1>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3
                className={`text-sm font-medium mb-2 uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Role
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Product Design Lead & Product Designer
              </p>
            </div>
            <div>
              <h3
                className={`text-sm font-medium mb-2 uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Team
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Designers: Grace Marino, Yilin Wei, Emma Tsai
              </p>
            </div>
            <div>
              <h3
                className={`text-sm font-medium mb-2 uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Duration
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                January 2019 to August 2019 (8 months)
              </p>
            </div>
          </div>
        </div>

        {/* Brief Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>Brief</h2>
          <div className="mb-6">
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
              Helios is a platform that builds a community to turn passion into value, impact, and productivity.
            </h3>
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Helios is a platform that connects entrepreneurial students and individuals together to build side
              projects and startup businesses. Its aim is to aggregate talented and passionate people to create a
              network where everyone shares the same drive to improve their skills and gain experience.
            </p>
          </div>
        </section>

        {/* My Contribution Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>My Contribution</h2>
          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            As the product design lead, I helped to navigate the project through the design thinking process and
            mentored the designers on the team. I also contributed as a product designer and helped to write the script
            for user interviews, conduct them, wireframes, and develop the design system.
          </p>
        </section>

        {/* Problem Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>Problem</h2>
          <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
            A lack of system for finding side projects means that to do so is time-consuming and there is little return
            for invested time.
          </h3>
          <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            When students and individuals want to work on side projects together, there isn't a go-to method of finding
            people to work with, or available side projects to join when they don't have an idea themselves. They have
            to reach out to their network and friends which takes time and everyone may commit the same amount of time
            to a project.
          </p>

          {/* User Quotes */}
          <div className="space-y-6">
            <blockquote
              className={`text-lg italic border-l-4 pl-6 ${isDarkMode ? "border-gray-600 text-gray-300" : "border-gray-300 text-gray-600"}`}
            >
              "There's no uniform platform to show what opportunities there are."
              <footer className={`text-sm mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                —Nick, Masters Student
              </footer>
            </blockquote>
            <blockquote
              className={`text-lg italic border-l-4 pl-6 ${isDarkMode ? "border-gray-600 text-gray-300" : "border-gray-300 text-gray-600"}`}
            >
              "I've gone to a lot of networking events to see if people are working on anything, but it never works."
              <footer className={`text-sm mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                —Galen, Student and Startup Founder
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Goal Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>Goal</h2>
          <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>
            Create a community and efficient platform to help realize users' entrepreneurial goals and create value.
          </h3>
        </section>

        {/* Target Users Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>Target Users</h2>
          <div className="space-y-12">
            <div className="flex flex-col items-center space-y-4">
              <Image src="/images/user1.png" alt="User persona 1" width={300} height={300} className="rounded-lg" />
              <blockquote className={`text-lg text-center ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                "I want to look for a project that aligns with my skills and interests."
              </blockquote>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image src="/images/user2.png" alt="User persona 2" width={300} height={300} className="rounded-lg" />
              <blockquote className={`text-lg text-center ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                "I want to look for dedicated and skilled teammates to join my project."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>Research</h2>
          <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            To better understand how our users currently navigate starting side projects and the associated pain points,
            I conducted user interviews with the help of 2 designers with 4 participants, ranging from students driven
            to learn to startup owners whose companies began as side projects.
          </p>

          <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
            Insights & Takeaways
          </h3>
          <ul className={`space-y-3 text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            <li>
              • Finding people to work on side projects with is time consuming, and often done in person (clubs, events,
              networking opportunities)
            </li>
            <li>• The right fit relies on a person's commitment to the project and appropriate skill set</li>
            <li>• Those who couldn't commit an appropriate amount of time did drop-offs</li>
            <li>
              • Social impact and opportunity to learn is important to users when they want to find a project to join
            </li>
          </ul>
        </section>

        {/* Designing the Product Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
            Designing the Product
          </h2>
          <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
            Product Requirements
          </h3>
          <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Taking into account the tasks that we want to perform, we identified key features that we wanted to add:
          </p>
          <ul className={`space-y-2 text-lg mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            <li>• A way for users to browse and join side projects</li>
            <li>• A way for users to have their own projects and find teammates</li>
            <li>• A way for users to find team members for their side projects</li>
            <li>• A means of connecting team members</li>
          </ul>
        </section>

        {/* Finding a Project—Browse Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
            Finding a Project—Browse
          </h2>
          <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            The project page of this platform contains a list of open side projects that are seeking more collaborators.
          </p>

          <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Decision 1</h3>
          <h4 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
            A simple and focused experience that directly addresses our users' goals
          </h4>

          <div className="mb-8">
            <Image
              src="/images/helios1.png"
              alt="Helios browse projects interface"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            This page was intentionally designed to have a little interaction for simplicity. Keeping the experience of
            finding a project clean and focused, we wanted to make sure that users are looking for a project to join the
            browse experience. For a 2.0 and a project overview is all they need to see to be interested in the project.
          </p>
        </section>

        {/* Decision 2 Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>Decision 2</h2>
          <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
            Card components provide an allowance to preview information to give users context before clicking to see
            more
          </h3>

          <div className="mb-8">
            <Image
              src="/images/card.png"
              alt="Card component design"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            In our research, users looked at various factors before considering working on a side project. In order to
            help users browse through projects, they'd be interested in before needing to click for additional
            information, I suggested using card components that would preview some information to give users more
            context. We considered using the pattern of a more browsable list as well, but we decided against it, as
            lists were more suited for quick browsing. For the experience of our website, we wanted our users to be able
            to make more informed decisions about these side projects.
          </p>
        </section>

        {/* Past Iterations Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>Past Iterations</h2>
          <div className="mb-8">
            <Image
              src="/images/wireframe1.png"
              alt="Past iterations wireframes"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Some of our previous iterations were inspired by job board experiences. Though it contained a lot of useful
            features like filters and bookmarking, we went for a simpler experience because our users were not spending
            much time on this platform other than for connecting with other driven individuals. So on newer iterations
            on the right, the wireframes were further simplified and we just put some thought into the interactions and
            the surfaced data.
          </p>
        </section>

        {/* Finding a Project—Details Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
            Finding a Project—Details
          </h2>
          <div className="mb-8">
            <Image
              src="/images/details.png"
              alt="Project details page"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Decision 1</h3>
          <h4 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
            Sticky profile and contact section to give users a direct CTA
          </h4>

          <div className="mb-8">
            <Image
              src="/images/contact.png"
              alt="Contact section design"
              width={400}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            This contact section is sticky component, that sticks to the top of the page as a user scrolls down to read
            more about the project. Since the goal of the browse section is to help users find projects to join, we
            wanted to make sure that the contact information was always available to the user at all times, therefore
            decreasing the friction for them to reach out.
          </p>
        </section>

        {/* Chat Option Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>Decision 2</h2>
          <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Chat option</h3>
          <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Keeping in mind the purpose of this product to build community around side projects, we wanted to stay away
            from a job application kind of experience. In order to accomplish this, we added a chat feature to mimic
            casual networking or the situation of asking your friends online to participate in a fun side project.
          </p>

          <div className="mb-8">
            <Image
              src="/images/wireframe2.png"
              alt="Chat feature wireframes"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            The previous version of this page were inspired by job boards and similar platforms, with the knowledge that
            people are typically seeking certain skills to join their projects. On the very right, we also tried a
            people-focused project details page that gave the user more information about the team.
          </p>

          <h4 className={`text-lg font-medium mb-4 mt-8 ${isDarkMode ? "text-white" : "text-black"}`}>Limitations</h4>
          <ul className={`space-y-2 text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            <li>
              • Adding team member information would be a time-consuming process, the creator of the project would have
              to upload team names and photos. This information was not always relevant or available.
            </li>
            <li>
              • Our previous available methods of communication were through email and phone, which we realized was not
              ideal for a digital platform.
            </li>
          </ul>
        </section>

        {/* Finding Teammates Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>Finding Teammates</h2>
          <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            If a user is looking for teammates rather than a project, they can browse a list of individuals who are
            looking to join a side project and view their details and main skills.
          </p>

          <div className="mb-8">
            <Image
              src="/images/team.png"
              alt="Finding teammates interface"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Decision 1 - Time Commitment Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>Decision 1</h2>
          <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
            Prioritizing Time Commitment
          </h3>

          <div className="mb-8">
            <Image
              src="/images/time.png"
              alt="Time commitment interface"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Our research indicated that most of our users consider the amount of time someone can commit to a project as
            one of the most important factors to know when looking for teammates. From this insight, I made the decision
            to prioritize the time commitment of every candidate on the card, and include it as one of the main criteria
            for filtering through the list. The outcome of this would allow users to make faster decisions on who to
            contact based on their requirements for a teammate.
          </p>
        </section>

        {/* Past Iterations Final Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>Past Iterations</h2>
          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Our first iteration of the Helios platform didn't have a people page altogether—we learned after research
            how valuable it was for users to find the right people with the right skills, and added this page after
            gathering these insights.
          </p>
        </section>

        {/* Next Steps Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>Next Steps</h2>
          <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
            Usability testing, implementing chat function, account creation
          </h3>
          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Many of the decisions made for this platform have been based on the insights we gathered through our user
            interviews in the research stage of this project. However, an appropriate next step would be to test our
            assumptions and validate the user experience choices that we have made. After that, we would need to build
            out other crucial features like the platform like chat and account creation.
          </p>
        </section>

        {/* Takeaways Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>Takeaways</h2>
          <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
            Leadership, working with constraints, and user research
          </h3>
          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            I learned a lot through this project. It was one of my first times leading other designers on a product
            design team, and I learned how to best communicate with designers and navigate through design ideas and
            decisions. Working on this platform also taught me a lot about user research, which I haven't done much of
            before. I got to experience actively applying the things we learned to the choices we made on user
            experience and interaction patterns. Additionally, we also worked with developers for this project, which
            gave me the experience of working with real, technical constraints and how to hand off design documentation
            so that the developers can work smoothly.
          </p>
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
