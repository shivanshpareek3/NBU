import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/data/services"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

// Generate dynamic cinematic placeholder images based on slug
const getServiceImage = (slug: string) => {
  const images: Record<string, string> = {
    "business-systems": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2850&q=80",
    "sop-process-setup": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2850&q=80",
    "marketing-department-setup": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2850&q=80",
    "sales-department-setup": "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2850&q=80",
    "hiring-team-setup": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2850&q=80",
    "operations-setup": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2850&q=80",
    "leadership-accountability": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2850&q=80",
  }
  return images[slug] || "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2850&q=80"
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const bgImage = getServiceImage(slug)

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-white">
      
      {/* 01 - HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-end pt-48 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt={service.title} className="w-full h-full object-cover grayscale contrast-125 opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
          <div className="flex items-center gap-6 mb-8">
            <span className="text-2xl font-bold text-brand font-heading border-b-2 border-brand pb-2">Service {service.id}</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-extrabold leading-[0.9] tracking-tighter uppercase mb-8">
            {service.title}
          </h1>
          <p className="text-2xl md:text-4xl text-white/70 font-medium max-w-4xl leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* 02 - THE PROBLEM (High contrast stark section) */}
      <section className="py-32 border-t border-white/10 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h2 className="text-5xl font-heading font-bold uppercase leading-[1.1] text-white/30 sticky top-32">
                The <span className="text-red-500/50">Problem</span>
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-3xl md:text-5xl text-white/80 leading-[1.3] font-medium border-l-4 border-red-500/50 pl-8 py-4">
                "{service.problem}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 - WHAT WE BUILD */}
      <section className="py-32 bg-[#030303]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h2 className="text-5xl font-heading font-bold uppercase leading-[1.1] text-brand sticky top-32">
                What We Build
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-2xl text-white/70 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 - THE PROCESS & OUTCOMES (Asymmetric Split) */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 md:gap-32">
            
            {/* The Process */}
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase mb-16">The Process</h2>
              <ul className="space-y-12">
                {service.process.map((step, index) => (
                  <li key={index} className="flex gap-8 group">
                    <span className="text-3xl font-heading font-bold text-black/20 group-hover:text-brand transition-colors">0{index + 1}</span>
                    <p className="text-2xl font-medium leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Outcomes */}
            <div className="bg-[#050505] text-white p-12 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-4xl font-heading font-extrabold uppercase mb-12 text-brand">The Outcomes</h2>
              <ul className="space-y-8 relative z-10">
                {service.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-6 border-b border-white/10 pb-8 last:border-0 last:pb-0">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand/20 text-brand shrink-0 mt-1">✓</span>
                    <span className="text-xl text-white/80 leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 05 - FINAL CTA */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden py-32 border-t border-white/10">
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center max-w-5xl">
          <h2 className="text-4xl md:text-7xl font-heading font-extrabold uppercase leading-[1] tracking-tighter mb-12">
            READY TO STRUCTURE YOUR <br/>
            <span className="text-brand">{service.title}?</span>
          </h2>
          <Button size="lg" asChild className="bg-white text-black hover:bg-white/90 px-12 py-8 text-xl rounded-full font-bold shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:scale-105 transition-all">
            <Link href="/contact">Build Your Infrastructure</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
