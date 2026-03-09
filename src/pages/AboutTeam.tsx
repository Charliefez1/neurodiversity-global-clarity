import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import { User, Users } from "lucide-react";

const pageSections = [
  { id: "rich", label: "Rich Ferriman", icon: User },
  { id: "charlie", label: "Charlie Ferriman", icon: User },
];

const AboutTeam = () => {
  return (
    <>
      <SEOHead
        title="Meet the Team. Rich and Charlie Ferriman"
        description="Neurodiversity Global is led by Rich and Charlie Ferriman. A father and son team with decades of experience, bringing lived neurodivergent perspective to organisational change."
        path="/about/team"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.neurodiversityglobal.com/" },
          { name: "About", url: "https://www.neurodiversityglobal.com/about" },
          { name: "Team", url: "https://www.neurodiversityglobal.com/about/team" },
        ])}
      />
      <RegisterSections sections={pageSections} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Team" }]} />
      <main>
        <PageHero
          badge="Our team"
          title="Two perspectives. One mission."
          description="Neurodiversity Global is led by Rich and Charlie Ferriman, a father and son team bringing decades of leadership, lived experience, and a shared belief that workplaces can be redesigned to work for everyone."
        />

        {/* Rich */}
        <PageSection
          id="rich"
          badge="Co-founder"
          title="Rich Ferriman"
          description="More than 30 years of industry and leadership experience."
        >
          <div className="space-y-5 max-w-[55ch]">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rich has led large teams, managed major transformation programmes, and delivered more than 1,000 complex projects across global organisations.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              During his career Rich ran a $100 million business unit, built and scaled international teams, and worked in highly regulated and technically complex environments.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Alongside that professional experience, Rich is also autistic and ADHD, and the parent of neurodivergent children. That lived experience informs everything the organisation does.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rich focuses on the strategic side of Neurodiversity Global's work, supporting leadership teams to rethink how organisations communicate, lead, and operate.
            </p>
          </div>

          <div className="mt-8 rounded-lg border border-accent/20 bg-accent/5 p-6 max-w-[55ch]">
            <p className="font-display font-bold text-sm text-foreground">
              "Neurodivergence is not the problem. Outdated systems are."
            </p>
          </div>
        </PageSection>

        {/* Charlie */}
        <PageSection
          id="charlie"
          badge="Co-founder"
          title="Charlie Ferriman"
          variant="sand"
          description="The next generation of neurodiversity leadership."
        >
          <div className="space-y-5 max-w-[55ch]">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Diagnosed with ADHD as a teenager, Charlie experienced first hand how traditional education and early career pathways can fail people who think differently.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rather than following a conventional route, he began working internationally at a young age, managing teams and building businesses while developing his own understanding of leadership and inclusion.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Charlie now delivers training, mentoring, and youth-focused programmes that bring a powerful generational perspective to organisational change.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              His work focuses on helping organisations understand how younger neurodivergent talent thinks, learns, and communicates.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              He also works closely with universities, charities, and youth groups to ensure neurodivergent young people have pathways into leadership and entrepreneurship.
            </p>
          </div>
        </PageSection>

        <PageCTA
          title="Work with us"
          description="Whether you are looking for training, strategic advisory, or a conversation about where to start, reach out."
          pageSource="about-team"
        />
      </main>
      <Footer />
    </>
  );
};

export default AboutTeam;
