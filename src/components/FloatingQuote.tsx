import { useState } from "react";

const FloatingQuote = () => {
  const [open, setOpen] = useState(false);

  // ✅ WhatsApp prefilled message
  const whatsappMessage = encodeURIComponent(
    "Hi, I’m interested in bamboo brick Interior design studio. I’d like to get a quote and more details."
  );

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Get Quote"
        className="
          fixed bottom-4 right-4 z-40
          flex items-center gap-2
          px-5 py-3
          rounded-full
          bg-green-600
          text-white text-sm font-medium
          shadow-lg
          hover:bg-green-700
          transition-all
        "
      >
        <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
        Get Quote
      </button>

      {/* Popup */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Popup container */}
          <div
            className="
              fixed z-50
              bottom-0 md:bottom-24
              right-0 md:right-6
              left-0 md:left-auto
              w-full md:w-[340px]
              animate-slide-up
            "
          >
            <div className="bg-white rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden">

              {/* Header */}
              <div className="px-4 py-3 border-b flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Get a Free Quote
                  </p>
                  <p className="text-xs text-gray-500">
                    Bamboo Brick Construction
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-gray-700 text-lg"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="p-4 pb-safe">
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  Tell us about your project and we’ll share pricing, timelines,
                  and technical details within 24 hours.
                </p>

                {/* Primary CTA */}
                        <a
            href="tel:+918310721727"
            onClick={() => setOpen(false)}
            className="
              block w-full text-center
              bg-gray-900 text-white
              py-3 rounded-lg
              text-sm font-medium
              hover:opacity-90
              transition
            "
          >
            Call Now
          </a>


                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/918310721727?text=${whatsappMessage}`}
                  target="_blank"
                  className="
                    block w-full text-center mt-3
                    border border-green-600
                    text-green-700
                    py-3 rounded-lg
                    text-sm font-medium
                    hover:bg-green-50
                    transition
                  "
                >
                  Chat on WhatsApp
                </a>

                <p className="text-xs text-gray-400 text-center mt-3">
                  No spam. We only contact you about your project.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FloatingQuote;
