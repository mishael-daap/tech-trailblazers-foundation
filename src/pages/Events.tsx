import { useState } from 'react';
import { events } from '../demo/events';
import { EventCard } from '../components/EventCard';
import { Footer } from '../components/Footer';

export default function Events() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter events based on search term
  const filteredEvents = events.filter(event => {
    if (!searchTerm) return true;

    const searchableFields = [
      event.title,
      event.tagline,
      event.short_description,
      event.city,
      event.country,
      event.industry,
      event.category,
      event.tags.join(' '),
      event.agenda.join(' '),
      event.sponsors.map(s => s.name).join(' ')
    ].join(' ').toLowerCase();

    return searchableFields.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-white ">
      {/* Mini Hero Section */}
      <section className="pt-20 pb-12 px-6 lg:px-12 bg-gray-50 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">Events</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: 'Lora, serif' }}>
            Upcoming Community Events
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover workshops, meetups, and community sessions designed to help people learn, collaborate,
            and grow in technology.
          </p>
        </div>

        {/* Search Bar */}
      <section className="px-6 lg:px-12 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events by title, location, topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 bg-white transition-all duration-200"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </section>
      </section>

      

      {/* Events Grid */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {filteredEvents.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No events found matching your search.</p>
              </div>
            ) : (
              filteredEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}