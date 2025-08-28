import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xpwzkwkr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-900/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">
          Get In <span className="text-green-400">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white font-mono mb-6">Let's Connect</h3>
            <p className="text-gray-300 font-mono leading-relaxed mb-8">
              I'm always open to discussing new opportunities, exciting projects, 
              or just having a chat about technology and innovation. Feel free to reach out!
            </p>
          </div>
          
          <div className="space-y-4">
            <a 
              href="mailto:george.merinp@gmail.com"
              className="flex items-center space-x-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-green-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <Mail className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-white font-mono font-semibold">Email</p>
                <p className="text-gray-400 font-mono">george.merinp@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/MerinGeorgeP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <Github className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-mono font-semibold">GitHub</p>
                <p className="text-gray-400 font-mono">@MerinGeorgeP</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/merin-george-p-854522381"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                <Linkedin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-mono font-semibold">LinkedIn</p>
                <p className="text-gray-400 font-mono">Merin George P</p>
              </div>
            </a>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white font-mono mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white font-mono placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white font-mono placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white font-mono placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-600 text-white font-mono font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
            
            {submitMessage && (
              <p className={`text-center font-mono ${submitMessage.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;