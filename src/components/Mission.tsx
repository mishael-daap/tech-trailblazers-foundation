import { Eye, Target } from 'lucide-react';

export function MissionAndVission() {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-blue-50 p-12 rounded-3xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6" style={{ fontFamily: 'Lora, serif' }}>
              Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To build a thriving African technology ecosystem by developing world-class Tech talents and serving as the leading bridge connecting African tech professionals to global opportunities.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-yellow-50 p-12 rounded-3xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-600 rounded-2xl mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6" style={{ fontFamily: 'Lora, serif' }}>
              Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to empower the Salesforce ecosystem in West Africa by providing opportunities for professional development through workshops, seminars, and conferences. Here, you'll find a platform to sharpen your skills, exchange ideas, and collaborate with like-minded professionals shaping the future of technology in our region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
