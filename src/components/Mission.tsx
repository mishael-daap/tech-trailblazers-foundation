export function Mission() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
              Are you feeling stuck in your career?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We exist to equip West African professionals with practical digital skills, create pathways 
              for innovation, and build inclusive communities where technology is used as a force for 
              social and economic good.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
              Struggling to find balance in your personal life?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We empower individuals and communities across Africa through technology, education, and 
              collaboration — creating opportunities for personal and professional transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
