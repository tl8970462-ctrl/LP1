import { Feature, Testimonial, Step } from '@/types';

export const features: Feature[] = [
  {
    title: 'One Dashboard',
    description: 'See all your clients, projects, and finances in one unified view. No more switching between tabs.',
    icon: '📊',
  },
  {
    title: 'Client Profiles',
    description: 'Store everything you need about each client in one place. Contacts, rates, preferences, and history.',
    icon: '👥',
  },
  {
    title: 'Real Analytics',
    description: 'Track earnings by project, client, or category. Know exactly where your income comes from.',
    icon: '📈',
  },
  {
    title: 'Never Miss a Deadline',
    description: 'Smart reminders for project deadlines, follow-ups, and invoices. Alerts that actually matter.',
    icon: '⏰',
  },
  {
    title: 'Automate Busywork',
    description: 'Generate invoices, proposals, and contracts in seconds. Spend time on work that pays.',
    icon: '⚡',
  },
  {
    title: 'Manage On the Go',
    description: 'Everything syncs across your devices. Check in on your business from anywhere.',
    icon: '📱',
  },
];

export const testimonials: Testimonial[] = [
  {
    author: 'Sarah Chen',
    role: 'Freelance Designer',
    content:
      'TaskFlow saves me 5+ hours a week. I\'m finally organized and can focus on what I love — design work, not admin.',
    avatar: 'SC',
  },
  {
    author: 'Marcus Rodriguez',
    role: 'Web Developer',
    content:
      'The analytics alone are worth it. I know exactly how much each client is worth and can make smarter decisions.',
    avatar: 'MR',
  },
  {
    author: 'Emily Thompson',
    role: 'Content Creator',
    content:
      'Invoicing used to stress me out. Now it takes 30 seconds. TaskFlow is the business tool freelancers actually need.',
    avatar: 'ET',
  },
];

export const steps: Step[] = [
  {
    number: 1,
    title: 'Sign Up in Seconds',
    description: 'Create your TaskFlow account. No credit card required, no complicated setup.',
  },
  {
    number: 2,
    title: 'Add Your First Client',
    description: 'Import or manually add your clients. TaskFlow syncs with your existing tools.',
  },
  {
    number: 3,
    title: 'Start Earning More',
    description: 'Use TaskFlow to manage projects, track time, and invoice faster. Watch your efficiency soar.',
  },
];
