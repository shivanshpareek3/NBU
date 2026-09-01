import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          <div className="space-y-6">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Image
                src="/logo-removebg-preview.png"
                alt="No Books University"
                width={400}
                height={140}
                className="h-28 md:h-36 w-auto object-contain scale-[1.3] md:scale-[1.6] origin-left"
              />
            </Link>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              We help founders and service-based businesses build systems, SOPs, departments, and operational infrastructure that make the business more structured, scalable, and less founder-dependent.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-semibold uppercase tracking-wider text-sm text-white/40">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm hover:text-brand transition-colors">About</Link></li>
              <li><Link href="/founders" className="text-sm hover:text-brand transition-colors">Founder</Link></li>
              <li><Link href="/how-we-work" className="text-sm hover:text-brand transition-colors">How We Work</Link></li>
              <li><Link href="/case-studies" className="text-sm hover:text-brand transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-brand transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold uppercase tracking-wider text-sm text-white/40">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/business-systems" className="text-sm hover:text-brand transition-colors">Business Systems</Link></li>
              <li><Link href="/services/sop-process-setup" className="text-sm hover:text-brand transition-colors">SOP & Process Setup</Link></li>
              <li><Link href="/services/marketing-department-setup" className="text-sm hover:text-brand transition-colors">Marketing Department</Link></li>
              <li><Link href="/services/sales-department-setup" className="text-sm hover:text-brand transition-colors">Sales Department</Link></li>
              <li><Link href="/services/hiring-team-setup" className="text-sm hover:text-brand transition-colors">Hiring & Team Setup</Link></li>
              <li><Link href="/services/operations-setup" className="text-sm hover:text-brand transition-colors">Operations Setup</Link></li>
              <li><Link href="/services/leadership-accountability" className="text-sm hover:text-brand transition-colors">Leadership & Accountability</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold uppercase tracking-wider text-sm text-white/40">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:nobooksuniversity@gmail.com" className="text-sm hover:text-brand transition-colors block break-words">
                  nobooksuniversity@gmail.com
                </a>
              </li>
              <li>
                <address className="not-italic text-sm text-white/60 leading-relaxed">
                  No Books University - Airport Road Jaipur - 302029
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} No Books University. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
