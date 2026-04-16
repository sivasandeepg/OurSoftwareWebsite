export const siteConfig = {
  name: "Aventurine Tech Solutions",
  tagline: "Software Development Company Kavali | Web & App Development Nellore",
  primaryColor: "#1a1a2e",
  secondaryColor: "#16213e",
  accentColor: "#0f3460",
  headingFont: "Playfair Display",
  bodyFont: "Inter",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    title: "Software Development Company Kavali | Transform Your Digital Presence",
    subtitle: "Leading software development company in Kavali, Nellore District. Expert in web development, mobile apps, .NET software & AI agents for local businesses.",
    ctaText: "Start Your Project",
    ctaHref: "/contact",
    badge: "✦ Leading Software Company in Kavali | Serving Nellore District & Andhra Pradesh",
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    // Hospital: https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=80
    // Company:  https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80
    // Default:  https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80
  },
  footer: " 2025 Aventurine Tech Solutions, Kavali, Nellore District, Andhra Pradesh. All rights reserved.",
  footerLinks: {
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Web Development", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
      { label: "Software Solutions", href: "/services" },
      { label: "Digital Marketing", href: "/services" },
    ],
  },
  social: {
    github: "#",
    twitter: "https://x.com/aventurine_tech",
    linkedin: "https://linkedin.com/in/aventurine-tech-solutions-b18b3b403",
    instagram: "https://www.instagram.com/aventurinetechsolutions/",
  },
  location: {
    address: "Your Street Address, Kavali, Nellore District, Andhra Pradesh - 524201",
    phone: "+91-XXXXXXXXXX",
    email: "aventurinetechsolutions@gmail.com",
    coordinates: {
      lat: "14.9145",
      lng: "79.9974"
    },
    serviceAreas: ["Kavali", "Nellore", "Nellore District", "Andhra Pradesh", "South India"]
  },
  stats: [
    { label: "Projects Delivered in Nellore", value: "500+", prefix: "" },
    { label: "Happy Local Clients", value: "200+", prefix: "" },
    { label: "Years Serving Kavali", value: "8+", prefix: "" },
    { label: "Team Members", value: "15+", prefix: "" }
  ],
    theme: {
    dark: {
      background: "from-gray-950 via-[#1a1a2e] to-[#16213e]",
      navBg: "bg-black/30 backdrop-blur-xl border-b border-white/10",
      card: "bg-white/10 backdrop-blur-md border border-white/20",
      text: "text-white",
      subtext: "text-white/70",
      accent: "#0f3460",
    },
    light: {
      background: "from-slate-50 via-white to-slate-100",
      navBg: "bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm",
      card: "bg-white/80 backdrop-blur-md border border-slate-200 shadow-md",
      text: "text-gray-900",
      subtext: "text-gray-600",
      accent: "#0f3460",
    }
  },
};
