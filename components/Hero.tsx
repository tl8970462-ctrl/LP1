'use client';

import { useFormSubmission } from '@/hooks/useFormSubmission';

export const Hero = () => {
  const { email, setEmail, loading, error, success, handleSubmit } =
    useFormSubmission();

  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up text-center leading-tight">
          Finally, One Dashboard for Everything
        </h1>

        <p className="text-lg sm:text-xl text-text-muted mb-8 animate-fade-in-up text-center max-w-2xl mx-auto" style={{ animationDelay: '0.1s' }}>
          Stop juggling spreadsheets, invoicing tools, and client emails. TaskFlow puts everything a
freelancer needs—projects, clients, finances, deadlines—in one beautiful, intuitive dashboard. Join 10,000+ freelancers who've already reclaimed their productivity.
        </p>

        <form
          onSubmit={handleSubmit}
          className="animate-fade-in-up max-w-md mx-auto"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              aria-label="Email address"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-70"
              aria-busy={loading}
            >
              {loading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-3 text-center" role="alert">
              {error}
            </p>
          )}

          {success && (
            <p className="text-green-600 text-sm mt-3 text-center font-medium" role="status">
              ✓ Thanks for joining! Check your email for updates.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
