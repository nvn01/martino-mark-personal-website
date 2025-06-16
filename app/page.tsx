"use client"

import Image from "next/image"
import { Instagram, Facebook, Menu, X } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg font-serif text-gray-800">Martino Mark</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 lg:space-x-12 text-gray-800 font-medium uppercase tracking-wider text-sm">
              <a href="#services" className="hover:text-gray-600 transition-colors">
                Hospital Services
              </a>
              <a href="#insurance" className="hover:text-gray-600 transition-colors">
                Insurance Planning
              </a>
              <a href="#contact" className="hover:text-gray-600 transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800 hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
              <div className="px-4 py-4 space-y-4">
                <a
                  href="#services"
                  className="block text-gray-800 font-medium uppercase tracking-wider text-sm hover:text-gray-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hospital Services
                </a>
                <a
                  href="#insurance"
                  className="block text-gray-800 font-medium uppercase tracking-wider text-sm hover:text-gray-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Insurance Planning
                </a>
                <a
                  href="#contact"
                  className="block text-gray-800 font-medium uppercase tracking-wider text-sm hover:text-gray-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-container relative min-h-screen flex items-center justify-center px-4">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Hospital expert and insurance consultation"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-content text-center text-white max-w-4xl mx-auto">
          <p className="hero-subtitle mb-4 text-sm sm:text-base">Martino Mark</p>
          <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-6 sm:mb-8 leading-tight text-center px-4">
            Expert Healthcare Navigation & Insurance Solutions
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4">
            Your trusted partner for hospital appointments, international healthcare access, and comprehensive insurance
            planning
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="w-full order-2 lg:order-1 min-w-0">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif mb-2 text-gray-800 break-words">
                  What is it like to work with me?
                </h2>
                <div className="divider divider-accent mb-6 sm:mb-8"></div>
              </div>
              
              <div className="space-y-6 text-sm sm:text-base leading-relaxed font-montserrat">
                <div className="break-words">
                  As a Hospital Expert, I understand that navigating the healthcare system can be overwhelming and
                  confusing. I don't believe in a one-size-fits-all approach. Instead, I take the time to understand
                  your specific needs, whether it's finding the right specialist, booking appointments, or
                  understanding your insurance coverage options.
                </div>
                
                <div className="break-words">
                  With over 10 years of experience in the insurance industry as an Agency Director at Prudential, I
                  bring a unique perspective that combines healthcare navigation with comprehensive insurance
                  planning. This dual expertise allows me to provide holistic solutions that protect both your health
                  and financial well-being.
                </div>
                
                <div className="break-words">
                  I have established partnerships with 50+ major hospitals in Indonesia including EMC Group, Eka
                  Hospital Group, Mayapada Group, Mitra Keluarga Group, and Mandaya Bethsaida. For international
                  healthcare needs, I can connect you with top facilities in Malaysia and Singapore including
                  Timberland Hospital, Pantai Hospital, KPJ Damansara, Mount Elizabeth, Gleneagles Hospital, and
                  Raffles Hospital.
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-4 text-base sm:text-lg break-words">
                    How to Get Started?
                  </h4>
                  <div className="break-words">
                    Simple: use the form at the bottom of the page to schedule a free consultation. Whether you need help
                    with hospital appointments, international healthcare access, or want to discuss your insurance
                    options, I'm here to help.
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Healthcare and insurance consultation"
                width={600}
                height={800}
                className="w-full h-auto rounded-lg max-w-md mx-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Profile Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="w-full order-1">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Martino Mark"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg max-w-md mx-auto lg:max-w-none"
              />
            </div>

            <div className="w-full order-2 min-w-0">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif mb-2 text-gray-800 break-words">Martino Mark</h2>
                <p className="text-gray-600 italic mb-4 sm:mb-6 text-base sm:text-lg break-words">
                  Hospital Expert & Insurance Agency Director
                </p>
                <div className="divider divider-accent mb-6 sm:mb-8"></div>
              </div>

              <div className="space-y-6 text-sm sm:text-base leading-relaxed font-montserrat">
                <div className="break-words">
                  <strong>Current Position:</strong> Agency Director at Prudential Syariah (10+ years)
                </div>
                <div className="break-words">
                  <strong>Location:</strong> Tangerang Selatan, Indonesia
                </div>
                <div className="break-words">
                  <strong>Specialization:</strong> Hospital Navigation & Insurance Planning
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-4 text-base sm:text-lg break-words">
                    Hospital Partnerships:
                  </h4>
                  <div className="space-y-3 text-sm sm:text-base leading-relaxed">
                    <div className="break-words">
                      <strong>Indonesia:</strong> EMC Group, Eka Hospital Group, Mayapada Group, Mitra Keluarga Group,
                      Mandaya Bethsaida, and 45+ other major hospitals
                    </div>
                    <div className="break-words">
                      <strong>Malaysia:</strong> Timberland Hospital, Pantai Hospital, KPJ Damansara
                    </div>
                    <div className="break-words">
                      <strong>Singapore:</strong> Mount Elizabeth, Gleneagles Hospital, Raffles Hospital
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-4 text-base sm:text-lg break-words">
                    Professional Experience:
                  </h4>
                  <div className="space-y-4 text-sm sm:text-base">
                    <div className="border-l-2 border-accent pl-4">
                      <p className="font-medium text-gray-800 break-words">Agency Director - Prudential Syariah</p>
                      <p className="text-gray-600 mt-1 break-words">Apr 2013 - Present • 10+ years</p>
                      <p className="text-gray-600 break-words">Indonesia</p>
                    </div>

                    <div className="border-l-2 border-accent pl-4">
                      <p className="font-medium text-gray-800 break-words">Hospital Expert & Healthcare Navigator</p>
                      <p className="text-gray-600 mt-1 break-words">2015 - Present • 8+ years</p>
                      <p className="text-gray-600 break-words">
                        Specializing in domestic and international hospital connections
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-4 text-base sm:text-lg break-words">
                    Key Achievements:
                  </h4>
                  <div className="space-y-3 text-sm sm:text-base leading-relaxed">
                    <p className="break-words">
                      • Established partnerships with 50+ major hospitals across Indonesia, Malaysia, and Singapore
                    </p>
                    <p className="break-words">
                      • Successfully facilitated 1000+ hospital appointments and international healthcare referrals
                    </p>
                    <p className="break-words">
                      • Top Performer Award at Prudential for 5 consecutive years (2019-2023)
                    </p>
                    <p className="break-words">• Successfully managed over 200+ client insurance portfolios</p>
                    <p className="break-words">• Specialized expertise in international healthcare navigation</p>
                    <p className="break-words">
                      • Trusted advisor for complex medical cases requiring overseas treatment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Expertise Section */}
      <section className="py-12 sm:py-16 lg:py-20 dark-container text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Questions Form */}
            <div className="space-y-6 lg:col-span-1">
              <h3 className="style1 mb-6 sm:mb-8 text-sm sm:text-base">Questions</h3>
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-black/20 border border-white/20 rounded text-white placeholder-white/60 focus:outline-none focus:border-white/40 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-black/20 border border-white/20 rounded text-white placeholder-white/60 focus:outline-none focus:border-white/40 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full p-3 sm:p-4 bg-black/20 border border-white/20 rounded text-white placeholder-white/60 resize-none focus:outline-none focus:border-white/40 text-sm sm:text-base"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-10 sm:h-12 bg-accent hover:bg-accent-hover text-white font-medium rounded transition-colors duration-200 text-sm sm:text-base"
                >
                  SUBMIT
                </button>
              </form>
            </div>

            {/* Expertise */}
            <div className="space-y-4 lg:col-span-1">
              <h3 className="style1 mb-6 sm:mb-8 text-sm sm:text-base">Expertise</h3>
              <div className="space-y-2">
                <div>
                  <button className="accordion w-full text-left text-xs sm:text-sm">Hospital Navigation</button>
                  <div className="panel">
                    <p className="accordionbody text-xs sm:text-sm">
                      Expert assistance with hospital appointments, specialist referrals, and healthcare system
                      navigation across Indonesia, Malaysia, and Singapore.
                    </p>
                  </div>
                </div>

                <div>
                  <button className="accordion w-full text-left text-xs sm:text-sm">International Healthcare</button>
                  <div className="panel">
                    <p className="accordionbody text-xs sm:text-sm">
                      Specialized connections with top hospitals in Malaysia and Singapore for complex medical
                      treatments and second opinions.
                    </p>
                  </div>
                </div>

                <div>
                  <button className="accordion w-full text-left text-xs sm:text-sm">Insurance Planning</button>
                  <div className="panel">
                    <p className="accordionbody text-xs sm:text-sm">
                      Comprehensive insurance solutions including life, health, and financial planning through
                      Prudential Syariah.
                    </p>
                  </div>
                </div>

                <div>
                  <button className="accordion w-full text-left text-xs sm:text-sm">Hospital Partnerships</button>
                  <div className="panel">
                    <p className="accordionbody text-xs sm:text-sm">
                      Direct access to 50+ major hospital networks including EMC, Eka, Mayapada, and international
                      facilities.
                    </p>
                  </div>
                </div>

                <div>
                  <button className="accordion w-full text-left text-xs sm:text-sm">Healthcare Consultation</button>
                  <div className="panel">
                    <p className="accordionbody text-xs sm:text-sm">
                      Personalized healthcare guidance and medical facility recommendations based on your specific
                      needs.
                    </p>
                  </div>
                </div>

                <div>
                  <button className="accordion w-full text-left text-xs sm:text-sm">Claims Assistance</button>
                  <div className="panel">
                    <p className="accordionbody text-xs sm:text-sm">
                      Expert support with insurance claims and hospital billing processes for seamless healthcare
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Rest */}
            <div className="space-y-4 sm:space-y-6 lg:col-span-1">
              <h3 className="style1 mb-6 sm:mb-8 text-sm sm:text-base">The Rest</h3>
              <div className="body-text space-y-3 sm:space-y-4">
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                  <a href="#" className="text-accent hover:text-accent-hover">
                    Services & Rates
                  </a>
                  <span className="text-white/40">|</span>
                  <a href="#" className="text-accent hover:text-accent-hover">
                    Testimonials
                  </a>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                  Martino Mark's practice serves clients throughout Indonesia and facilitates international healthcare
                  access to Malaysia and Singapore. Providing expert hospital navigation services and comprehensive
                  insurance solutions through Prudential Syariah.
                </p>

                <p className="text-xs sm:text-sm text-white/70">
                  Licensed Insurance Professional • Prudential Agency Director • Hospital Expert
                </p>

                <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <a
                    href="https://www.instagram.com/martino_mark_expert/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
                  </a>
                  <a
                    href="https://web.facebook.com/martino.mark.9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Facebook className="w-6 h-6 sm:w-8 sm:h-8" />
                  </a>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-white/70">
                  <p>
                    - phone:{" "}
                    <a
                      href="https://wa.me/6287871119715"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover underline"
                    >
                      +62 878-7111-9715
                    </a>
                  </p>
                  <p>- email: martinomark.mmcell.@gmail.com</p>
                </div>

                <p className="text-xs sm:text-sm text-white/70">
                  Available for virtual consultations and in-person meetings
                </p>

                <div className="text-xs sm:text-sm text-white/70">
                  <p>Tangerang Selatan, Indonesia</p>
                  <p>Serving Indonesia, Malaysia & Singapore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
