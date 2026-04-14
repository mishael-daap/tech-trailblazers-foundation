import { TrendingUp, Users, Calendar, Heart, Briefcase } from 'lucide-react';

export function AboutImpact() {
  const impactAreas = [
    {
      icon: GraduationCap,
      title: 'Skill Development',
      description: 'Training the next generation of cloud and digital professionals with industry-recognized certifications.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Community Growth',
      description: 'Supporting Salesforce user groups and local tech communities across West Africa.',
      color: 'green'
    },
    {
      icon: Calendar,
      title: 'Events & Collaboration',
      description: 'Hosting conferences, bootcamps, and workshops that spark innovation and connection.',
      color: 'purple'
    },
    {
      icon: Heart,
      title: 'Inclusion & Access',
      description: 'Creating pathways for women, youth, and underrepresented groups to enter tech.',
      color: 'pink'
    },
    {
      icon: Briefcase,
      title: 'Social Impact Projects',
      description: 'Supporting nonprofits, NGOs, and education-focused initiatives with technology solutions.',
      color: 'orange'
    }
  ];

  const metrics = [
    { value: '2,500+', label: 'Individuals trained and mentored' },
    { value: '150+', label: 'Community events and regional conferences' },
    { value: '50+', label: 'Partner organizations and user groups' },
    { value: '100+', label: 'Social impact and nonprofit projects' }
  ];

  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    pink: 'bg-pink-100 text-pink-600',
    orange: 'bg-orange-100 text-orange-600'
  };

  return (
    <>
      {/* Impact Overview */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Our Impact</p>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
              Turning Access Into Opportunity
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our work goes beyond programs and events. We focus on long-term outcomes that help individuals 
              build careers, communities grow stronger, and technology ecosystems become more inclusive across Africa.
            </p>
          </div>

          {/* Impact Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${colorClasses[area.color]}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl mb-3 text-gray-900" style={{ fontFamily: 'Lora, serif' }}>
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 mr-2 text-blue-200" />
                  <p className="font-serif text-5xl" style={{ fontFamily: 'Lora, serif' }}>
                    {metric.value}
                  </p>
                </div>
                <p className="text-lg text-blue-100 leading-relaxed">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-blue-100 italic max-w-3xl mx-auto leading-relaxed">
              Every statistic represents a real person empowered with skills, confidence, and opportunity 
              to create change.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
            Join us in building Africa's digital future
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Whether you're looking to volunteer, partner with us, or support our mission, there are many 
            ways to get involved and make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-full transition-all">
              Get Involved
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-10 py-4 rounded-full transition-all">
              Donate Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// Icon imports at top
import { GraduationCap } from 'lucide-react';
