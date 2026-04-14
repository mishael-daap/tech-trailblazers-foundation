import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ fullname: '', email: '', message: '' });
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

              {/* Office Hours */}
              <div className="mt-12 bg-white p-8 rounded-2xl">
                <h3 className="font-serif text-xl text-gray-900 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM WAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM WAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
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

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
            Ready to make an impact?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join us in empowering Africa's digital future through technology education and community collaboration.
          </p>
          <button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-full transition-all">
            Explore Opportunities
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
