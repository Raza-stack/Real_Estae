import React, { useState, useEffect, useRef } from 'react';
import { Home, Users, Award, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Home,
      number: 500,
      suffix: '+',
      label: 'Properties Sold',
      description: 'Successfully closed deals'
    },
    {
      icon: Users,
      number: 1200,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied customers served'
    },
    {
      icon: Award,
      number: 15,
      suffix: '',
      label: 'Years Experience',
      description: 'In luxury real estate'
    },
    {
      icon: TrendingUp,
      number: 98,
      suffix: '%',
      label: 'Success Rate',
      description: 'Client satisfaction rate'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber: React.FC<{ value: number; suffix: string; isVisible: boolean }> = ({ 
    value, 
    suffix, 
    isVisible 
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [value, isVisible]);

    return (
      <span className="text-4xl md:text-5xl font-bold text-blue-600">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Track Record</h2>
          <p className="text-xl text-gray-600">
            Numbers that speak for our expertise and commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-500 hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <AnimatedNumber 
                value={stat.number} 
                suffix={stat.suffix} 
                isVisible={isVisible} 
              />
              
              <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-1">
                {stat.label}
              </h3>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;