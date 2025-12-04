import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CTASection } from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
