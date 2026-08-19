export default function PrivacyPolicyPage() {
  return (
    <div className="flex-1 bg-background pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-3xl prose prose-lg">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Privacy Policy</h1>
        <p className="text-foreground/60">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us when you fill out a form, request a consultation, or otherwise communicate with us. This may include your name, email address, phone number, and business details.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our consulting services, to communicate with you, and to send you information regarding your engagement with No Books University.
        </p>

        <h2>3. Information Sharing</h2>
        <p>
          We do not share, sell, or rent your personal information to third parties. We may share information with trusted third-party service providers who assist us in operating our website or conducting our business, as long as those parties agree to keep this information confidential.
        </p>

        <h2>4. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at anurag.founder&apos;soffice@foremostleads.in.
        </p>
      </div>
    </div>
  )
}
