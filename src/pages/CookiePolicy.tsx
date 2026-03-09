import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import LongFormText from "@/components/blocks/LongFormText";

const CookiePolicy = () => {
  return (
    <>
      <SEOHead title="Cookie Policy" description="Cookie policy for the Neurodiversity Global website. How we use cookies and similar technologies." path="/cookie-policy" />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]} />
      <main>
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <h1 className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-[1.1]">Cookie Policy</h1>
            <p className="mt-4 text-sm opacity-80">Last updated: 9 March 2026</p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <LongFormText>
              <h2>What are cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help websites function properly and provide information to site owners about how visitors use the site.</p>

              <h2>How we use cookies</h2>
              <p>Neurodiversity Global uses a limited number of cookies to ensure the website works correctly and to understand how visitors use our site.</p>

              <h3>Essential cookies</h3>
              <p>These cookies are necessary for the website to function. They enable core features such as page navigation, access to secure areas, and language preferences. You cannot opt out of essential cookies as the site will not work properly without them.</p>

              <h3>Analytics cookies</h3>
              <p>We may use analytics cookies to collect anonymised information about how visitors interact with our website. This helps us improve the site and our services. Analytics data does not identify individual users.</p>

              <h3>Preference cookies</h3>
              <p>These cookies remember your settings and preferences, such as language selection and experience mode (read, scan, or listen). They improve your experience by avoiding the need to re-enter preferences on each visit.</p>

              <h2>Third-party cookies</h2>
              <p>We do not use third-party advertising cookies. Where we embed external content (such as videos or tools), those providers may set their own cookies. We encourage you to review the cookie policies of any third-party services.</p>

              <h2>Managing cookies</h2>
              <p>Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, though this may affect the functionality of our website.</p>

              <h2>Changes to this policy</h2>
              <p>We may update this cookie policy from time to time. Any changes will be posted on this page with an updated date.</p>

              <h2>Contact</h2>
              <p>If you have questions about our use of cookies, please use our <a href="/#contact" className="text-accent hover:underline font-bold">contact form</a>.</p>
            </LongFormText>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CookiePolicy;
