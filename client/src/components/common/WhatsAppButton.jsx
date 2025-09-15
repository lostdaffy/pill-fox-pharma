import React from "react";

const WhatsAppButton = () => {
  return (
    <>
      {/* Custom CSS for animation */}
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }
          .animate-zoomInOut {
            animation: zoomInOut 2s infinite ease-in-out;
          }
        `}
      </style>

      <a
        href="https://wa.me/01353132190" // apna WhatsApp number add karein
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-2 rounded-full 
                   transition duration-300 ease-in-out z-50 animate-zoomInOut"
      >
        <i className="ri-whatsapp-line text-5xl text-green-600"></i>
      </a>
    </>
  );
};

export default WhatsAppButton;
