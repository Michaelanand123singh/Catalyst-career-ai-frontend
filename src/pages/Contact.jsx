import React, { useState, useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import contactbg from "../assets/images/contactbg.png";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [glowEffect, setGlowEffect] = useState(0);

  const containerRef = useRef(null);
  const smallRef = useRef(null); // whatsapp button
  const bigRef = useRef(null); // quick response circle
  const [coords, setCoords] = useState({
    sx: 0,
    sy: 0,
    bx: 0,
    by: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowEffect((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // connector updater
  const updateConnector = () => {
    if (!containerRef.current || !smallRef.current || !bigRef.current) return;
    const cRect = containerRef.current.getBoundingClientRect();
    const sRect = smallRef.current.getBoundingClientRect();
    const bRect = bigRef.current.getBoundingClientRect();

    const sx = sRect.left - cRect.left + sRect.width / 2;
    const sy = sRect.top - cRect.top + sRect.height / 2;
    const bx = bRect.left - cRect.left + bRect.width / 2;
    const by = bRect.top - cRect.top + bRect.height / 2;

    setCoords({
      sx,
      sy,
      bx,
      by,
      width: Math.max(cRect.width, 1),
      height: Math.max(cRect.height, 1),
    });
  };

  useEffect(() => {
    updateConnector();
    const onResize = () => requestAnimationFrame(updateConnector);
    window.addEventListener("resize", onResize);

    const img = new Image();
    img.src = contactbg;
    img.onload = () => requestAnimationFrame(updateConnector);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  const WA_NUMBER = "917277277477";
  const waText = encodeURIComponent(
    "Hello Catalyst, I’d like to know more about career guidance!"
  );

  const shouldRenderSVG = coords.width > 0 && coords.height > 0;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${contactbg})` }}
      ></div>

      {/* Content */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Hero box */}
          <div className="text-center mb-12 px-4">
            <div className="relative inline-block w-full max-w-xl sm:max-w-2xl">
              <div className="relative text-center p-6 sm:p-8">
                <div className="absolute inset-0 border-2 sm:border-4 border-green-800 clip-futuristic pointer-events-none"></div>
                <p className="text-emerald-900 font-bold text-lg sm:text-xl md:text-2xl leading-relaxed">
                  We would love to process your thought. <br />
                  Send us a message and we will respond promptly
                </p>
              </div>
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-t-2 border-emerald-400"></div>
              <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-t-2 border-emerald-400"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-b-2 border-emerald-400"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-b-2 border-emerald-400"></div>
            </div>
          </div>

          {/* WhatsApp + Connector + Quick Response */}
          <div
            ref={containerRef}
            className="flex flex-col items-center justify-center relative w-full"
          >
            {/* WhatsApp button */}
            <div ref={smallRef} className="relative mb-12 z-20 -right-20">
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center"
                style={{ animation: "glow 2s ease-in-out infinite" }}
              >
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
                  className="hover:scale-110 transition-transform"
                >
                  <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </a>
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 border-2 border-emerald-400 rounded-full"></div> <div className="absolute -bottom-2 right-0 w-4 h-4 border-2 border-emerald-400 rounded-full"></div>
            </div>

            {/* SVG connector */}
            {shouldRenderSVG && (
              <svg
                className="absolute inset-0 pointer-events-none z-10 rotate-5"
                width={coords.width}
                height={coords.height}
                viewBox={`0 0 ${coords.width} ${coords.height}`}
                preserveAspectRatio="none"
                aria-hidden
              >
                <line
                  x1={coords.sx}
                  y1={coords.sy}
                  x2={coords.bx}
                  y2={coords.by}
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </svg>
            )}

            {/* Quick Response */}
            <div ref={bigRef} className="relative mt-12 ">
              <div className="bg-white rounded-full p-4 sm:p-6 border-2 border-green-800 w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center text-center relative z-20">
                <div>
                  <p className="text-emerald-800 font-bold text-lg sm:text-xl mb-2">
                    Quick Response
                  </p>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
                    className="text-base sm:text-xl font-bold text-emerald-800 hover:text-emerald-400 transition-colors"
                  >
                    +91 7277277477
                  </a>
                </div>
              </div>

              {/* Ripple rings */}
              <span className="ring ring1"></span>
              <span className="ring ring2"></span>
              <span className="ring ring3"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Extra CSS */}
      <style>{`
        .ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(16,185,129,0.6);
          opacity: 0;
          animation: ripple 3s linear infinite;
        }
        .ring1 { animation-delay: 0s; }
        .ring2 { animation-delay: 1s; }
        .ring3 { animation-delay: 2s; }

        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.3; }
          70% { transform: scale(2.2); opacity: 0.1; }
          100% { transform: scale(3); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
