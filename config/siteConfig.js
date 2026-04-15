export const siteConfig = {
  name: "Aventurine Tech Solutions",
  tagline: "Innovating Digital Future",
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
    title: "Welcome to Aventurine Tech Solutions",
    subtitle: "Building cutting-edge digital solutions that transform businesses and empower innovation.",
    ctaText: "Start Your Project",
    ctaHref: "/contact",
    badge: "✦ Trusted by 500+ businesses worldwide",
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    // Hospital: https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=80
    // Company:  https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80
    // Default:  https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80
  },
  footer: " 2025 Aventurine Tech Solutions. All rights reserved.",
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
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
  stats: [
    { label: "Projects Delivered", value: "500+", prefix: "" },
    { label: "Happy Clients", value: "50+", prefix: "" },
    { label: "Years of Experience", value: "10+", prefix: "" },
    { label: "Team Members", value: "25+", prefix: "" }
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
