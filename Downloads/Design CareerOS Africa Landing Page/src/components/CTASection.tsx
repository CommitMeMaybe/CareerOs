import { useState } from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import { RealityCheckModal } from './RealityCheckModal';

export function CTASection() {
  const [realityCheckOpen, setRealityCheckOpen] = useState(false);

  return (
    <section className="px-4 py-24 bg-white border-t border-neutral-200">
      <div className="max-w-4xl mx-auto text-center">
        {/* Terminal-style Box */}
        <div className="bg-neutral-900 text-white rounded-lg p-12 mb-12">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <Terminal className="w-6 h-6 text-orange-400" />
            <span className="text-orange-400 font-mono text-sm">system/message</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
            Ready for the Truth?
          </h2>

          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Stop wasting time on platforms that give you false hope.
            Get your reality check, build verified skills, and land real jobs.
          </p>

          <button
            onClick={() => setRealityCheckOpen(true)}
            className="px-8 py-4 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors inline-flex items-center gap-2 font-medium"
          >
            Start Your Reality Check
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-neutral-900" />
            <span className="text-lg font-medium text-neutral-900 tracking-tight">CareerOS Africa</span>
          </div>
          <p className="text-neutral-600 text-sm">
            Bridge, Don't Build. Verify, Don't Trust.
          </p>
        </div>
      </div>

      {/* Modal */}
      <RealityCheckModal open={realityCheckOpen} onOpenChange={setRealityCheckOpen} />
    </section>
  );
}
