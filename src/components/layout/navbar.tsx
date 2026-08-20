"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "What We Build" },
    { href: "/how-we-work", label: "How We Work" },
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ]

  // Close menu on route change
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Detect scroll to switch between transparent and frosted glass
  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[200] w-full transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-6 md:py-8 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity duration-300 z-10 shrink-0"
          >
            <Image
              src="/logo-no-bg.png"
              alt="No Books University"
              width={600}
              height={207}
              className="w-56 md:w-80 lg:w-[400px] h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 group ${
                  pathname === link.href ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
                {/* Active underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-brand transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand text-white text-xs font-bold uppercase tracking-[0.15em] px-6 py-3 rounded-full hover:bg-brand/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
            >
              Build Your Business
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-10 p-2 text-white hover:text-brand transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[199] bg-[#050505] flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-28 pb-12 px-8 overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-4xl font-heading font-extrabold uppercase tracking-tight py-4 border-b border-white/10 transition-colors duration-300 ${
                  pathname === link.href ? "text-brand" : "text-white hover:text-brand"
                }`}
                style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center bg-brand text-white text-sm font-bold uppercase tracking-[0.15em] px-8 py-5 rounded-full hover:bg-brand/90 transition-all duration-300"
            >
              Build Your Business
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
