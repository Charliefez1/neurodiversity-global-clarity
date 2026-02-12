import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Save, X, Tag, Loader2, Eye, EyeOff, MessageSquare, CheckCircle, Archive, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import ReactMarkdown from "react-markdown";

const API_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-qa`;

type QAItem = { id: string; question: string; answer: string; tags: string[]; published: boolean; created_at: string; slug: string | null };
type Submission = { id: string; question: string; email: string | null; status: string; admin_notes: string | null; created_at: string };

const AdminQA = () => {
  const [pin, setPin] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [tab, setTab] = useState<"items" | "submissions">("items");
  const [items, setItems] = useState<QAItem[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  // New/Edit item
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({ question: "", answer: "", tags: "", published: true });
  const [showNew, setShowNew] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const headers = () => ({
    "Content-Type": "application/json",
    "x-admin-pin": pin,
    Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
  });

  const authenticate = async () => {
    setLoading(true);
    setAuthError(false);
    try {
      const resp = await fetch(`${API_URL}?resource=items`, { headers: headers() });
      if (resp.status === 401) {
        setAuthError(true);
      } else {
        const data = await resp.json();
        setItems(data);
        setAuthenticated(true);
      }
    } catch {
      setAuthError(true);
    }
    setLoading(false);
  };

  const fetchItems = async () => {
    const resp = await fetch(`${API_URL}?resource=items`, { headers: headers() });
    setItems(await resp.json());
  };

  const fetchSubmissions = async () => {
    const resp = await fetch(`${API_URL}?resource=submissions`, { headers: headers() });
    setSubmissions(await resp.json());
  };

  useEffect(() => {
    if (authenticated && tab === "submissions") fetchSubmissions();
  }, [authenticated, tab]);

  const saveItem = async (isNew: boolean) => {
    const tags = form.tags.split(",").map((t) => t.trim()).filter(Boolean);
    const body = { ...form, tags, id: editing };

    await fetch(`${API_URL}?resource=items`, {
      method: isNew ? "POST" : "PUT",
      headers: headers(),
      body: JSON.stringify(body),
    });
    setShowNew(false);
    setEditing(null);
    setForm({ question: "", answer: "", tags: "", published: true });
    fetchItems();
  };

  const deleteItem = async (id: string) => {
    if (!confirm("Delete this Q&A?")) return;
    await fetch(`${API_URL}?resource=items&id=${id}`, { method: "DELETE", headers: headers() });
    fetchItems();
  };

  const updateSubmission = async (id: string, status: string) => {
    await fetch(`${API_URL}?resource=submissions`, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify({ id, status }),
    });
    fetchSubmissions();
  };

  const startEdit = (item: QAItem) => {
    setEditing(item.id);
    setForm({ question: item.question, answer: item.answer, tags: (item.tags || []).join(", "), published: item.published });
    setShowNew(false);
    setShowPreview(false);
  };

  const convertToQA = (sub: Submission) => {
    setTab("items");
    setShowNew(true);
    setEditing(null);
    setForm({ question: sub.question, answer: "", tags: "", published: false });
    setShowPreview(false);
  };

  if (!authenticated) {
    return (
      <main>
        <SEOHead title="Admin | Neurodiversity Global" description="Admin area" path="/admin" />
        <Navbar />
        <section className="bg-background min-h-screen flex items-center justify-center">
          <div className="max-w-sm w-full px-6">
            <h1 className="font-display font-extrabold text-2xl text-foreground text-center mb-2">Admin Access</h1>
            <p className="text-muted-foreground text-sm text-center mb-8">Enter your PIN to continue</p>
            <form onSubmit={(e) => { e.preventDefault(); authenticate(); }} className="space-y-4">
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-center text-lg tracking-[0.3em] text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                autoFocus
              />
              {authError && <p className="text-destructive text-sm text-center">Invalid PIN. Please try again.</p>}
              <button
                type="submit"
                disabled={!pin || loading}
                className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm disabled:opacity-40 flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : null}
                Enter
              </button>
            </form>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <SEOHead title="Admin | Neurodiversity Global" description="Admin area" path="/admin" />
      <Navbar />

      <section className="bg-background min-h-screen">
        <div className="mx-auto max-w-wide px-6 lg:px-10 pt-10 pb-20">
          <h1 className="font-display font-extrabold text-2xl text-foreground mb-6">Q&A Admin</h1>

          {/* Tabs */}
          <div className="flex gap-1 mb-8 border-b border-border">
            <button
              onClick={() => setTab("items")}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${tab === "items" ? "border-accent text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
            >
              Knowledge Base ({items.length})
            </button>
            <button
              onClick={() => setTab("submissions")}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${tab === "submissions" ? "border-accent text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
            >
              <MessageSquare size={14} className="inline mr-1.5" />
              Submissions ({submissions.length})
            </button>
          </div>

          {tab === "items" && (
            <div>
              <button
                onClick={() => { setShowNew(true); setEditing(null); setForm({ question: "", answer: "", tags: "", published: true }); setShowPreview(false); }}
                className="mb-6 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm flex items-center gap-2"
              >
                <Plus size={16} /> Add Q&A
              </button>

              {(showNew || editing) && (
                <div className="mb-8 rounded-xl border border-border bg-card p-6 space-y-4">
                  <input
                    value={form.question}
                    onChange={(e) => setForm({ ...form, question: e.target.value })}
                    placeholder="Question"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <textarea
                      value={form.answer}
                      onChange={(e) => setForm({ ...form, answer: e.target.value })}
                      placeholder="Answer (supports markdown)"
                      rows={8}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-y"
                    />
                    {showPreview ? (
                      <div className="rounded-lg border border-border bg-background px-4 py-3 overflow-y-auto max-h-[300px]">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-2">Preview</p>
                        <div className="prose prose-sm max-w-none text-foreground">
                          <ReactMarkdown>{form.answer || "*Start typing to see preview…*"}</ReactMarkdown>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPreview(!showPreview)}
                    className="text-xs text-accent hover:underline"
                  >
                    {showPreview ? "Hide preview" : "Show markdown preview"}
                  </button>
                  <input
                    value={form.tags}
                    onChange={(e) => setForm({ ...form, tags: e.target.value })}
                    placeholder="Tags (comma separated, e.g. ADHD, workplace, adjustments)"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <label className="flex items-center gap-2 text-sm text-foreground">
                    <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
                    Published (visible on Ask Rich page)
                  </label>
                  <div className="flex gap-3">
                    <button onClick={() => saveItem(!editing)} className="px-5 py-2 rounded-lg bg-accent text-accent-foreground font-bold text-sm flex items-center gap-2">
                      <Save size={14} /> {editing ? "Update" : "Save"}
                    </button>
                    <button onClick={() => { setShowNew(false); setEditing(null); }} className="px-5 py-2 rounded-lg border border-border text-foreground text-sm flex items-center gap-2">
                      <X size={14} /> Cancel
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="rounded-xl border border-border bg-card p-5 flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {item.published ? <Eye size={12} className="text-accent" /> : <EyeOff size={12} className="text-muted-foreground" />}
                        <p className="font-display font-semibold text-sm text-foreground truncate">{item.question}</p>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">{item.answer}</p>
                      {item.tags?.length > 0 && (
                        <div className="flex gap-1 mt-2">
                          {item.tags.map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-muted text-muted-foreground font-medium flex items-center gap-1">
                              <Tag size={8} /> {t}
                            </span>
                          ))}
                        </div>
                      )}
                      {item.slug && (
                        <p className="text-[10px] text-muted-foreground/60 mt-1.5">/ask-rich/{item.slug}</p>
                      )}
                    </div>
                    <div className="flex gap-1.5 shrink-0">
                      <button onClick={() => startEdit(item)} className="p-2 rounded-lg hover:bg-muted transition-colors" title="Edit">
                        <Edit2 size={14} className="text-foreground" />
                      </button>
                      <button onClick={() => deleteItem(item.id)} className="p-2 rounded-lg hover:bg-destructive/10 transition-colors" title="Delete">
                        <Trash2 size={14} className="text-destructive" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "submissions" && (
            <div className="space-y-3">
              {submissions.length === 0 && (
                <p className="text-muted-foreground text-sm">No submissions yet.</p>
              )}
              {submissions.map((sub) => (
                <div key={sub.id} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-semibold text-sm text-foreground">{sub.question}</p>
                      {sub.email && <p className="text-xs text-muted-foreground mt-1">{sub.email}</p>}
                      <p className="text-xs text-muted-foreground mt-1">{new Date(sub.created_at).toLocaleDateString()}</p>
                    </div>
                    <div className="flex gap-1.5 shrink-0 items-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${sub.status === "pending" ? "bg-yellow-100 text-yellow-800" : sub.status === "answered" ? "bg-green-100 text-green-800" : "bg-muted text-muted-foreground"}`}>
                        {sub.status}
                      </span>
                      <button
                        onClick={() => convertToQA(sub)}
                        className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                        title="Convert to Q&A"
                      >
                        <ArrowRight size={14} className="text-accent" />
                      </button>
                      {sub.status === "pending" && (
                        <>
                          <button onClick={() => updateSubmission(sub.id, "answered")} className="p-1.5 rounded-lg hover:bg-muted transition-colors" title="Mark answered">
                            <CheckCircle size={14} className="text-green-600" />
                          </button>
                          <button onClick={() => updateSubmission(sub.id, "archived")} className="p-1.5 rounded-lg hover:bg-muted transition-colors" title="Archive">
                            <Archive size={14} className="text-muted-foreground" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default AdminQA;
