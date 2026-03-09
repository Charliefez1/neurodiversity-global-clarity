import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import LongFormText from "@/components/blocks/LongFormText";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead title="Privacy Policy" description="Privacy policy for Neurodiversity Global. How we collect, use, and protect your personal data." path="/privacy-policy" />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <main>
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <h1 className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-[1.1]">Privacy Policy</h1>
            <p className="mt-4 text-sm opacity-80">Last updated: 9 March 2026</p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <LongFormText>
              <h2>1. Who we are</h2>
              <p>Neurodiversity Global is a UK-based neurodiversity consultancy. When we refer to "we", "us", or "our" in this policy, we mean Neurodiversity Global. Our registered address is in the United Kingdom.</p>

              <h2>2. What data we collect</h2>
              <p>We may collect the following personal data when you interact with our website or services:</p>
              <ul>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Name, email address, organisation, and role (when you submit a contact form or enquiry).</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Questions or messages you submit through our website.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Technical data such as browser type, device type, and anonymised usage data collected via analytics tools.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Booking and session data if you use our client portal.</li>
              </ul>

              <h2>3. How we use your data</h2>
              <p>We use personal data to:</p>
              <ul>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Respond to enquiries and provide the services you have requested.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Manage bookings and deliver training programmes.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Improve our website and services based on anonymised usage patterns.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Send relevant communications where you have given consent.</li>
              </ul>

              <h2>4. Legal basis for processing</h2>
              <p>We process personal data under the following lawful bases as defined by the UK General Data Protection Regulation (UK GDPR):</p>
              <ul>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" /><strong>Consent</strong>: where you have given clear consent for us to process your data for a specific purpose.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" /><strong>Legitimate interest</strong>: where processing is necessary for our legitimate interests or those of a third party, provided your rights do not override those interests.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" /><strong>Contractual necessity</strong>: where processing is necessary to fulfil a contract with you.</li>
              </ul>

              <h2>5. Data sharing</h2>
              <p>We do not sell your personal data. We may share data with trusted service providers who help us operate our website and deliver services (for example, hosting providers and email services). All third parties are required to process data in accordance with applicable data protection law.</p>

              <h2>6. Data retention</h2>
              <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form submissions are typically retained for up to 24 months unless you request earlier deletion.</p>

              <h2>7. Your rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Access the personal data we hold about you.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Request correction of inaccurate data.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Request deletion of your data.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Withdraw consent at any time where processing is based on consent.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Lodge a complaint with the Information Commissioner's Office (ICO).</li>
              </ul>

              <h2>8. Cookies</h2>
              <p>Our website uses essential cookies required for the site to function. We may also use analytics cookies to understand how visitors use our site. For full details, please see our <a href="/cookie-policy" className="text-accent hover:underline font-bold">Cookie Policy</a>.</p>

              <h2>9. Contact</h2>
              <p>To exercise your rights or ask questions about this policy, please use our <a href="/#contact" className="text-accent hover:underline font-bold">contact form</a>.</p>
            </LongFormText>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
