
import { Hero } from '@/components/home/hero';
import { TrustBar } from '@/components/home/trust-bar';
import { TechStackShowcase } from '@/components/home/tech-stack-showcase';
import { HeroCaseStudy } from '@/components/home/hero-case-study';
import { Pillars } from '@/components/home/pillars';
import { SolutionsGrid } from '@/components/home/solutions-grid';
import { MoreProof } from '@/components/home/more-proof';
import { Testimonials } from '@/components/home/testimonials';
import { InsightsPreview } from '@/components/home/insights-preview';
import { FinalCta } from '@/components/home/final-cta';


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
