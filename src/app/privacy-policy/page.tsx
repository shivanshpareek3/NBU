export default function PrivacyPolicyPage() {
  return (
    <div className="flex-1 bg-background pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-4xl prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-foreground/80 prose-li:text-foreground/80">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
        <p className="text-foreground/60 text-lg mb-12">No Books University | Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>Introduction</h2>
        <p>
          At No Books University, we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, process, and protect your personal information when you visit our website, use our services, or interact with us.
        </p>
        <p>
          This policy is designed to comply with applicable data protection laws in India, including the Digital Personal Data Protection Act, 2023 (DPDP Act).
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect and process the following categories of personal data:</p>
        <ul>
          <li><strong>Identity Data:</strong> Name, business name, and job title.</li>
          <li><strong>Contact Data:</strong> Email address, phone number, and physical business address.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, time zone setting, operating system, and information about how you use our website.</li>
          <li><strong>Transaction Data:</strong> Details of services you have purchased from us and payment-related information (processed securely through third-party payment gateways).</li>
          <li><strong>Communication Data:</strong> Information you provide when you contact us via forms, emails, or phone calls.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use your personal data only where we have a valid legal basis to do so, primarily for the following purposes:</p>
        <ul>
          <li>To provide, operate, and maintain our services.</li>
          <li>To communicate with you regarding your enquiries, bookings, or active projects.</li>
          <li>To process transactions and send related information, including invoices and confirmations.</li>
          <li>To improve, personalize, and expand our website and marketing efforts.</li>
          <li>To comply with legal obligations and enforce our terms and conditions.</li>
        </ul>

        <h2>Information Sharing and Disclosure</h2>
        <p>
          We do not sell, rent, or trade your personal data to third parties. We may share your data with trusted third parties strictly under the following circumstances:
        </p>
        <ul>
          <li><strong>Service Providers:</strong> We employ third-party companies and individuals to facilitate our services (e.g., payment processing, email delivery, hosting). These providers have access to your personal data only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your data if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
          <li><strong>Business Transfers:</strong> If No Books University is involved in a merger, acquisition, or asset sale, your personal data may be transferred as a business asset.</li>
        </ul>

        <h2>Data Security and Retention</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. However, please remember that no method of transmission over the internet or electronic storage is 100% secure.
        </p>
        <p>
          We retain your personal data only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
        </p>

        <h2>Your Rights Under the DPDP Act, 2023</h2>
        <p>Under the Digital Personal Data Protection Act, 2023, you as a Data Principal have the right to:</p>
        <ul>
          <li><strong>Access:</strong> Request a summary of your personal data being processed by us.</li>
          <li><strong>Correction and Erasure:</strong> Request the correction, completion, or updating of your personal data, and ask for its erasure if it is no longer necessary for the purpose it was collected.</li>
          <li><strong>Grievance Redressal:</strong> Register a grievance regarding the processing of your personal data.</li>
          <li><strong>Right to Nominate:</strong> Nominate another individual to exercise your rights in the event of death or incapacity.</li>
        </ul>
        <p>To exercise any of these rights, please contact our Grievance Officer using the details provided below.</p>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites or services that are not owned or controlled by No Books University. We are not responsible for the privacy practices or the content of these third-party sites.
        </p>

        <h2>Grievance Officer</h2>
        <p>
          In accordance with the Digital Personal Data Protection Act, 2023, the contact details of our Grievance Officer are provided below. If you have any complaints or concerns regarding this Privacy Policy or the processing of your personal data, please contact:
        </p>
        <p className="font-semibold mt-4">
          Name: Arpit Sharma<br />
          Email: join@nobooksuniversity.com<br />
          Address: B-26, SHIVPURI COLONY, AIRPORT ROAD, SANGANER, Jaipur, Rajasthan, 302029<br />
        </p>

        <div className="mt-12 p-6 bg-foreground/5 rounded-xl border border-foreground/10 text-center font-medium">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </div>
      </div>
    </div>
  )
}
