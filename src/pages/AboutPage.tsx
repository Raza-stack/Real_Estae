import React from 'react';
import { Award, Users, Home, TrendingUp, Shield, Heart } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and complete transparency in every transaction."
    },
    {
      icon: Heart,
      title: "Client-First",
      description: "Your dreams and goals are our priority. We're committed to exceeding your expectations at every step."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver exceptional service through expertise, attention to detail, and innovative solutions."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "With over 15 years in luxury real estate, Sarah founded Elite Properties to redefine the client experience."
    },
    {
      name: "Michael Chen",
      role: "Senior Agent",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Michael specializes in luxury properties and investment opportunities, helping clients build wealth through real estate."
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Emily ensures every property is maintained to the highest standards, maximizing value for our clients."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Elite Properties
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner in luxury real estate, dedicated to turning your property dreams into reality
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, Elite Properties emerged from a simple vision: to revolutionize the luxury real estate experience. We believe that buying or selling a home should be more than just a transaction—it should be a journey guided by expertise, integrity, and genuine care.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Over the years, we've built our reputation on delivering exceptional results for our clients. From first-time buyers to seasoned investors, we provide personalized service that goes above and beyond expectations.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`text-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <Home className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Properties Sold</div>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <Users className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">1200+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <Award className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">15</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <TrendingUp className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;