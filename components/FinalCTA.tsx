'use client';

export const FinalCTA = () => {
  const scrollToWaitlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('waitlist-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Limited Spots Available
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Only the first 500 early users will get lifetime access to TaskFlow Pro at 50% off. After that, prices return to normal. Secure your spot today.
        </p>

        <button
          onClick={scrollToWaitlist}
          className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-xl transition-shadow duration-200 text-lg"
        >
          Claim Your Spot Now
        </button>

        <p className="text-sm text-white/70 mt-6">
          ✓ No credit card required • ✓ Instant confirmation • ✓ Cancel anytime
        </p>
      </div>
    </section>
  );
};
