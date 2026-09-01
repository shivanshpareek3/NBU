export default function PrivacyPolicyPage() {
  return (
    <div className="flex-1 bg-background pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-4xl prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-foreground/80 prose-li:text-foreground/80">
        
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">PRIVACY & COOKIE POLICY</h1>
        <p className="text-foreground/60 text-lg mb-12">No Books University | Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="bg-foreground/5 p-8 rounded-2xl border border-foreground/10 mb-12">
          <h2 className="!mt-0">Privacy Policy (Summary)</h2>
          <p>
            We collect information that you provide directly to us when you fill out a form, request a consultation, or otherwise communicate with us. This may include your name, email address, phone number, and business details. We use this information to provide our services and communicate with you. We do not share, sell, or rent your personal information to third parties, except trusted service providers who assist in operating our business under strict confidentiality.
          </p>
        </div>

        <h2 className="text-3xl border-b border-foreground/10 pb-4">COOKIE POLICY</h2>
        
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files placed on your device when you visit a website. They help the website function, remember your preferences, and (for marketing cookies) measure how you interact with ads so we can improve them. This Policy also covers similar technologies such as pixels and local storage, collectively referred to as "cookies" below.
        </p>

        <h2>2. Categories of Cookies We Use</h2>
        
        <h3 className="text-xl font-bold mt-8 mb-2">2.1 Strictly Necessary Cookies</h3>
        <p>
          Required for the website to function: for example, to keep the payment checkout session alive, or to remember that you completed a form step. These cannot be switched off, because the website will not work properly without them.
        </p>
        
        <h3 className="text-xl font-bold mt-8 mb-2">2.2 Performance and Analytics Cookies</h3>
        <p>
          Help us understand how visitors use our website (which pages are viewed, how long visitors stay, where they drop off) so we can improve the site. This may include tools such as Google Analytics or equivalent.
        </p>
        
        <h3 className="text-xl font-bold mt-8 mb-2">2.3 Marketing and Advertising Cookies</h3>
        <p>
          Used to measure the performance of our advertising and to build audiences for future advertising. This includes the Meta Pixel and Meta Conversions API, which record events (such as page views, form submissions, and purchases) tied to a hashed version of identifiers like your email or phone number where available, so that Meta can attribute ad performance and let us build lookalike or retargeting audiences. It may also include similar tools from Google Ads or other ad platforms we use.
        </p>
        
        <h3 className="text-xl font-bold mt-8 mb-2">2.4 Functional Cookies</h3>
        <p>
          Remember choices you've made (such as form progress or session preferences) to give you a smoother experience on return visits.
        </p>

        <h2>3. Third-Party Cookies</h2>
        <p>
          Some cookies are placed by third parties who provide services embedded in our website, including:
        </p>
        <ul>
          <li><strong>Meta (Facebook/Instagram)</strong>: Pixel and Conversions API, governed by Meta's own data policy.</li>
          <li><strong>Payment gateway (Razorpay)</strong>: cookies necessary to process your payment securely.</li>
          <li><strong>Scheduling and form tools (e.g. Calendly, Typeform, or equivalent)</strong>: cookies necessary to embed and operate the booking/qualification forms.</li>
          <li><strong>Video hosting (e.g. Wistia or equivalent)</strong>: cookies to track video engagement.</li>
          <li><strong>Analytics providers</strong>: as described in Section 2.2.</li>
        </ul>
        <p>
          Each third party's use of cookies is governed by its own privacy and cookie policy, which we encourage you to review.
        </p>

        <h2>4. Managing Your Cookie Preferences</h2>
        <p>
          You can control or delete cookies through your browser settings. Most browsers let you refuse cookies, delete existing cookies, or be notified when a cookie is set. Note that blocking strictly necessary cookies may prevent parts of our website (such as the payment checkout) from working properly.
        </p>
        <p>For marketing cookies specifically, you can also opt out via:</p>
        <ul>
          <li>Your device's ad-tracking settings (e.g. "Limit Ad Tracking" on iOS, "Opt out of Ads Personalization" on Android).</li>
          <li>Meta's own ad preferences, accessible through your Facebook/Instagram account settings.</li>
          <li>Industry opt-out tools such as the Digital Advertising Alliance's consumer choice page, where applicable.</li>
        </ul>

        <h2>5. Consent</h2>
        <p>
          Where required by applicable law, we will present a cookie consent banner on your first visit to our website, allowing you to accept or manage non-essential cookies before they are set. Continued use of our website after accepting, or after being given the opportunity to manage preferences, constitutes consent to our use of cookies as described here.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. The "Last Updated" date above reflects the most recent revision.
        </p>

        <h2>7. Contact</h2>
        <p>
          Questions about our use of cookies: [LEGAL EMAIL]
        </p>
        
        <div className="mt-12 p-6 bg-foreground/5 rounded-xl border border-foreground/10 text-center font-medium">
          This Cookie Policy should be read together with our Privacy Policy.
        </div>
      </div>
    </div>
  )
}
