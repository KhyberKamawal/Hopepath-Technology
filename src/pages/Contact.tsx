// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     service: '',
//     budget: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       company: '',
//       service: '',
//       budget: '',
//       message: ''
//     });
//     alert('Thank you for your message! We\'ll get back to you soon.');
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center relative z-10"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">In Touch</span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Ready to start your next project? Let's discuss your requirements and 
//               explore how we can help bring your vision to life.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:grid lg:grid-cols-2 lg:gap-16">
//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="mb-12 lg:mb-0"
//             >
//               <h2 className="text-3xl font-bold text-gray-900 mb-8">
//                 Let's Start a Conversation
//               </h2>
//               <p className="text-lg text-gray-600 mb-8">
//                 Whether you have a specific project in mind or just want to explore possibilities, 
//                 we're here to help. Reach out through any of the channels below.
//               </p>

//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <Mail className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
//                     <p className="text-gray-600">khyberk460@gmail.com</p>
//                     <p className="text-sm text-gray-500">We respond within 2 hours</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <Phone className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
//                     <p className="text-gray-600">+93 77 6583537</p>
//                     <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <MapPin className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
//                     <p className="text-gray-600">E11/2 Markaz ,Islamabad</p>
//                     <p className="text-sm text-gray-500">Open for meetings by appointment</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <Clock className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
//                     <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
//                     <p className="text-sm text-gray-500">Saturday: 10:00 AM - 2:00 PM</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Live Chat */}
//               <div className="mt-8 p-6 bg-blue-50 rounded-xl">
//                 <div className="flex items-center space-x-3 mb-3">
//                   <MessageSquare className="h-6 w-6 text-blue-600" />
//                   <h3 className="text-lg font-semibold text-gray-900">Live Chat Support</h3>
//                 </div>
//                 <p className="text-gray-600 mb-4">
//                   Need immediate assistance? Our live chat support is available during business hours.
//                 </p>
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
//                   Start Live Chat
//                 </button>
//               </div>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="bg-white rounded-xl shadow-lg p-8"
//             >
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                       placeholder="Your full name"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
//                     Company Name
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                     placeholder="Your company name"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
//                       Service Interested In *
//                     </label>
//                     <select
//                       id="service"
//                       name="service"
//                       required
//                       value={formData.service}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                     >
//                       <option value="">Select a service</option>
//                       <option value="website">Website Development</option>
//                       <option value="webapp">Web Application</option>
//                       <option value="mobile">Mobile App Development</option>
//                       <option value="seo">SEO & Digital Marketing</option>
//                       <option value="hosting">Hosting & Maintenance</option>
//                       <option value="consulting">Consulting</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
//                       Project Budget
//                     </label>
//                     <select
//                       id="budget"
//                       name="budget"
//                       value={formData.budget}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                     >
//                       <option value="">Select budget range</option>
//                       <option value="under-5k">Under $5,000</option>
//                       <option value="5k-10k">$5,000 - $10,000</option>
//                       <option value="10k-25k">$10,000 - $25,000</option>
//                       <option value="25k-50k">$25,000 - $50,000</option>
//                       <option value="over-50k">Over $50,000</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                     Project Details *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     required
//                     rows={5}
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
//                     placeholder="Please describe your project requirements, timeline, and any specific features you need..."
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
//                 >
//                   Send Message
//                   <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//  {/* Map Section */}
// <section className="py-20 bg-gray-50">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="text-center mb-12"
//     >
//       <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
//       <p className="text-lg text-gray-600">
//         Visit our office for in-person consultations and project discussions
//       </p>
//     </motion.div>

//     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//   <div className="aspect-w-16 aspect-h-9">
//     <iframe
//       src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Plot%20No,%2025%20Street%2045,%20markaz%20SCHS%20E%2011/2%20E-11,%20Islamabad,%2044000,%20Pakistan+(Hopepath%20Technology)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//       width="100%"
//       height="400"
//       style={{ border: 0 }}
//       allowFullScreen
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//       title="Our Islamabad (E-11/2 Markaz) Location"
//     ></iframe>
//   </div>
// </div>
//   </div>
// </section>

//       {/* Newsletter Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Updated</span>
//             </h2>
//             <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//               Subscribe to our newsletter for the latest tech insights, project updates, and industry trends.
//             </p>
            
//             <div className="max-w-md mx-auto">
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"
//                 />
//                 <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-medium hover:bg-gray-100 transition-colors duration-200">
//                   Subscribe
//                 </button>
//               </div>
//               <p className="text-blue-100 text-sm mt-3">
//                 No spam, unsubscribe at any time.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

// WhatsApp settings
const WHATSAPP_NUMBER = "93776583537"; // Don't use leading 00
const DEFAULT_MESSAGE = "Hello, I want to discuss a project. For now, you can contact us through WhatsApp.";

// Redirect function
const redirectToWhatsApp = (message?: string) => {
  toast.success("Redirecting you to WhatsApp...");
  setTimeout(() => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || DEFAULT_MESSAGE)}`;
    window.open(url, "_blank");
  }, 1000);
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userMessage = `Hello, I am ${formData.name}.
Email: ${formData.email}
Company: ${formData.company || "N/A"}
Service: ${formData.service}
Budget: ${formData.budget || "N/A"}
Message: ${formData.message}

For now, you can contact us through WhatsApp.`;

    redirectToWhatsApp(userMessage);

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

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
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">In Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss your requirements and 
              explore how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 lg:mb-0"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you have a specific project in mind or just want to explore possibilities, 
                we're here to help. Reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">khyberk460@gmail.com</p>
                    <p className="text-sm text-gray-500">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+93 77 6583537</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">E11/2 Markaz ,Islamabad</p>
                    <p className="text-sm text-gray-500">Open for meetings by appointment</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-500">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Live Chat Support</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Need immediate assistance? Our live chat support is available during business hours.
                </p>
                <button
                  onClick={() => redirectToWhatsApp()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Start Live Chat
                </button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="webapp">Web Application</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="seo">SEO & Digital Marketing</option>
                      <option value="hosting">Hosting & Maintenance</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Please describe your project requirements, timeline, and any specific features you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
            <p className="text-lg text-gray-600">
              Visit our office for in-person consultations and project discussions
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Plot%20No,%2025%20Street%2045,%20markaz%20SCHS%20E%2011/2%20E-11,%20Islamabad,%2044000,%20Pakistan+(Hopepath%20Technology)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Islamabad (E-11/2 Markaz) Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Updated</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest tech insights, project updates, and industry trends.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-blue-100 text-sm mt-3">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
