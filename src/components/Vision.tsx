export function Vision() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-400">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
          If so, you're in for this free webinar!
        </h2>
        <p className="text-xl text-gray-800 mb-12 max-w-2xl mx-auto leading-relaxed">
          A thriving Africa where every trailblazer — regardless of background or location — can 
          dream, build, and lead with technology.
        </p>
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-full transition-all hover:shadow-lg">
          Learn More
        </button>
      </div>
    </section>
  );
}
