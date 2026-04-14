export function Hero() {
  return (
    <div className="relative bg-white">

      {/* Hero Content */}
      <div className="relative px-6 lg:px-12 pt-16 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
            Empowering Africa's Trailblazers Through Technology
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We equip West African professionals and communities with digital skills, inclusive 
            opportunities, and collaborative spaces to dream, build, and lead with technology.
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-full transition-all text-base hover:shadow-lg">
            Explore Our Impact
          </button>
        </div>
      </div>

      {/* Decorative Geometric Pattern */}
      <div className="px-6 lg:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-8 gap-2 h-32">
            <div className="bg-red-500 rounded-lg"></div>
            <div className="bg-yellow-400 rounded-lg"></div>
            <div className="bg-blue-600 rounded-lg"></div>
            <div className="bg-green-500 rounded-lg"></div>
            <div className="bg-orange-500 rounded-lg"></div>
            <div className="bg-purple-500 rounded-lg"></div>
            <div className="bg-pink-500 rounded-lg"></div>
            <div className="bg-teal-500 rounded-lg"></div>
          </div>
          <div className="grid grid-cols-8 gap-2 mt-2 h-32">
            <div className="bg-blue-500 rounded-full"></div>
            <div className="bg-yellow-300 rounded-lg"></div>
            <div className="bg-red-600 rounded-full"></div>
            <div className="bg-green-400 rounded-lg"></div>
            <div className="bg-indigo-500 rounded-full"></div>
            <div className="bg-orange-400 rounded-lg"></div>
            <div className="bg-pink-400 rounded-full"></div>
            <div className="bg-cyan-500 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}