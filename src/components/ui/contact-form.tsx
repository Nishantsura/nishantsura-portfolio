import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Twitter, Send, MapPin } from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  heroImageSrc?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// --- HELPER COMPONENTS ---
const GlassInputWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm transition-colors focus-within:border-violet-400/70 focus-within:bg-violet-500/10">
    {children}
  </div>
);

const ContactInfoCard = ({ icon: Icon, title, value, href }: { 
  icon: any; 
  title: string; 
  value: string; 
  href?: string; 
}) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
    <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
      <Icon className="w-6 h-6 text-violet-400" />
    </div>
    <div className="flex-1">
      <p className="text-sm text-gray-400 font-medium">{title}</p>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-400 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-white">{value}</p>
      )}
    </div>
  </div>
);

// --- MAIN COMPONENT ---
export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  heroImageSrc = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=2160&q=80"
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-geist w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Left column: contact form */}
      <section className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
                <span className="font-light">Let's</span> Connect
              </h1>
              <p className="text-gray-400 text-lg">
                Ready to build something amazing? Drop me a message and let's discuss your next project.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Full Name</label>
                <GlassInputWrapper>
                  <input 
                    name="name" 
                    type="text" 
                    placeholder="Enter your full name" 
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    className="w-full bg-transparent text-white text-sm p-4 rounded-2xl focus:outline-none placeholder-gray-500" 
                    required
                  />
                </GlassInputWrapper>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Email Address</label>
                <GlassInputWrapper>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    className="w-full bg-transparent text-white text-sm p-4 rounded-2xl focus:outline-none placeholder-gray-500" 
                    required
                  />
                </GlassInputWrapper>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Subject</label>
                <GlassInputWrapper>
                  <input 
                    name="subject" 
                    type="text" 
                    placeholder="What's this about?" 
                    value={formData.subject}
                    onChange={handleInputChange('subject')}
                    className="w-full bg-transparent text-white text-sm p-4 rounded-2xl focus:outline-none placeholder-gray-500" 
                    required
                  />
                </GlassInputWrapper>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Message</label>
                <GlassInputWrapper>
                  <textarea 
                    name="message" 
                    placeholder="Tell me about your project..." 
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    className="w-full bg-transparent text-white text-sm p-4 rounded-2xl focus:outline-none placeholder-gray-500 resize-none" 
                    required
                  />
                </GlassInputWrapper>
              </div>

              <button 
                type="submit" 
                className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-violet-500 py-4 font-medium text-white hover:from-violet-700 hover:to-violet-600 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Or reach out directly</h3>
              <div className="space-y-3">
                <ContactInfoCard 
                  icon={Mail} 
                  title="Email" 
                  value="nishantsura95@gmail.com" 
                  href="mailto:nishantsura95@gmail.com"
                />
                <ContactInfoCard 
                  icon={Phone} 
                  title="Phone" 
                  value="+91 9121883163" 
                  href="tel:+919121883163"
                />
                <ContactInfoCard 
                  icon={Linkedin} 
                  title="LinkedIn" 
                  value="linkedin.com/in/brahmasura" 
                  href="https://www.linkedin.com/in/brahmasura/"
                />
                <ContactInfoCard 
                  icon={Twitter} 
                  title="X (Twitter)" 
                  value="x.com/wooobacc" 
                  href="https://x.com/wooobacc"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right column: hero image */}
      <section className="hidden md:block flex-1 relative p-4">
        <div className="absolute inset-4 rounded-3xl bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${heroImageSrc})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Available for Work</h2>
              <p className="text-gray-200 text-lg">
                Currently accepting new projects and opportunities. Let's create something extraordinary together.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
