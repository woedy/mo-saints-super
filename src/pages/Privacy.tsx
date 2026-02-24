import Breadcrumbs from "@/components/Breadcrumbs";

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-3xl">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <h1 className="font-serif text-3xl text-foreground mb-6">Privacy Policy</h1>
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <p className="text-foreground font-medium">Last updated: February 2026</p>
        <p>
          Mo Saints respects your privacy and is committed to protecting your personal information. 
          This is a demo website — no real personal data is collected, stored, or processed.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Information We Collect (Demo)</h2>
        <p>
          In this demo environment, information entered into forms (name, email, address) is stored 
          locally in your browser's localStorage. It is not transmitted to any server or third party.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">How We Use Information</h2>
        <p>
          In a live environment, Mo Saints would use your information solely to process orders, 
          improve your experience, and communicate with you about your purchases. We would never 
          sell your personal information to third parties.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Cookies</h2>
        <p>
          This demo site uses localStorage to simulate shopping cart, wishlist, and account features. 
          No tracking cookies are used.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Your Rights</h2>
        <p>
          You can clear all demo data at any time by clearing your browser's localStorage. 
          In a live environment, you would have the right to access, correct, or delete your 
          personal information at any time.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Contact</h2>
        <p>
          For questions about our privacy practices, contact us at hello@mosaints.earth.
        </p>
      </div>
    </div>
  );
}
