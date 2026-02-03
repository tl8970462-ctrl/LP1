'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export const ProblemSolution = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          The Freelancer's Reality
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              The Problem
            </h3>
            <ul className="space-y-4">
              {[
                'Clients in email, projects in Trello, invoices in another tab',
                'Never sure if you\'re tracking all your income sources',
                'Missing invoices = missed revenue and hours spent chasing payments',
                'Deadlines slip through the cracks while you\'re managing admin work',
                'No clear picture of profitability by client or project',
                'Building custom spreadsheets is a black hole of time',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              The TaskFlow Solution
            </h3>
            <ul className="space-y-4">
              {[
                'All your work organized in one central hub you actually enjoy using',
                'Real-time earnings tracking so you know your financial health instantly',
                'Automatic invoice reminders and one-click payment collection',
                'Smart deadline alerts ensure nothing slips through the cracks',
                'Deep analytics show which clients are actually most profitable',
                'Spend more time doing the work you love, less time on admin',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
