import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import LongFormText from "@/components/blocks/LongFormText";

const TermsOfService = () => {
  return (
    <>
      <SEOHead title="Terms of Service" description="Terms of service for Neurodiversity Global website and services." path="/terms-of-service" />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
      <main>
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <h1 className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-[1.1]">Terms of Service</h1>
            <p className="mt-4 text-sm opacity-80">Last updated: 9 March 2026</p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <LongFormText>
              <h2>1. Introduction</h2>
              <p>These terms govern your use of the Neurodiversity Global website and any services provided through it. By using our website, you agree to these terms. If you do not agree, please do not use our site.</p>

              <h2>2. Services</h2>
              <p>Neurodiversity Global provides neurodiversity training, consultancy, and strategic advisory services. The specific terms of any engagement will be set out in a separate proposal or agreement.</p>

              <h2>3. Website content</h2>
              <p>All content on this website is provided for general information purposes. While we make every effort to ensure accuracy, we do not guarantee that all content is complete, current, or free of errors.</p>
              <p>Content on this website does not constitute medical, legal, or clinical advice. If you require specialist advice, you should consult an appropriate professional.</p>

              <h2>4. Intellectual property</h2>
              <p>All content, design, logos, and materials on this website are the intellectual property of Neurodiversity Global unless otherwise stated. You may not reproduce, distribute, or use our materials without written permission.</p>

              <h2>5. User submissions</h2>
              <p>When you submit questions, feedback, or enquiries through our website, you grant us permission to use that content to improve our services and respond to your request. We will not publish personal details without your explicit consent.</p>

              <h2>6. Client portal</h2>
              <p>Access to the client portal is restricted to registered users. You are responsible for maintaining the security of your login credentials. We reserve the right to suspend access if we believe your account has been compromised.</p>

              <h2>7. Limitation of liability</h2>
              <p>To the fullest extent permitted by law, Neurodiversity Global shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.</p>

              <h2>8. External links</h2>
              <p>Our website may contain links to external websites. We are not responsible for the content, privacy practices, or availability of those sites.</p>

              <h2>9. Changes to these terms</h2>
              <p>We may update these terms from time to time. Changes will be posted on this page with an updated date. Continued use of the website following any changes constitutes acceptance of the revised terms.</p>

              <h2>10. Governing law</h2>
              <p>These terms are governed by and construed in accordance with the laws of England and Wales.</p>

              <h2>11. Contact</h2>
              <p>For questions about these terms, please use our <a href="/#contact" className="text-accent hover:underline font-bold">contact form</a>.</p>
            </LongFormText>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;
