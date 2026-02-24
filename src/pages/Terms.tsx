import Breadcrumbs from "@/components/Breadcrumbs";

export default function Terms() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-3xl">
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />
      <h1 className="font-serif text-3xl text-foreground mb-6">Terms of Service</h1>
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <p className="text-foreground font-medium">Last updated: February 2026</p>
        <p>
          Welcome to Mo Saints. These terms govern your use of this demo website. 
          By accessing this site, you agree to these terms.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Demo Disclaimer</h2>
        <p>
          This is a demonstration website. No real products are sold, no real payments are processed, 
          and no real orders are fulfilled. All commerce functionality is simulated for demonstration 
          purposes only.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Intellectual Property</h2>
        <p>
          The Mo Saints brand, product descriptions, and website design are created for 
          demonstration purposes. All content, images, and branding are original creations 
          for this demo project.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Product Information</h2>
        <p>
          Product descriptions are fictional and created for demonstration purposes. 
          Mo Saints does not make any health or medical claims about its demo products. 
          Any ritual suggestions are provided as lifestyle practices, not medical advice.
        </p>
        <h2 className="font-serif text-xl text-foreground pt-2">Limitation of Liability</h2>
        <p>
          This demo website is provided "as is" without warranties of any kind. 
          Mo Saints is not liable for any damages arising from the use of this demonstration website.
        </p>
      </div>
    </div>
  );
}
