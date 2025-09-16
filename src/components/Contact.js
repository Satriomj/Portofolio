import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError] = useState(false);


  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi pengiriman form
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form setelah berhasil
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset status sukses setelah beberapa detik
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "satrisenturi@gmail.com",
      link: "mailto:satriosenturi@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "Bogor, Indonesia",
      link: "https://goo.gl/maps/yourlocation"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+62 822 8159 1638",
      link: "tel:+6282281591638"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/satriomj", color: "hover:bg-blue-600" },
    { icon: <FaGithub />, url: "https://github.com/Satriomj", color: "hover:bg-gray-800" },
    { icon: <FaInstagram />, url: "https://instagram.com/satriomjs", color: "hover:bg-pink-600" }
  ];

  // Animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 text-sm font-medium mb-3 border border-cyan-500/20"
          >
            Get In Touch
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Let's <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-gray-400 mb-8"
          >
            I'm currently available for freelance work or full-time positions. 
            If you have a project that needs some creative work, feel free to contact me.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    variants={itemVariants}
                    className="flex items-start hover:text-cyan-400 transition-colors duration-300"
                  >
                    <div className="text-cyan-400 text-xl mt-1 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{info.title}</h4>
                      <p className="text-gray-400">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gray-700 p-3 rounded-full text-white ${social.color} transition-colors duration-300`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-semibold mb-4">Ready to Work Together?</h3>
              <p className="mb-6 opacity-90">
                I'm open for new opportunities and challenges. Let's create something amazing together!
              </p>
              <a 
                href="/assets/file/CV-Satrio Maruli Jaya Sianturi.pdf" 
                download
                className="inline-block px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="satrio sianturi"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2" htmlFor="email">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="satriosenturi@gmail.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project Website"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${
                      isSubmitting 
                        ? "bg-gray-600 cursor-not-allowed" 
                        : "bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-lg hover:shadow-cyan-500/20"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <FaPaperPlane className="mr-2" /> Send Message
                      </span>
                    )}
                  </motion.button>
                  
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                    >
                      Your message has been sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                  
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center"
                    >
                      There was an error sending your message. Please try again later.
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;