import { Globe, ShoppingCart, Search, Share2, FileText, Wrench, Target, BarChart, CheckCircle2, Zap, Users } from 'lucide-react';

export const mockServices = [
  {
    title: 'Website Design & Development',
    description: 'Custom, responsive websites built with modern technologies to deliver exceptional user experiences and drive conversions.',
    icon: <Globe className="w-6 h-6 text-white" />
  },
  {
    title: 'E-commerce Website Development',
    description: 'Powerful online stores with secure payment integration, inventory management, and seamless shopping experiences.',
    icon: <ShoppingCart className="w-6 h-6 text-white" />
  },
  {
    title: 'SEO (Search Engine Optimization)',
    description: 'Data-driven SEO strategies to improve your search rankings, increase organic traffic, and boost visibility.',
    icon: <Search className="w-6 h-6 text-white" />
  },
  {
    title: 'Social Media Marketing',
    description: 'Engaging social media campaigns that build brand awareness, drive engagement, and convert followers into customers.',
    icon: <Share2 className="w-6 h-6 text-white" />
  },
  {
    title: 'Google Ads & Paid Advertising',
    description: 'Strategic PPC campaigns optimized for maximum ROI, targeting the right audience at the right time.',
    icon: <Target className="w-6 h-6 text-white" />
  },
  {
    title: 'Content Marketing',
    description: 'Compelling content that tells your story, engages your audience, and establishes your brand as an industry leader.',
    icon: <FileText className="w-6 h-6 text-white" />
  },
  {
    title: 'Website Maintenance & Support',
    description: 'Ongoing technical support, updates, and optimization to keep your website secure, fast, and running smoothly.',
    icon: <Wrench className="w-6 h-6 text-white" />
  }
];

export const mockWhyChoose = [
  {
    title: 'Result-Oriented',
    description: 'We focus on delivering measurable outcomes that directly impact your bottom line.',
    icon: <BarChart className="w-8 h-8 text-orange-600" />
  },
  {
    title: 'Experienced Team',
    description: 'Our professionals bring years of expertise in digital marketing and web development.',
    icon: <Users className="w-8 h-8 text-orange-600" />
  },
  {
    title: 'Transparent Communication',
    description: 'Stay informed with regular updates and clear reporting on all project activities.',
    icon: <CheckCircle2 className="w-8 h-8 text-orange-600" />
  },
  {
    title: 'Affordable Pricing',
    description: 'Premium services at competitive rates designed for businesses of all sizes.',
    icon: <Target className="w-8 h-8 text-orange-600" />
  },
  {
    title: 'Long-term Growth',
    description: 'We build sustainable strategies that ensure continuous business growth over time.',
    icon: <Zap className="w-8 h-8 text-orange-600" />
  }
];

export const mockProcess = [
  {
    title: 'Requirement Analysis',
    description: 'We begin by understanding your business goals, target audience, and specific requirements. Through detailed consultations, we identify opportunities and challenges to create a tailored strategy.'
  },
  {
    title: 'Strategy & Planning',
    description: 'Based on our analysis, we develop a comprehensive roadmap that outlines timelines, milestones, and deliverables. We define clear objectives and KPIs to measure success.'
  },
  {
    title: 'Design & Development',
    description: 'Our team brings your vision to life with stunning designs and robust development. We follow best practices and modern standards to ensure quality and performance.'
  },
  {
    title: 'Marketing Execution',
    description: 'We launch and manage your digital marketing campaigns across multiple channels. Our data-driven approach ensures optimal reach and engagement with your target audience.'
  },
  {
    title: 'Optimization & Growth',
    description: 'We continuously monitor performance, analyze data, and refine strategies to maximize results. Regular optimization ensures sustained growth and improved ROI.'
  }
];

export const mockPortfolio = [
  {
    title: 'E-commerce Fashion Store',
    description: 'Complete online store with 200+ products, payment gateway integration, and inventory management.',
    category: 'E-commerce',
    icon: <ShoppingCart className="w-16 h-16 text-slate-400" />
  },
  {
    title: 'Restaurant Website',
    description: 'Modern website with online ordering, menu management, and table reservation system.',
    category: 'Web Development',
    icon: <Globe className="w-16 h-16 text-slate-400" />
  },
  {
    title: 'Healthcare SEO Campaign',
    description: 'Achieved 300% increase in organic traffic and first-page rankings for 15+ keywords.',
    category: 'SEO',
    icon: <Search className="w-16 h-16 text-slate-400" />
  },
  {
    title: 'Real Estate Portal',
    description: 'Property listing platform with advanced search, virtual tours, and lead management.',
    category: 'Web Development',
    icon: <Globe className="w-16 h-16 text-slate-400" />
  },
  {
    title: 'Social Media Growth',
    description: 'Grew Instagram following from 2K to 50K in 6 months with strategic content marketing.',
    category: 'Social Media',
    icon: <Share2 className="w-16 h-16 text-slate-400" />
  },
  {
    title: 'Google Ads Campaign',
    description: 'Generated 500+ qualified leads with 400% ROI through targeted PPC campaigns.',
    category: 'Paid Ads',
    icon: <Target className="w-16 h-16 text-slate-400" />
  }
];

export const mockTestimonials = [
  {
    name: 'Rajesh Kumar',
    position: 'CEO, TechStart Solutions',
    feedback: 'Narayan Growthwave transformed our online presence completely. Our website traffic increased by 250% and we are getting quality leads consistently. Highly recommended!'
  },
  {
    name: 'Priya Sharma',
    position: 'Founder, StyleHub Fashion',
    feedback: 'The e-commerce platform they built for us is amazing! Sales have tripled in just 4 months. Their team is professional, responsive, and truly understands business needs.'
  },
  {
    name: 'Amit Patel',
    position: 'Marketing Head, GreenLife Organics',
    feedback: 'Outstanding SEO and social media work! We now rank on the first page for our main keywords and our social media engagement has skyrocketed. Best investment we made.'
  },
  {
    name: 'Neha Gupta',
    position: 'Director, Elite Properties',
    feedback: 'From website design to Google Ads, everything was executed flawlessly. We are now the top choice in our city. Their strategic approach really works!'
  },
  {
    name: 'Vikram Singh',
    position: 'Owner, FitZone Gym',
    feedback: 'They delivered exactly what we needed - a modern website and effective digital marketing. Our membership inquiries have doubled. Great team to work with!'
  },
  {
    name: 'Anjali Mehta',
    position: 'Manager, Bloom Beauty Salon',
    feedback: 'Professional service from start to finish. Our new website looks stunning and the social media campaigns are bringing in customers daily. Very satisfied with the results!'
  }
];