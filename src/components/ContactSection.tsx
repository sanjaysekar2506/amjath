import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in-section");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll be in touch shortly.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-32 bg-soft-beige"
    >
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="fade-in-section">
            <span className="text-xs font-sans tracking-widest uppercase text-primary mb-4 block">
              Get In Touch
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Begin Your
              <br />
              Design Journey
            </h2>
            <p className="text-refined mb-10 max-w-md">
              Every exceptional space begins with a conversation. We invite you
              to share your vision with us.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-1">
                  Studio
                </span>
                <p className="font-sans text-foreground">
                  bangalore, india
                </p>
              </div>
              <div>
                <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-1">
                  Email
                </span>
                <a
                  href="mailto:studio@atelierlumiere.com"
                  className="font-sans text-foreground hover:text-primary transition-colors"
                >
                  bamboobricks.design@gmail.com
                </a>
              </div>
              <div>
  <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-1">
    Instagram
  </span>
  <a
    href="https://www.instagram.com/bamboobricks.design"
    target="_blank"
    rel="noopener noreferrer"
    className="font-sans text-foreground hover:text-primary transition-colors"
  >
    @bamboobricks.design
  </a>
</div>
              <div>
                <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-1">
                  Telephone
                </span>
                <a
                  href="tel:+442071234567"
                  className="font-sans text-foreground hover:text-primary transition-colors"
                >
                 +91 831 072 1727
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          {/* <div className="fade-in-section" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-background border border-border px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-background border border-border px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  maxLength={1000}
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-background border border-border px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-luxury w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
