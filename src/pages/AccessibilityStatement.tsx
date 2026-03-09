import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import LongFormText from "@/components/blocks/LongFormText";

const AccessibilityStatement = () => {
  return (
    <>
      <SEOHead title="Accessibility Statement" description="Accessibility statement for the Neurodiversity Global website. Our commitment to making our content accessible to everyone." path="/accessibility-statement" />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Accessibility Statement" }]} />
      <main>
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <h1 className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-[1.1]">Accessibility Statement</h1>
            <p className="mt-4 text-sm opacity-80">Last updated: 9 March 2026</p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <LongFormText>
              <h2>Our commitment</h2>
              <p>Neurodiversity Global is committed to making our website accessible to everyone, regardless of disability or neurocognitive difference. As a neurodivergent-led organisation, accessibility is not an afterthought. It is central to how we design and deliver our work.</p>

              <h2>Standards we aim for</h2>
              <p>We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA. We regularly review our website to identify and address accessibility issues.</p>

              <h2>What we do</h2>
              <ul>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Semantic HTML structure for screen readers and assistive technologies.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Sufficient colour contrast throughout the site.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Keyboard-navigable interface for all interactive elements.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Alt text on images and meaningful link text.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Clear, plain language throughout our content.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Responsive design that works across devices and screen sizes.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Multiple interaction modes including scan mode and listen mode.</li>
              </ul>

              <h2>Known limitations</h2>
              <p>We are continuously improving our site. Some areas where we are actively working include:</p>
              <ul>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Ensuring all embedded content and third-party tools meet the same accessibility standards.</li>
                <li><span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />Improving compatibility with all assistive technology configurations.</li>
              </ul>

              <h2>Feedback</h2>
              <p>If you experience any difficulty accessing our website or content, or if you have suggestions for improvement, please let us know using our <a href="/#contact" className="text-accent hover:underline font-bold">contact form</a> or visit our <a href="/feedback" className="text-accent hover:underline font-bold">feedback page</a>.</p>
              <p>We take all accessibility feedback seriously and will respond as quickly as possible.</p>

              <h2>Enforcement</h2>
              <p>If you are not satisfied with our response, you can contact the Equality and Human Rights Commission (EHRC) or the Equality Advisory and Support Service (EASS).</p>
            </LongFormText>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AccessibilityStatement;
