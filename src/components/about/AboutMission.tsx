import { Zap, GraduationCap, Users } from 'lucide-react';

export function AboutMission() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Our Mission</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
            To empower individuals and communities across Africa through technology, education, and collaboration.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We equip West African professionals and emerging talent with practical digital skills, mentorship, 
            and real-world opportunities. Through community-led programs and inclusive initiatives, we use 
            technology as a force for social mobility, innovation, and long-term impact.
          </p>
        </div>

        {/* Mission Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-10 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-gray-900" style={{ fontFamily: 'Lora, serif' }}>
              Technology for Good
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Using digital tools to solve real problems and create meaningful change in communities 
              across Africa.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mb-6">
              <GraduationCap className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-gray-900" style={{ fontFamily: 'Lora, serif' }}>
              Education & Skills
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Training, mentorship, and certification pathways that prepare professionals for the 
              digital economy.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-gray-900" style={{ fontFamily: 'Lora, serif' }}>
              Community & Collaboration
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Safe, inclusive spaces for learning and growth where connections lead to lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
