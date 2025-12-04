import { BarChart3, Video, Target, CheckCircle } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="px-4 py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-neutral-900 text-white rounded mb-6 uppercase tracking-wide text-xs font-medium">
            MVP Features
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-4">
            Three Features That Actually Work
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            No fluff. No promises. Just tools that force you to get better and get hired.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Feature 1 - Reality Check */}
          <div className="bg-white border border-neutral-200 rounded-lg p-8">
            <div className="w-12 h-12 bg-orange-600 rounded flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium text-neutral-900 mb-3">
              The "Reality Check" Dashboard
            </h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Import your CV and get a harsh truth score. No sugarcoating.
            </p>

            {/* Example Output */}
            <div className="p-4 bg-neutral-900 text-neutral-300 rounded font-mono text-sm mb-4">
              <div className="text-orange-400 mb-2">{'>'} Analysis complete</div>
              <div className="mb-2">You want: Data Analyst</div>
              <div className="mb-2">Your CV says: Shop Assistant</div>
              <div className="text-red-400">Match: 12%</div>
            </div>

            <div className="p-4 bg-orange-50 border border-orange-200 rounded">
              <div className="text-sm font-medium text-neutral-900 mb-2">Action Required:</div>
              <div className="text-sm text-neutral-600">
                Complete 3 projects this weekend to fix this gap.
              </div>
            </div>
          </div>

          {/* Feature 2 - Micro-Course */}
          <div className="bg-white border border-neutral-200 rounded-lg p-8">
            <div className="w-12 h-12 bg-orange-600 rounded flex items-center justify-center mb-6">
              <Video className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium text-neutral-900 mb-3">
              The "Micro-Course" Aggregator
            </h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Curate, don't create. We serve the best free tutorials and verify you watched them.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded">
                <div className="text-2xl font-medium text-neutral-900 mb-1">0%</div>
                <div className="text-xs text-neutral-600">Content we film</div>
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded">
                <div className="text-2xl font-medium text-neutral-900 mb-1">100%</div>
                <div className="text-xs text-neutral-600">Best-in-class curation</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                YouTube API integration
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                Custom verification quiz
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                Skill badge on completion
              </div>
            </div>
          </div>

          {/* Feature 3 - Sniper Apply */}
          <div className="bg-white border border-neutral-200 rounded-lg p-8">
            <div className="w-12 h-12 bg-orange-600 rounded flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium text-neutral-900 mb-3">
              The "Sniper" Auto-Apply
            </h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Not shotgun. Not spam. Targeted applications that actually get responses.
            </p>

            {/* Process Steps */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-neutral-900 text-white rounded flex items-center justify-center text-xs flex-shrink-0 font-medium">1</div>
                <div className="text-sm text-neutral-600">Reads Job Description</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-neutral-900 text-white rounded flex items-center justify-center text-xs flex-shrink-0 font-medium">2</div>
                <div className="text-sm text-neutral-600">Rewrites CV to match keywords</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-neutral-900 text-white rounded flex items-center justify-center text-xs flex-shrink-0 font-medium">3</div>
                <div className="text-sm text-neutral-600">Generates unique cover letter</div>
              </div>
            </div>

            {/* Gatekeeper */}
            <div className="p-4 bg-red-50 border border-red-200 rounded">
              <div className="text-sm font-medium text-neutral-900 mb-2">🚫 Gatekeeper Active</div>
              <div className="text-sm text-neutral-600">
                Refuses to apply if match score is below <span className="font-medium text-neutral-900">70%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-neutral-900 text-white p-8 rounded-lg">
            <div className="text-orange-400 mb-2 text-xs uppercase tracking-wide font-medium">Bad AI</div>
            <div className="text-lg font-medium mb-2">Sends 100 generic applications</div>
            <div className="text-neutral-400">Response rate: ~2%</div>
          </div>
          <div className="bg-orange-600 text-white p-8 rounded-lg">
            <div className="text-orange-100 mb-2 text-xs uppercase tracking-wide font-medium">Our AI</div>
            <div className="text-lg font-medium mb-2">Sends 10 targeted applications</div>
            <div className="text-orange-100">Response rate: ~40%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
