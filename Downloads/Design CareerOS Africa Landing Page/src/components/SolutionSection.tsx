import { ShieldCheck } from 'lucide-react';

export function SolutionSection() {
  return (
    <section className="px-4 py-24 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto">
        {/* Main Solution */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-orange-600 text-white rounded mb-6 uppercase tracking-wide text-xs font-medium">
            The Solution
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-6">
            Bridge, Don't Build
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Instead of building a new destination, build a tool that overlays on top of the existing ecosystem.
            We don't compete with LinkedIn or Coursera—we make them work for you.
          </p>
        </div>

        {/* Unfair Advantage Card */}
        <div className="max-w-4xl mx-auto bg-neutral-900 text-white rounded-lg p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 opacity-10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-orange-600 rounded">
              <ShieldCheck className="w-5 h-5" />
              <span className="uppercase tracking-wide text-sm font-medium">Unfair Advantage</span>
            </div>

            <h3 className="text-2xl font-medium text-white mb-4">
              Verification
            </h3>

            <p className="text-neutral-300 mb-8 text-lg leading-relaxed">
              In Nigeria, employers don't trust CVs because people lie about skills.
              If CareerOS says "This candidate knows React," the employer must believe it.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-orange-400 mb-2 uppercase tracking-wide text-xs font-medium">Feature</div>
                <div className="text-white font-medium">Integrated Assessment</div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-orange-400 mb-2 uppercase tracking-wide text-xs font-medium">Result</div>
                <div className="text-white font-medium">Verified Profile, Not Just a CV</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
