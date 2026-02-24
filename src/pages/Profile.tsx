import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useToast } from "@/hooks/use-toast";
import { User, Package, Heart, LogOut } from "lucide-react";

export default function Profile() {
  const { user, signOut, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  if (!isAuthenticated) {
    navigate("/account/sign-in");
    return null;
  }

  const handleSignOut = () => {
    signOut();
    toast({ title: "Signed Out", description: "See you next time." });
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-lg">
      <Breadcrumbs items={[{ label: "Account" }]} />
      <div className="text-center mb-10">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-primary" />
        </div>
        <h1 className="font-serif text-2xl text-foreground">{user?.name}</h1>
        <p className="text-sm text-muted-foreground">{user?.email}</p>
      </div>

      <div className="space-y-3">
        <Link to="/account/orders" className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-primary/30 transition-colors">
          <Package className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Order History</span>
        </Link>
        <Link to="/wishlist" className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-primary/30 transition-colors">
          <Heart className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Wishlist</span>
        </Link>
        <button onClick={handleSignOut} className="w-full flex items-center gap-3 p-4 border border-border rounded-lg hover:border-destructive/30 transition-colors text-left">
          <LogOut className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
