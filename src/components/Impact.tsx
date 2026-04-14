import { Calendar } from 'lucide-react';

export function Impact() {
  return (
    <>
      {/* Testimonial Section */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwdGVjaG5vbG9neSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzA0MTM0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Community members"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
            <div>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                "Thanks to the tech coach's tough but necessary pushes and their wisdom on defining my goals,
                I feel motivated and I'm taking action on creating the lifestyle I always wanted and deserve.
                With their best support and advice, I can confidently say that I'm on the right track."
              </p>
              <p className="text-gray-900 font-medium">— Adebayo T.</p>
              <p className="text-gray-600">Program Participant, Lagos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with CTA */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-12 rounded-2xl text-center">
              <p className="text-5xl md:text-6xl font-serif text-gray-900 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                2,500+
              </p>
              <p className="text-lg text-gray-600">
                Professionals trained in cloud and digital technologies across West Africa
              </p>
            </div>
            <div className="bg-gray-50 p-12 rounded-2xl text-center">
              <p className="text-5xl md:text-6xl font-serif text-gray-900 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                150+
              </p>
              <p className="text-lg text-gray-600">
                Community events, workshops, and bootcamps bringing people together
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-900 rounded-2xl p-12 text-center text-white">
            <p className="text-sm uppercase tracking-wide mb-4 text-gray-400">Free Webinar</p>
            <h3 className="font-serif text-3xl md:text-4xl mb-6" style={{ fontFamily: 'Lora, serif' }}>
              Transform your career and life with technology
            </h3>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Join us for an exclusive workshop where you'll discover how to leverage digital skills
              for personal and professional growth.
            </p>
            <button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-full transition-all">
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-24 px-6 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full mb-6">
                <Calendar size={20} />
                <span className="text-sm">Sunday, 10th March</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
                Technology Skills Bootcamp
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Join our intensive bootcamp designed to equip you with in-demand tech skills
                and connect you with industry professionals.
              </p>
            </div>
            <div className="text-right">
              <p className="text-6xl font-serif mb-4" style={{ fontFamily: 'Lora, serif' }}>Online on Zoom</p>
              <p className="text-xl text-gray-400 mb-8">10:00 AM - 4:00 PM WAT</p>
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-full transition-all">
                Register for Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
            Invite your friends
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Know someone who could benefit from our programs? Share this opportunity and help
            us build a thriving tech community together.
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-full transition-all">
            Share With Friends
          </button>
        </div>
      </section>

      {/* Illustrated Section */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-12" style={{ fontFamily: 'Lora, serif' }}>
            Life Coach Beliefs
          </h2>
          <div className="flex justify-center items-end gap-8 max-w-md mx-auto">
            {/* Simple illustrated avatars using shapes */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-40 bg-blue-600 rounded-t-full mb-4 relative overflow-hidden">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-800 rounded-t-full"></div>
                <div className="absolute top-8 left-6 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute top-8 right-6 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-48 bg-yellow-400 rounded-t-full mb-4 relative overflow-hidden">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-yellow-600 rounded-t-full"></div>
                <div className="absolute top-10 left-8 w-3 h-3 bg-gray-900 rounded-full"></div>
                <div className="absolute top-10 right-8 w-3 h-3 bg-gray-900 rounded-full"></div>
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-gray-900 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
