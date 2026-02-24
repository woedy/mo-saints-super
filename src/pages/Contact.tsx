import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    toast({ title: "Message Sent", description: "Thank you for reaching out. We'll respond within 48 hours." });
  };

  const inputClass = "w-full px-3 py-2.5 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <div className="max-w-3xl">
        <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Get in Touch</h1>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Whether you have a question about our products, need help with an order, 
          or simply want to say hello — we'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Mail, label: "Email", value: "hello@mosaints.earth" },
            { icon: Phone, label: "Phone", value: "+1 (555) 234-5678" },
            { icon: MapPin, label: "Studio", value: "Earth District, CA" },
          ].map((info) => (
            <div key={info.label} className="flex items-start gap-3 p-4 border border-border rounded-lg">
              <info.icon className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
                <p className="text-sm font-medium text-foreground">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="text-center py-12 bg-secondary/30 rounded-lg animate-fade-in">
            <h2 className="font-serif text-xl text-foreground mb-2">Thank You</h2>
            <p className="text-sm text-muted-foreground">
              Your message has been received. We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inputClass} required />
              <input type="email" placeholder="Your email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inputClass} required />
            </div>
            <textarea placeholder="Your message" value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={5} className={inputClass} required />
            <button type="submit" className="px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
