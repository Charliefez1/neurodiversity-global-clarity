import { useEffect, useState } from "react";
import { MessageCircle, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AskQuestionCompact from "@/components/AskQuestionCompact";
import MultiCTABar from "@/components/MultiCTABar";

interface Question {
  id: string;
  question: string;
  answer: string | null;
  created_at: string;
}

const CommunityQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("user_questions")
        .select("*")
        .eq("status", "approved")
        .order("created_at", { ascending: false })
        .limit(50);
      if (data) setQuestions(data as Question[]);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <main>
      <SEOHead
        title="Community Voices | Neurodiversity Global"
        description="Lived experiences, questions, and comments from the neurodiversity community. Share your story."
        path="/community-questions"
      />
      <Navbar />

      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle size={20} className="text-accent" />
            <span className="text-xs font-display font-bold uppercase tracking-widest text-primary-foreground/50">
              Community
            </span>
          </div>
          <h1 className="font-display font-extrabold text-3xl lg:text-5xl tracking-tight mb-4">
            Community Voices
          </h1>
          <p className="text-base text-primary-foreground/70 max-w-content">
            Real stories, questions, and experiences from people navigating neurodiversity in the workplace. Your voice matters.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <div className="max-w-2xl mb-10">
            <AskQuestionCompact />
          </div>

          {loading ? (
            <p className="text-sm text-muted-foreground">Loading community posts...</p>
          ) : questions.length === 0 ? (
            <div className="bg-card border border-border rounded-xl p-8 text-center shadow-md">
              <p className="text-muted-foreground font-display font-semibold">
                No community posts yet. Be the first to share your experience!
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {questions.map((q) => (
                <div
                  key={q.id}
                  className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <User size={14} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-body leading-relaxed text-foreground">
                        {q.question}
                      </p>
                      {q.answer && (
                        <div className="mt-3 pl-4 border-l-2 border-accent/30">
                          <p className="text-xs font-display font-bold text-accent mb-1">Response</p>
                          <p className="text-sm text-muted-foreground">{q.answer}</p>
                        </div>
                      )}
                      <p className="text-[10px] text-muted-foreground mt-2">
                        {new Date(q.created_at).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <MultiCTABar />
      <Footer />
    </main>
  );
};

export default CommunityQuestions;
