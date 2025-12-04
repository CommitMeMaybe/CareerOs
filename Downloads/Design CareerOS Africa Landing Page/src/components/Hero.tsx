import { useState } from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import { RealityCheckModal } from './RealityCheckModal';
import { HowItWorksModal } from './HowItWorksModal';

export function Hero() {
  const [realityCheckOpen, setRealityCheckOpen] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-neutral-900 text-white rounded">
          <Terminal className="w-5 h-5" />
          <span className="text-lg tracking-tight">CareerOS</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-medium max-w-4xl mx-auto mb-6 leading-tight">
          <span className="block text-neutral-900">Stop Applying.</span>
          <span className="block text-neutral-900">Start <span className="text-orange-600">Getting Hired</span>.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg max-w-2xl mx-auto text-neutral-600 mb-12 leading-relaxed">
          The career platform that doesn't lie to you. We give you harsh truths, verified skills,
          and targeted applications—not false hope and spam.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <button
            onClick={() => setRealityCheckOpen(true)}
            className="px-8 py-4 bg-neutral-900 text-white rounded hover:bg-neutral-800 transition-colors flex items-center gap-2 font-medium"
          >
            Get Your Reality Check
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => setHowItWorksOpen(true)}
            className="px-8 py-4 border-2 border-neutral-900 text-neutral-900 rounded hover:bg-neutral-50 transition-colors font-medium"
          >
            See How It Works
          </button>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
            <div className="text-4xl font-medium text-neutral-900 mb-2">70%</div>
            <div className="text-sm text-neutral-600">Minimum match score required</div>
          </div>
          <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
            <div className="text-4xl font-medium text-neutral-900 mb-2">100%</div>
            <div className="text-sm text-neutral-600">Verified profiles, not fake CVs</div>
          </div>
          <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
            <div className="text-4xl font-medium text-neutral-900 mb-2">0</div>
            <div className="text-sm text-neutral-600">Spam applications sent</div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <RealityCheckModal open={realityCheckOpen} onOpenChange={setRealityCheckOpen} />
      <HowItWorksModal
        open={howItWorksOpen}
        onOpenChange={setHowItWorksOpen}
        onOpenRealityCheck={() => setRealityCheckOpen(true)}
      />
    </section>
  );
}
