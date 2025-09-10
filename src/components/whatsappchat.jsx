import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "917277277477"; // replace with your number
  const message = "Hello Catalyst, I’d like to know more about career guidance!";
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-300 transition-colors"
    >

      
      WhatsApp Quick Chat
    </a>
  );
};

export default WhatsAppButton;
