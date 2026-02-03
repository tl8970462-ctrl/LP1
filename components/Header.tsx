'use client';

export const Header = () => {
  const scrollToWaitlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('waitlist-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white font-bold text-sm">
            TF
          </div>
          <span className="font-bold text-gray-900">TaskFlow</span>
        </div>

        <button
          onClick={scrollToWaitlist}
          className="px-6 py-2 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-medium hover:shadow-lg transition-shadow duration-200"
        >
          Get Early Access
        </button>
      </div>
    </header>
  );
};
