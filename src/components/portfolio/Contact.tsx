
import React from "react";
import { ContactForm } from "@/components/ui/contact-form";

const Contact = () => {
  const handleSubmit = (data: any) => {
    console.log("Contact form submitted:", data);
    // Here you can integrate with your email service or form handling
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <div className="snap-section section-wrapper" id="contact">
      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Contact;
