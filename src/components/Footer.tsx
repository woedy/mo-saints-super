import { Link } from "react-router-dom";
import logo from "@/assets/mo-saints-logo.png";

const footerLinks = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Products" },
      { to: "/shop?category=rock-salt", label: "Rock Salt" },
      { to: "/shop?category=bath-ritual", label: "Bath Rituals" },
      { to: "/shop?category=gift-sets", label: "Gift Sets" },
    ],
  },
  {
    title: "Learn",
    links: [
      { to: "/rituals", label: "Ritual Guide" },
      { to: "/about", label: "Our Story" },
      { to: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms of Service" },
      { to: "/returns", label: "Returns & Refunds" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <img 
                src={logo} 
                alt="Mo Saints" 
                width="32" 
                height="32" 
                className="w-8 h-8 object-contain opacity-90 transition-opacity group-hover:opacity-100"
                loading="lazy"
              />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Mo Saints
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Earth-based wellness rooted in simplicity, balance, and the quiet power of natural salt.
            </p>
            <p className="text-xs text-muted-foreground italic">
              "Buy Mo Saints, Have More Saints"
            </p>
          </div>

          {/* Link Groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mo Saints. All rights reserved. This is a demo website.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with earth, intention, and care.
          </p>
        </div>
      </div>
    </footer>
  );
}
