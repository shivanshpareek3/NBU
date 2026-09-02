import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { OUTCOMES } from "@/data/outcomes"

export function generateStaticParams() {
  return OUTCOMES.map((outcome) => ({
    slug: outcome.slug,
  }))
}

export default async function OutcomePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const outcome = OUTCOMES.find((o) => o.slug === slug)

  if (!outcome) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-white selection:bg-brand/30 selection:text-white">
      
      {/* 01 - HERO SECTION */}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-32 bg-[#030303] flex flex-col justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-start max-w-5xl">
          <div className="font-semibold tracking-[0.2em] uppercase text-brand mb-6 text-sm md:text-base border-l-2 border-brand pl-4">Outcome</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.05] tracking-tighter text-white mb-8 uppercase">
            {outcome.title}
          </h1>
        </div>
      </section>

      {/* 02 - THE BREAKDOWN */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Sidebar / Quick Facts */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 mb-3">Focus Area</h3>
                  <p className="text-xl font-heading font-bold uppercase text-brand">{outcome.shortTitle}</p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Related Outcomes</h3>
                  <ul className="space-y-4">
                    {OUTCOMES.filter(o => o.slug !== outcome.slug).slice(0, 3).map(o => (
                      <li key={o.slug}>
                        <Link href={`/outcomes/${o.slug}`} className="text-sm font-medium text-white/60 hover:text-brand transition-colors block leading-snug">
                          {o.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16 lg:space-y-24">
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-brand">
                  <span className="w-8 h-px bg-brand" />
                  <h2 className="text-xs font-bold tracking-[0.3em] uppercase">The Reality</h2>
                </div>
                <h3 className="text-3xl font-heading font-bold uppercase tracking-tight text-white/90">The Breaking Point</h3>
                <p className="text-xl text-white/60 leading-relaxed font-medium">
                  {outcome.problem}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-brand">
                  <span className="w-8 h-px bg-brand" />
                  <h2 className="text-xs font-bold tracking-[0.3em] uppercase">The Build</h2>
                </div>
                <h3 className="text-3xl font-heading font-bold uppercase tracking-tight text-white/90">What We Install</h3>
                <p className="text-xl text-white/60 leading-relaxed font-medium">
                  {outcome.build}
                </p>
              </div>

              <div className="space-y-6 p-10 md:p-14 bg-white/[0.02] border border-white/10 rounded-[2rem] relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand/20 blur-[100px] rounded-full" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4 text-brand">
                    <span className="w-8 h-px bg-brand" />
                    <h2 className="text-xs font-bold tracking-[0.3em] uppercase">The Result</h2>
                  </div>
                  <h3 className="text-3xl font-heading font-bold uppercase tracking-tight text-white">The Structural Fix</h3>
                  <p className="text-xl text-white/90 leading-relaxed font-medium">
                    {outcome.result}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 03 - FINAL CTA */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#030303] overflow-hidden py-32 border-t border-white/10">
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center max-w-5xl">
          <h2 className="text-4xl md:text-7xl font-heading font-extrabold uppercase leading-[1] tracking-tighter mb-12">
            LET'S FIX <span className="text-brand">YOUR {outcome.shortTitle.toUpperCase()}.</span>
          </h2>
          <Button size="lg" asChild className="bg-white text-black hover:bg-white/90 px-12 py-8 text-xl rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
