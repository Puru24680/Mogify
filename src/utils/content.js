import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Camera,
  Crown,
  Gem,
  HeartPulse,
  LayoutDashboard,
  ScanFace,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  Clock3,
} from "lucide-react";

export const publicLinks = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Login", href: "/login" },
];

export const workspaceLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Analysis", href: "/analysis", icon: ScanFace },
  { label: "History", href: "/history", icon: Clock3 },
  { label: "Profile", href: "/profile", icon: Crown },
];

export const featureCards = [
  {
    icon: BrainCircuit,
    title: "AI appearance intelligence",
    description:
      "Turn a simple photo into a clear, structured read on facial balance, grooming potential, and presentation opportunities.",
  },
  {
    icon: WandSparkles,
    title: "Personalized playbooks",
    description:
      "Receive hairstyle, beard, skincare, and wardrobe guidance that feels like a curated coaching session, not generic advice.",
  },
  {
    icon: BarChart3,
    title: "Progress you can track",
    description:
      "Keep a clean history of every assessment and visually monitor how your appearance strategy evolves over time.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    description:
      "Built with a polished, lightweight UX that keeps your uploads organized, your workflow fast, and your data easy to manage.",
  },
];

export const testimonials = [
  {
    name: "Ari Chen",
    role: "Product Designer",
    quote:
      "Mogify made my grooming routine feel structured. The output is specific enough to act on, but still clean and premium.",
  },
  {
    name: "Daniel Brooks",
    role: "Founder",
    quote:
      "The dashboard looks like a real SaaS product. I could show this to a client or investor without needing a disclaimer.",
  },
  {
    name: "Maya Patel",
    role: "Creative Director",
    quote:
      "It feels more like a personal appearance coach than an app. The interface is calm, modern, and easy to trust.",
  },
];

export const faqs = [
  {
    question: "What does Mogify analyze?",
    answer:
      "Mogify evaluates facial balance, jawline presence, eye area, skin quality, hair potential, and overall presentation signals from a single image.",
  },
  {
    question: "Is this a looksmaxxing tool?",
    answer:
      "No. Mogify is positioned as a professional AI appearance coach focused on grooming, skincare, hairstyle direction, and self-presentation.",
  },
  {
    question: "Can I track progress over time?",
    answer:
      "Yes. Every analysis is saved to a clean history timeline so you can compare assessments and identify visible improvement patterns.",
  },
  {
    question: "Does the UI support dark mode?",
    answer:
      "Yes. The design system is built with theme-ready variables and neutral surfaces that adapt cleanly to dark mode implementations.",
  },
];

export const heroMetrics = [
  { label: "Overall score", value: "92" },
  { label: "Analysis depth", value: "12 checks" },
  { label: "Recommendations", value: "18 actions" },
];

export const dashboardHighlights = [
  {
    title: "Consistency index",
    value: "87",
    description: "Your improvements are trending upward across the last 90 days.",
  },
  {
    title: "Profile readiness",
    value: "94%",
    description: "Your visual profile is optimized for a polished, professional presence.",
  },
  {
    title: "Analysis cadence",
    value: "Weekly",
    description: "A regular review rhythm keeps feedback practical and actionable.",
  },
];

export const quickActions = [
  { label: "Upload new photo", icon: Camera },
  { label: "Review latest tips", icon: ArrowRight },
  { label: "Open skincare plan", icon: HeartPulse },
  { label: "Check progress", icon: Sparkles },
];

export const metricsTemplate = [
  { key: "facialSymmetry", label: "Facial symmetry" },
  { key: "jawline", label: "Jawline" },
  { key: "eyes", label: "Eyes" },
  { key: "hair", label: "Hair" },
  { key: "skin", label: "Skin" },
  { key: "presence", label: "Presence" },
];

export const profileDefaults = {
  name: "Jordan Lee",
  email: "jordan@mogify.app",
  goal: "Build a sharper, more consistent personal brand.",
  city: "New York, USA",
  plan: "Professional",
};

export const dashboardRecentSeeds = [
  {
    fileName: "portrait-studio.jpg",
    createdAt: "2026-07-22T08:40:00.000Z",
    overallScore: 91,
    summary: "Strong symmetry, refined skin texture, and high hairstyle flexibility.",
    fileSize: 2520000,
  },
  {
    fileName: "profile-check.png",
    createdAt: "2026-07-20T17:25:00.000Z",
    overallScore: 86,
    summary: "Balanced features with a clear opportunity to elevate grooming detail.",
    fileSize: 1980000,
  },
  {
    fileName: "daily-photo.jpeg",
    createdAt: "2026-07-18T12:10:00.000Z",
    overallScore: 83,
    summary: "Solid base profile with room for better styling and skin consistency.",
    fileSize: 1740000,
  },
];
