export function AboutHero() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">About Us</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
            Building Africa's Digital Future Through Community and Technology
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed max-w-4xl">
            We are a mission-driven foundation empowering individuals and communities across Africa with 
            the skills, opportunities, and networks needed to thrive in the digital economy.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Founded by passionate Salesforce professionals, educators, and community leaders, the foundation 
            exists to ensure that access to technology and digital skills is not limited by geography, 
            background, or circumstance.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="h-80 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1682617367276-bbacadf73747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nJTIwdGVjaG5vbG9neSUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MDQxNDgxMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Community gathering"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-80 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1655102718200-7230a1be8bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwQWZyaWNhbiUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MDQxNDgxMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-80 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1655720348616-184ae7fad7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc3R1ZGVudHMlMjBsZWFybmluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwNDE0ODExfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Students learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
