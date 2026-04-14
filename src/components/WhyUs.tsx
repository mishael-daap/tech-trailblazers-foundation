import { Heart, Briefcase, Users, Globe, ArrowRight } from 'lucide-react';

export function WhyUs() {
  return (
    <>
      {/* Meet Section */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Meet Tech</p>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
                Building Inclusive Tech Pathways Across Africa
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine grassroots community insight with global technology expertise to deliver 
                programs that are practical, inclusive, and deeply impactful.
              </p>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all inline-flex items-center gap-2">
                Learn More <ArrowRight size={18} />
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1573167101669-476636b96cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwQWZyaWNhbiUyMHByb2Zlc3Npb25hbHMlMjB3b3JraW5nfGVufDF8fHx8MTc3MDQxMzQ2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Resources Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
            Checkout Our Top 3 Resources
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl p-8 mb-6 h-64 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Heart className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h3 className="font-serif text-2xl mb-3 text-gray-900" style={{ fontFamily: 'Lora, serif' }}>
              Community-First Approach
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Programs designed with and for local communities, ensuring relevance and impact.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl p-8 mb-6 h-64 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Briefcase className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h3 className="font-serif text-2xl mb-3 text-gray-900" style={{ fontFamily: 'Lora, serif' }}>
              Practical Skills
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Training aligned with real industry needs to prepare for immediate career impact.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl p-8 mb-6 h-64 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h3 className="font-serif text-2xl mb-3 text-gray-900" style={{ fontFamily: 'Lora, serif' }}>
              Inclusive Access
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Focus on women, youth, and underrepresented groups to create equal opportunities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
