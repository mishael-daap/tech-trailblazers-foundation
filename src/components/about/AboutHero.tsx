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
              src="https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1780383181/IMG_7390_o0b4i3.jpg"
              alt="Community gathering"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-80 rounded-2xl overflow-hidden">
            <img
              src="https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1778150299/IMG_7308_vvglgb.jpg"
              alt="West Africa Dreamin"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-80 rounded-2xl overflow-hidden">
            <img
              src="https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1778150023/IMG_7550_zlxpid.jpg"
              alt="Students learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
