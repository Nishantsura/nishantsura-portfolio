
import React from "react";
import { MagnetLinesDemo } from "@/components/ui/magnet-lines-demo";

const Contact = () => {
  const contactLinks = [
    {
      name: "Email",
      value: "nishantsura95@gmail.com",
      icon: <span className="text-xl">📧</span>,
      href: "mailto:nishantsura95@gmail.com"
    },
    {
      name: "Phone",
      value: "+ 91 9121883163",
      icon: <span className="text-xl">📱</span>,
      href: "tel:+919121883163"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/brahmasura",
      icon: <span className="text-xl">👔</span>,
      href: "https://www.linkedin.com/in/brahmasura/"
    },
    {
      name: "X",
      value: "x.com/wooobacc",
      icon: <span className="text-xl">𝕏</span>,
      href: "https://x.com/wooobacc"
    }
  ];

  return (
    <div className="snap-section bg-[#28282B] text-white section-wrapper" id="contact">
      <div className="section-inner section-content min-h-full w-full flex items-center py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column - Contact Label */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📲</span>
                <span className="text-gray-400 text-sm">SOCIAL</span>
              </div>
            </div>
            
            {/* Right Column - Contact Content */}
            <div className="space-y-8">
              <div className="space-y-4 text-gray-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Contact Me</h2>
                <p className="text-sm sm:text-base">
                  Thank you for taking the time to explore my work. I hope it gave you a clear view of what I do. I'm always open to connect — whether it's about design, new opportunities, or simply sharing ideas over coffee.
                </p>
                <p className="text-sm sm:text-base">Feel free to get in touch.</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Social</h3>
                  
                  {/* Available for work status */}
                  <div className="flex items-center space-x-2 bg-[#222] px-3 py-2 rounded-lg border border-[#333]">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white font-medium">Available for work</span>
                  </div>
                </div>
                
                <ul className="space-y-4 relative z-10">
                  {contactLinks.map((link, index) => (
                    <li key={index} className="group">
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-300 hover:text-muted-teal transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center group-hover:bg-[#333] transition-colors">
                          {link.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-400">{link.name}</div>
                          <div className="font-medium">{link.value}</div>
                        </div>
                        {index === 0 && (
                          <div className="w-[60px] h-[60px] hidden sm:block">
                            <MagnetLinesDemo />
                          </div>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
