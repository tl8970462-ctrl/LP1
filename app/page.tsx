import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProblemSolution } from '@/components/ProblemSolution';
import { Features } from '@/components/Features';
import { SocialProof } from '@/components/SocialProof';
import { HowItWorks } from '@/components/HowItWorks';
import { Waitlist } from '@/components/Waitlist';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <SocialProof />
      <HowItWorks />
      <Waitlist />
      <FinalCTA />
      <Footer />
    </>
  );
}
