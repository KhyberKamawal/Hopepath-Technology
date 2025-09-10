
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
    id: 1,
    title: 'How We Built a Modern E-Commerce Platform for a Startup',
    excerpt: 'A behind-the-scenes look at how our team designed and developed a scalable e-commerce solution tailored to a client’s unique needs.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Khyber Kamawal',
    date: '2025-August-15',
    category: 'Case Study',
    readTime: '5 min read',
    tags: ['E-Commerce', 'React', 'Scalability']
  },
  {
    id: 2,
    title: 'Native vs Cross-Platform: What We Recommend to Clients',
    excerpt: 'We often get asked whether to build native apps or go cross-platform. Here’s how we guide clients to make the right choice for their goals.',
    image: 'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Abdul Qadeer Shinwarai',
    date: '2025-05-12',
    category: 'Mobile Development',
    readTime: '6 min read',
    tags: ['React Native', 'Flutter', 'Mobile Apps']
  },
  {
    id: 3,
    title: 'Our UI/UX Design Process: From Idea to Prototype',
    excerpt: 'Good design isn’t just about looks—it’s about solving problems. Here’s how we approach user research, wireframing, and prototyping.',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Mashal Zerak',
    date: '2025-07-10',
    category: 'Design',
    readTime: '7 min read',
    tags: ['UI/UX', 'Wireframing', 'Prototyping']
  },
  {
    id: 4,
    title: 'Database Optimization: Lessons from a Real Project',
    excerpt: 'We helped a client reduce query times by 70%. In this article, we share the steps we took to optimize their database performance.',
    image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Abdul Basheer Aryan',
    date: '2025-06-08',
    category: 'Backend Development',
    readTime: '8 min read',
    tags: ['Database', 'Optimization', 'PostgreSQL']
  },
  {
    id: 5,
    title: 'SEO for Small Businesses: What Really Works',
    excerpt: 'Instead of chasing every new trend, we focus on practical SEO strategies that bring consistent results for our clients.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Khyber Kamawal',
    date: '2025-09-05',
    category: 'Digital Marketing',
    readTime: '6 min read',
    tags: ['SEO', 'Content Strategy', 'Marketing']
  },
  {
    id: 6,
    title: 'Why We Chose AWS for a Scalable Client Project',
    excerpt: 'Cloud platforms aren’t one-size-fits-all. Here’s why AWS was the best choice for one of our clients needing global scalability.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Abdul Basheer Aryan',
    date: '2025-05-03',
    category: 'Cloud Technology',
    readTime: '7 min read',
    tags: ['AWS', 'Scalability', 'Cloud']
  }
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Design', 'Backend Development', 'Digital Marketing', 'Cloud Technology'];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Insights & Updates</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest articles on web development, 
              mobile apps, design trends, and technology innovations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap items-center gap-2 bg-gray-100 rounded-lg p-1">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
          >
            <div className="lg:grid lg:grid-cols-2">
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                    {blogPosts[0].category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-gray-600 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600 font-medium">{blogPosts[0].author}</span>
                  </div>
                  
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600 font-medium">{post.author}</span>
                    </div>
                    
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest tech insights delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                Join 1,000+ tech enthusiasts. No spam, unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;