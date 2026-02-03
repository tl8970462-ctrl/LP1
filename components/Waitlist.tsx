'use client';

import { useFormSubmission } from '@/hooks/useFormSubmission';

export const Waitlist = () => {
  const { email, setEmail, loading, error, success, handleSubmit } =
    useFormSubmission();

  return (
    <section id="waitlist-form" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          Join the Waitlist Today
        </h2>
        <p className="text-text-muted mb-8 text-lg">
          Be among the first freelancers to experience the future of business management. TaskFlow launches early 2025.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              aria-label="Email address"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-70"
              aria-busy={loading}
            >
              {loading ? 'Joining...' : 'Get Early Access'}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-3" role="alert">
              {error}
            </p>
          )}

          {success && (
            <p className="text-green-600 text-sm mt-3 font-medium" role="status">
              ✓ Check your email for next steps!
            </p>
          )}
        </form>

        <p className="text-sm text-gray-600 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};
