"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun, ArrowLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function JollyseedingProject() {
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
            src="https://static.wixstatic.com/media/96ca9e_2030a7e943e64a60a795edd6e15be919~mv2.jpg/v1/fill/w_1401,h_552,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/96ca9e_2030a7e943e64a60a795edd6e15be919~mv2.jpg"
            alt="Jollyseeding Hero"
            width={1400}
            height={550}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Project Title and Details */}
        <div className="mb-16">
          <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Jollyseeding</h1>
          <h2 className={`text-2xl mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            A planting toy set for autistic children to solve sensory issues
          </h2>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3
                className={`text-sm font-medium mb-2 uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Duration
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>2022</p>
            </div>
            <div>
              <h3
                className={`text-sm font-medium mb-2 uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Role
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Product Designer</p>
            </div>
            <div>
              <h3
                className={`text-sm font-medium mb-2 uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Team
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Individual Project</p>
            </div>
            <div>
              <h3
                className={`text-sm font-medium mb-2 uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Skills
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Product Design • Research • Prototyping
              </p>
            </div>
          </div>
        </div>

        {/* Background Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>Background</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                As we all know, there is no absolute cure for autism. Sensory toys and therapy are the main ways to help
                autistic children grow and develop.
              </p>
              <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                By providing their preferred sensory stimuli and growth.
              </p>
            </div>
            <div>
              <Image
                src="https://static.wixstatic.com/media/96ca9e_66da9aacbe7940d4b908f4c3aa3ba8b6~mv2.jpeg/v1/fill/w_477,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/96ca9e_66da9aacbe7940d4b908f4c3aa3ba8b6~mv2.jpeg"
                alt="Child with autism"
                width={477}
                height={318}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Research Discovery Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>Research Discovery</h2>
          <div className="mb-8">
            <div className={`space-y-4 text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              <p>Horticultural therapy serves as a consistent sensory stimulant.</p>
              <p>
                Children with autism exhibit diverse personalities, necessitating individualized treatment approaches.
              </p>
            </div>
          </div>
        </section>

        {/* Concept Statement Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>Concept Statement</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                The planting toy set will be created for autistic children who often struggle to express their emotions
                and feelings.
              </p>
            </div>
            <div>
              <Image
                src="https://static.wixstatic.com/media/96ca9e_99c5ec21a10848bab189bf53e5812fda~mv2.jpg/v1/fill/w_979,h_929,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/scenariofinal1_edited.jpg"
                alt="Usage scenario"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Ideation Development Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>
            Ideation Development
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <Image
                src="https://static.wixstatic.com/media/96ca9e_911cc74767f54d5baa92915ec6233181~mv2.png/v1/crop/x_0,y_0,w_3263,h_1693/fill/w_981,h_508,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/96ca9e_911cc74767f54d5baa92915ec6233181~mv2.png"
                alt="Concept development"
                width={981}
                height={508}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <Image
                src="https://static.wixstatic.com/media/96ca9e_f0c107367bbf4aa38996222525b18198~mv2.png/v1/fill/w_980,h_459,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/96ca9e_f0c107367bbf4aa38996222525b18198~mv2.png"
                alt="Research insights"
                width={980}
                height={459}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Logo and Branding Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <Image
              src="https://static.wixstatic.com/media/96ca9e_205314e1eab844fba497b578bae69d82~mv2.png/v1/fill/w_247,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/96ca9e_205314e1eab844fba497b578bae69d82~mv2.png"
              alt="Jollyseeding logo"
              width={247}
              height={214}
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="text-center">
            <Image
              src="https://static.wixstatic.com/media/96ca9e_25049de6d8764b8ba1710befa89b652b~mv2.png/v1/fill/w_560,h_585,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/FLY_edited.png"
              alt="Jollyseeding branding"
              width={560}
              height={585}
              className="mx-auto rounded-lg"
            />
          </div>
        </section>

        {/* Prototype Development Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>
            Prototype Development
          </h2>
          <div className="mb-8">
            <Image
              src="https://static.wixstatic.com/media/96ca9e_2982d256b7624bc9a67ac687b7f2f348~mv2.png/v1/fill/w_415,h_277,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/96ca9e_2982d256b7624bc9a67ac687b7f2f348~mv2.png"
              alt="Prototype development"
              width={415}
              height={277}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Sensory Stimulation Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>Sensory Stimulation</h2>
          <div className="mb-8">
            <Image
              src="https://static.wixstatic.com/media/96ca9e_76d36ba460a9439dba4fb9d7c80879b1~mv2.png/v1/fill/w_986,h_452,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/scenario%20sensory1_edited.png"
              alt="Sensory stimulation scenarios"
              width={986}
              height={452}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* IDUS Review Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>IDUS Review</h2>
          <div className="mb-8">
            <Image
              src="https://static.wixstatic.com/media/96ca9e_af22d48642834c85a499dc0e0c61dc38~mv2.png/v1/fill/w_980,h_551,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IDUS%20Review%20.png"
              alt="IDUS Review"
              width={980}
              height={551}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Interactive Animations Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>
            Interactive Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <Image
                src="https://static.wixstatic.com/media/96ca9e_e4d026992cf6496aa9f824ea1e32ee7b~mv2.gif"
                alt="Interactive animation 1"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <Image
                src="https://static.wixstatic.com/media/96ca9e_3ff6419b3b0e4694b55ff06aceffe567~mv2.gif"
                alt="Interactive animation 2"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Product Features Section */}
        <section className="mb-16">
          <div className="mb-8">
            <Image
              src="https://static.wixstatic.com/media/96ca9e_f74f53b8e762447e976e394ee5255373~mv2.png/v1/fill/w_699,h_393,al_c,lg_1,q_85,enc_avif,quality_auto/96ca9e_f74f53b8e762447e976e394ee5255373~mv2.png"
              alt="Product features"
              width={699}
              height={393}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="text-center mb-8">
            <Image
              src="https://static.wixstatic.com/media/96ca9e_5af739b37fde44a98189881ef824eea0~mv2.gif"
              alt="Product interaction"
              width={400}
              height={400}
              className="mx-auto rounded-lg"
            />
          </div>
        </section>

        {/* Simple Use Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>#3 Simple Use</h2>
          <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Especially easy for kids. The set is self-contained and simple enough for kids to use independently. It
            doesn't require a lot of setup.
          </p>
          <div className="mb-8">
            <Image
              src="https://static.wixstatic.com/media/96ca9e_d874f997a5dc40d9bf1d48ddc93df26a~mv2.png/v1/fill/w_978,h_550,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/simple.png"
              alt="Simple use demonstration"
              width={978}
              height={550}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Design Variations Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>Design Variations</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <Image
                src="https://static.wixstatic.com/media/96ca9e_c76476ced88144dbad3fa11f54f9261a~mv2.png/v1/fill/w_310,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BD%9C%E5%93%81%205%E7%9A%84%E5%89%AF%E6%9C%AC.png"
                alt="Design variation 1"
                width={310}
                height={380}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <Image
                src="https://static.wixstatic.com/media/96ca9e_b87d4167a2684aea8db60338345133b5~mv2.png/v1/fill/w_310,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BD%9C%E5%93%81%207.png"
                alt="Design variation 2"
                width={310}
                height={380}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>Product Details</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                src="https://static.wixstatic.com/media/96ca9e_b3be04e45c7f41c984fba63ce9419cf1~mv2.png/v1/fill/w_318,h_216,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/96ca9e_b3be04e45c7f41c984fba63ce9419cf1~mv2.png"
                alt="Product detail 1"
                width={318}
                height={216}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <Image
                src="https://static.wixstatic.com/media/96ca9e_5e11b0c227e24d4e9dbcf20086b2a1bf~mv2.png/v1/fill/w_318,h_216,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/96ca9e_5e11b0c227e24d4e9dbcf20086b2a1bf~mv2.png"
                alt="Product detail 2"
                width={318}
                height={216}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <Image
                src="https://static.wixstatic.com/media/96ca9e_759e23154df742c78fbba39d7405db7b~mv2.png/v1/fill/w_318,h_216,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/96ca9e_759e23154df742c78fbba39d7405db7b~mv2.png"
                alt="Product detail 3"
                width={318}
                height={216}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* #1 Sensory Stimulation Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>
            #1 Sensory Stimulation
          </h2>
          <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Jollyseeding is designed to provide Sensory Stimulation. The planting activity provides multiple sensory
            experiences that can help children with autism develop their sensory processing skills. From the feeling of
            soil to the sight of growing plants, the experience is rich in sensory input that can be both calming and
            stimulating for children with autism.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-8 mb-4">
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-black" : "text-black"}`}>TOUCHING</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-700" : "text-gray-700"}`}>
                  Feeling different textures of soil, seeds, and plants
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-lg p-8 mb-4">
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-black" : "text-black"}`}>SMELLING</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-700" : "text-gray-700"}`}>
                  Experiencing natural scents from soil and growing plants
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-lg p-8 mb-4">
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-black" : "text-black"}`}>WATCHING</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-700" : "text-gray-700"}`}>
                  Observing growth and changes over time
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}
