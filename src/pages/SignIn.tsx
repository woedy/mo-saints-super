import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useToast } from "@/hooks/use-toast";

export default function SignIn() {
  const { signIn, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (isAuthenticated) {
    navigate("/account/profile");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email.includes("@")) return;
    signIn(name, email);
    toast({ title: "Welcome", description: `Signed in as ${name}` });
    navigate("/account/profile");
  };

  const inputClass = "w-full px-3 py-2.5 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-md">
      <Breadcrumbs items={[{ label: "Sign In" }]} />
      <h1 className="font-serif text-3xl text-foreground mb-2 text-center">Welcome Back</h1>
      <p className="text-sm text-muted-foreground text-center mb-8">
        Enter your credentials to access your account and order history.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Your name" value={name} onChange={e => setName(e.target.value)} className={inputClass} required />
        <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} className={inputClass} required />
        <button type="submit" className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:opacity-90 transition-opacity">
          Sign In
        </button>
      </form>
    </div>
  );
}
