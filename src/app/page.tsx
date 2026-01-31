
import { Hero } from '@/components/home/hero';
import { TrustBar } from '@/components/home/trust-bar';
import { StatsCounter } from '@/components/home/stats-counter';
import { TechStackShowcase } from '@/components/home/tech-stack-showcase';
import dynamic from 'next/dynamic';

const HeroCaseStudy = dynamic(() => import('@/components/home/hero-case-study').then(mod => mod.HeroCaseStudy));
const Pillars = dynamic(() => import('@/components/home/pillars').then(mod => mod.Pillars));
const SolutionsGrid = dynamic(() => import('@/components/home/solutions-grid').then(mod => mod.SolutionsGrid));
const MoreProof = dynamic(() => import('@/components/home/more-proof').then(mod => mod.MoreProof));
const Testimonials = dynamic(() => import('@/components/home/testimonials').then(mod => mod.Testimonials));
const InsightsPreview = dynamic(() => import('@/components/home/insights-preview').then(mod => mod.InsightsPreview));
const FinalCta = dynamic(() => import('@/components/home/final-cta').then(mod => mod.FinalCta));


export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <StatsCounter />
      <TrustBar />
      <HeroCaseStudy />
      <Pillars />
      <SolutionsGrid />
      <TechStackShowcase />
      <MoreProof />
      <Testimonials />
      <InsightsPreview />
      <FinalCta />
    </div>
  );
}
