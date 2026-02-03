'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { features } from '@/lib/data';

export const Features = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          Everything Freelancers Actually Need
        </h2>
        <p className="text-center text-text-muted mb-12 max-w-2xl mx-auto">
          TaskFlow is purpose-built for freelancers. We listened to your pain points and designed the solution you've been waiting for.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { value: '10,000+', label: 'Freelancers Joined' },
            { value: '95%', label: 'Satisfaction Rate' },
            { value: '50+', label: 'Countries' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{
                transitionDelay: isVisible ? `${600 + i * 100}ms` : '0ms',
              }}
            >
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
