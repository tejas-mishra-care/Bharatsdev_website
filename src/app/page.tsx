
import { Hero } from '@/components/home/hero';
import { TrustBar } from '@/components/home/trust-bar';
import { TechStackShowcase } from '@/components/home/tech-stack-showcase';
import dynamic from 'next/dynamic';

const HeroCaseStudy = dynamic(() => import('@/components/home/hero-case-study').then(mod => mod.HeroCaseStudy), { ssr: false });
const Pillars = dynamic(() => import('@/components/home/pillars').then(mod => mod.Pillars), { ssr: false });
const SolutionsGrid = dynamic(() => import('@/components/home/solutions-grid').then(mod => mod.SolutionsGrid), { ssr: false });
const MoreProof = dynamic(() => import('@/components/home/more-proof').then(mod => mod.MoreProof), { ssr: false });
const Testimonials = dynamic(() => import('@/components/home/testimonials').then(mod => mod.Testimonials), { ssr: false });
const InsightsPreview = dynamic(() => import('@/components/home/insights-preview').then(mod => mod.InsightsPreview), { ssr: false });
const FinalCta = dynamic(() => import('@/components/home/final-cta').then(mod => mod.FinalCta), { ssr: false });


export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Hero />
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
