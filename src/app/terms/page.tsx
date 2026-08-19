export default function TermsPage() {
  return (
    <div className="flex-1 bg-background pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-3xl prose prose-lg">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Terms of Service</h1>
        <p className="text-foreground/60">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using our website and consulting services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
        </p>

        <h2>2. Services Description</h2>
        <p>
          No Books University provides business infrastructure consulting services designed to help companies implement systems, SOPs, and departmental structures. We do not guarantee specific financial results or business outcomes as these depend heavily on the client&apos;s execution.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          The materials, methodologies, and frameworks provided during our consulting engagements remain the intellectual property of No Books University unless explicitly transferred in writing.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          In no event shall No Books University, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services.
        </p>
      </div>
    </div>
  )
}
