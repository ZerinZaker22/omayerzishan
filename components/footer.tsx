import Link from "next/link"
import { Linkedin, Instagram, FileText } from "lucide-react"

interface FooterProps {
  isDarkMode?: boolean
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer className="bg-black text-white py-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
        {/* Left side - Thanks message */}
        <div className="flex items-center space-x-2">
          <span className="text-base sm:text-lg font-medium">thanks for stopping by</span>
          <span className="text-base sm:text-lg">☺</span>
        </div>

        {/* Right side - Contact info */}
        <div className="text-center sm:text-right">
          <div className="text-sm mb-3">Get in touch !</div>
          <div className="flex items-center justify-center sm:justify-end space-x-4">
            <Link
              href="https://www.linkedin.com/in/omayer-zishan-92a521321/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-gray-800"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/zishannnn15/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-gray-800"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1lzQV9N3-up62-g827tlHoJ6ZirvHY7wc/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-gray-800 border border-gray-600 hover:border-gray-500"
            >
              <FileText className="h-5 w-5" />
              <span className="text-sm font-medium">Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
