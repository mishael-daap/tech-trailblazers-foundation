import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

// Turnstile types
declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileWidgetId = useRef<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);

  // Cloudflare Turnstile Site Key from environment variables
  const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '';

  // Load Turnstile script
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !turnstileContainerRef.current) return;

    const loadTurnstile = () => {
      if (window.turnstile && turnstileContainerRef.current) {
        // Remove existing widget if any
        if (turnstileWidgetId.current) {
          window.turnstile.remove(turnstileWidgetId.current);
        }
        // Render new widget
        turnstileWidgetId.current = window.turnstile.render(turnstileContainerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: 'light',
          callback: (token: string) => {
            setTurnstileToken(token);
          },
          'expired-callback': () => {
            setTurnstileToken('');
          },
        });
      }
    };

    // Check if script already loaded
    if (document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]')) {
      loadTurnstile();
      return;
    }

    // Load Turnstile script
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.onload = loadTurnstile;
    document.head.appendChild(script);

    return () => {
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetId.current);
      }
    };
  }, [TURNSTILE_SITE_KEY]);

  // EmailJS Configuration
  // Replace these with your actual EmailJS credentials from https://www.emailjs.com/
  const EMAILJS_SERVICE_ID = 'service_0is9d4r';
  const EMAILJS_TEMPLATE_ID_TO_OWNER = 'template_8051o4t';
  const EMAILJS_TEMPLATE_ID_TO_USER = 'template_6t2h9b4';
  const EMAILJS_PUBLIC_KEY = 'S2lNwfKk6qqxjSWti';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      // Verify Turnstile token
      if (!turnstileToken) {
        setStatus('error');
        setStatusMessage('Please complete the CAPTCHA verification.');
        setIsLoading(false);
        return;
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.fullname,
        from_email: formData.email,
        message: formData.message,
        to_email: 'themishaeldaap@gmail.com', // Your email address
        reply_to: formData.email,
      };

      // Send notification email to owner
      const ownerEmailPromise = emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_TO_OWNER,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Send confirmation email to user
      const userEmailPromise = emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_TO_USER,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Wait for both emails to be sent
      await Promise.all([ownerEmailPromise, userEmailPromise]);

      setStatus('success');
      setStatusMessage('Thank you! Your message has been sent. Check your email for confirmation.');
      setFormData({ fullname: '', email: '', message: '' });
      setTurnstileToken('');
      // Reset turnstile widget
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setStatusMessage('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Get In Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
            We'd Love to Hear From You
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about our programs, want to get involved, or just want to say hello,
            we're here to help and answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Reach out to us through any of these channels. Our team is ready to assist you
                with your inquiries and provide the support you need.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@ttce.org" className="text-gray-600 hover:text-blue-600 transition-colors">
                      info@ttce.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+2341234567890" className="text-gray-600 hover:text-blue-600 transition-colors">
                      +234 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">
                      Lagos, Nigeria<br />
                      West Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-sm">
              <h2 className="font-serif text-3xl text-gray-900 mb-2 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
                Send us a message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {/* Status Message */}
              {status !== 'idle' && (
                <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
                  status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  {status === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <span className="text-xl flex-shrink-0">⚠</span>
                  )}
                  <p className="text-sm">{statusMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullname" className="block text-sm text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:bg-gray-100"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Cloudflare Turnstile CAPTCHA */}
                {TURNSTILE_SITE_KEY ? (
                  <div className="flex justify-center" ref={turnstileContainerRef} />
                ) : (
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-yellow-800">
                    ⚠️ CAPTCHA not configured. Add <code>VITE_TURNSTILE_SITE_KEY</code> to your <code>.env</code> file.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our programs and services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl text-gray-900 mb-3" style={{ fontFamily: 'Lora, serif' }}>
                How can I get involved with your programs?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You can get involved by attending our events, volunteering, or partnering with us.
                Visit our Get Involved page or contact us directly to learn more about current opportunities.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl text-gray-900 mb-3" style={{ fontFamily: 'Lora, serif' }}>
                Are your programs free to attend?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, most of our programs are free and open to all. We believe in removing barriers
                to technology education and ensuring everyone has access to learning opportunities.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl text-gray-900 mb-3" style={{ fontFamily: 'Lora, serif' }}>
                Do you offer certification programs?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, we offer various certification pathways in partnership with industry leaders.
                Contact us to learn about current certification programs and eligibility requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl text-gray-900 mb-3" style={{ fontFamily: 'Lora, serif' }}>
                How can my organization partner with you?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We welcome partnerships with organizations that share our mission. Reach out through
                our contact form or email us directly to discuss partnership opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
