'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { testimonials } from '@/lib/data';

export const SocialProof = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Loved by Freelancers Worldwide
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Trusted by leading freelancers:</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {['DesignCo', 'WebStudio', 'DevLabs', 'CreativeHub'].map((company) => (
              <div
                key={company}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 text-sm"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
