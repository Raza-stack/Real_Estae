import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: "2024 Luxury Real Estate Market Trends: What Buyers Need to Know",
    excerpt: "Discover the latest trends shaping the luxury real estate market this year, from emerging neighborhoods to innovative home technologies.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Market Trends"
  };

  const blogPosts = [
    {
      id: 2,
      title: "How to Stage Your Luxury Home for Maximum Appeal",
      excerpt: "Expert tips on presenting your high-end property to attract serious buyers and achieve the best possible sale price.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Selling Tips"
    },
    {
      id: 3,
      title: "Investment Opportunities in Emerging Luxury Markets",
      excerpt: "Explore the most promising luxury real estate markets for investors looking to diversify their portfolios.",
      image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Investment"
    },
    {
      id: 4,
      title: "Smart Home Technology: The Future of Luxury Living",
      excerpt: "How cutting-edge technology is transforming luxury homes and what features today's buyers expect.",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Sarah Johnson",
      date: "February 28, 2024",
      readTime: "5 min read",
      category: "Technology"
    },
    {
      id: 5,
      title: "Waterfront Properties: A Comprehensive Buyer's Guide",
      excerpt: "Everything you need to know about purchasing luxury waterfront real estate, from inspections to insurance.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Michael Chen",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Buying Guide"
    },
    {
      id: 6,
      title: "Sustainable Luxury: Eco-Friendly High-End Homes",
      excerpt: "The growing trend of environmentally conscious luxury properties and their impact on the market.",
      image: "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Emily Rodriguez",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Sustainability"
    }
  ];

  const categories = ["All", "Market Trends", "Selling Tips", "Investment", "Technology", "Buying Guide", "Sustainability"];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Real Estate Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest trends, tips, and insights from our luxury real estate experts
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{featuredPost.author}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up animation-delay-200">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    <span>Read</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;