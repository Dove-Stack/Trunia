import UniLag from "./Unilag.png";
import UniLorin from "./Unilorin.png";
import CoveUni from "./CovenantUni.png";
import MoniePoint from "./MoniePoint.png";
import DHL from "./DHL.png";
import Chowdeck from "./Chowdeck.png";
import SP from "./S_P.png";
import TechRadar from "./TechRadar.png";
import Logo from "./Logo.png";
import MailPng from "./mail.png";

const featuresData = [
  {
    icon: "akar-icons:cloud-upload",
    bgColor: "bg-blue-100",
    iconColor: "text-feature-cloud",
    title: "Multi Format Upload",
    description:
      "Support for PDF, Word, TXT, and more. Upload documents or paste text directly for instant analysis.",
  },
  {
    icon: "heroicons:chat-bubble-oval-left",
    bgColor: "bg-purple-100",
    iconColor: "text-feature-chat",
    title: "Intelligent Chat Interface",
    description:
      "Ask questions naturally and get precise answers from your documents using advanced AI conversation.",
  },
  {
    icon: "heroicons:bolt",
    bgColor: "bg-pink-100",
    iconColor: "text-feature-bolt",
    title: "Quick Prompts",
    description:
      "Pre-built prompts for common tasks like summarization, key points extraction, and data analysis.",
  },
  {
    icon: "hugeicons:ai-brain-01",
    bgColor: "bg-cyan-100",
    iconColor: "text-feature-brain",
    title: "Deep Analysis",
    description:
      "AI-powered insights that understand context, identify patterns, and extract meaningful information.",
  },
  {
    icon: "ph:clock",
    bgColor: "bg-orange-100",
    iconColor: "text-feature-time",
    title: "Real-Time Processing",
    description:
      "Get instant responses and insights without waiting. Process documents in seconds, not hours. ",
  },
  {
    icon: "heroicons:shield-check",
    bgColor: "bg-green-100",
    iconColor: "text-feature-shield",
    title: "Secure & Private",
    description:
      "Your documents are encrypted and processed securely. We never store or share your data.",
  },
];

const stepsData = [
  {
    icon: "akar-icons:cloud-upload",
    bgColor: "bg-blue-100",
    iconColor: "text-feature-cloud",
    title: "Upload Your Documents",
    description:
      "Drag and drop any document or paste your text. We support PDF, Word, TXT, and more formats.",
  },
  {
    icon: "heroicons:chat-bubble-left-right",
    bgColor: "bg-purple-100",
    iconColor: "text-feature-chat",
    title: "Ask Questions or Use Prompts",
    description:
      "Chat naturally with your document or use quick prompts for instant summaries and insights.",
  },
  {
    icon: "ri:lightbulb-flash-line",
    bgColor: "bg-green-100",
    iconColor: "text-feature-shield",
    title: "Ask Questions or Use Prompts",
    description:
      "Chat naturally with your document or use quick prompts for instant summaries and insights.",
  },
];

const testimonialData = [
  {
    initials: "A",
    userName: "Adebayo O.",
    title: "Research Scientist",
    instituition: "Covenant University",
    bgColor: "bg-blue-500",
    iconColor: "text-white",
    description:
      "Trunia has revolutionized how I process research papers. What used to take hours now takes minutes. The AI understands context incredibly well and provides accurate summaries.",
  },
  {
    initials: "D",
    userName: "Damson A.",
    title: "Legal Analyst",
    instituition: "Thompson & Associates",
    bgColor: "bg-purple-700",
    iconColor: "text-white",
    description:
      "As a legal professional, I deal with hundreds of pages daily. Trunia helps me extract key clauses and understand complex documents quickly. It's an absolute game-changer.",
  },
  {
    initials: "D",
    userName: "Davies L.",
    title: "Content Strategist",
    instituition: "Chowdeck",
    bgColor: "bg-green-700",
    iconColor: "text-white",
    description:
      "The quick prompts feature is brilliant! I can analyze competitor reports, extract insights, and create summaries in seconds. Trunia saves me at least 10 hours per week.",
  },

  {
    initials: "H",
    userName: "Hammed C.",
    title: "MBA Student",
    instituition: "University of Ilorin",
    bgColor: "bg-fuchsia-700",
    iconColor: "text-white",
    description:
      "Perfect for students! I use Trunia to analyze case studies and research papers. The ability to ask follow-up questions makes studying so much more efficient.",
  },
  {
    initials: "A",
    userName: "Alexa L.",
    title: "Medical Researcher ",
    instituition: "Kingsmith",
    bgColor: "bg-orange-700",
    iconColor: "text-white",
    description:
      "The accuracy of Trunia in processing medical literature is impressive. It helps me stay updated with the latest research and identify relevant studies quickly.",
  },
  {
    initials: "S",
    userName: "Sunday A.",
    title: "Financial Analyst",
    instituition: "Moniepoint",
    bgColor: "bg-cyan-800",
    iconColor: "text-white",
    description:
      "Trunia excels at extracting financial data and trends from reports. The AI understands numerical context and provides actionable insights that inform our investment decisions.",
  },
];

const counterData = [
  {
    feat: "10K+",
    context: "Active Users",
  },
  {
    feat: "1M+",
    context: "Documents Analyzed",
  },
  {
    feat: "90%",
    context: "Satisfaction Rate",
  },
  {
    feat: "24/7",
    context: "AI Availability",
  },
];

const useCasedata = [
  {
    title: "Students",
    description:
      "Ace your assignments, understand research papers faster, and prepare for exams with AI-powered study assistance.",
    features: [
      {
        id: "1",
        text: "Summarize lengthy research papers",
      },
      {
        id: "2",
        text: "Extract key arguments and citations",
      },
      {
        id: "3",
        text: "Generate study notes automatically",
      },
    ],
  },
  {
    title: "Researchers",
    description:
      "Analyze multiple papers simultaneously, extract methodologies, and find connections across research.",
    features: [
      {
        id: "1",
        text: "Compare multiple research papers",
      },
      {
        id: "2",
        text: "Extract methodologies and findings",
      },
      {
        id: "3",
        text: "Build comprehensive literature reviews",
      },
    ],
  },
  {
    title: "Professionals",
    description:
      "Review contracts, analyze reports, and extract action items from lengthy business documents.",
    features: [
      {
        id: "1",
        text: "Analyze contracts and legal documents",
      },

      {
        id: "2",
        text: "Extract action items from reports",
      },
      {
        id: "3",
        text: "Summarize meeting notes instantly",
      },
    ],
  },
];

const footerData = [
  {
    title: "Cognita",
    text: "Transform your documents into actionable insights with AI-powered analysis.",
  },

  {
    title: "Product",
    subFeatures: [
      {
        id: "1",
        text: "Features",
      },
      {
        id: "2",
        text: "How it Works",
      },
      {
        id: "3",
        text: "Demo",
      },
    ],
  },
  {
    title: "Company",
    subFeatures: [
      {
        id: "1",
        text: "About Us",
      },

      {
        id: "2",
        text: "Blog",
      },

      {
        id: "3",
        text: "Career",
      },

      {
        id: "4",
        text: "Contact Us",
      },
    ],
  },
  {
    title: "Legal",
    subFeatures: [
      {
        id: "1",
        text: "Terms of Service",
      },
      {
        id: "2",
        text: "Privacy Policy",
      },
      {
        id: "3",
        text: "Community",
      },
    ],
  },
];

export {
  UniLag,
  UniLorin,
  CoveUni,
  MoniePoint,
  Logo,
  DHL,
  Chowdeck,
  SP,
  TechRadar,
  MailPng,
  counterData,
  featuresData,
  stepsData,
  testimonialData,
  useCasedata,
  footerData,
};
