import { Users, GraduationCap, Send } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: Users,
      title: 'The "LinkedIn" Trap',
      description: 'Network effects are hard. People won\'t join a new network unless everyone else is there.',
    },
    {
      icon: GraduationCap,
      title: 'The "Coursera" Trap',
      description: 'Creating content is expensive. Building courses from scratch drains resources.',
    },
    {
      icon: Send,
      title: 'The "Auto-Apply" Trap',
      description: 'If you spam 1,000 employers with generic CVs, they will blacklist your domain.',
    }
  ];

  return (
    <section className="px-4 py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-900 rounded mb-6 uppercase tracking-wide text-xs font-medium">
            The Problem
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-4">
            Why Everything Else Fails
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Most career platforms fall into one of three traps. We learned from their mistakes.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-red-200 rounded-lg"
            >
              <div className="w-12 h-12 bg-neutral-900 rounded flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">{problem.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
