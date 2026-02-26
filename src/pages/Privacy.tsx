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
          This policy outlines how we handle the data you share with us.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you create an account, 
          place an order, or contact our support team. This may include your name, email address, 
          shipping address, and payment information.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">How We Use Information</h2>
        <p>
          We use your information solely to process orders, improve your experience, and 
          communicate with you about your purchases. We do not sell your personal 
          information to third parties.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your 
          personal information when you place an order or enter, submit, or access 
          your personal information.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information 
          at any time. Please contact us if you wish to exercise these rights.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Contact</h2>
        <p>
          For questions about our privacy practices, contact us at hello@mosaints.earth.
        </p>
      </div>
    </div>
  );
}
