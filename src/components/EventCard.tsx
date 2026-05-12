
interface EventCardProps {
  title: string;
  tagline: string;
  short_description: string;
  city: string;
  country: string;
  start_date: string;
  industry: string;
  category: string;
  link: string;
  tags: string[];
  agenda: string[];
  image_url: string[];
  sponsors: Array<{ name: string; image: string }>;
  status: string;
}

export function EventCard({
  title,
  tagline,
  short_description,
  city,
  country,
  start_date,
  industry,
  category,
  link,
  tags,
  agenda,
  image_url,
  // sponsors,
  status
}: EventCardProps) {
  // Format the date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Make the entire card clickable */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="p-6">
          {/* Status badge */}
          {status && (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-4 ${
              status === 'upcoming'
                ? 'bg-green-100 text-green-800'
                : status === 'past'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-gray-100 text-gray-800'
            }`}>
              {status.toUpperCase()}
            </span>
          )}

          {/* Image */}
          {image_url && image_url.length > 0 && (
            <img
              src={image_url[0]}
              alt={title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

          {/* Tagline */}
          {tagline && (
            <p className="text-gray-600 italic mb-3">{tagline}</p>
          )}

          {/* Info badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-50 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {industry}
            </span>
            <span className="bg-purple-50 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {category}
            </span>
            <span className="bg-green-50 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {city}, {country}
            </span>
          </div>

          {/* Date */}
          <p className="text-gray-700 mb-3">
            <strong>Date:</strong> {formatDate(start_date)}
          </p>

          {/* Description */}
          <p className="text-gray-700 mb-4 line-clamp-4">{short_description}</p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Agenda */}
          {agenda && agenda.length > 0 && (
            <div className="mb-4">
              <p className="font-medium text-gray-900 mb-1">Agenda:</p>
              <p className="text-gray-700">{agenda.join(', ')}</p>
            </div>
          )}

          {/* Sponsors */}
         {/* {sponsors && sponsors.length > 0 && (
  <div className="mt-4 pt-4 border-t border-gray-200">
    <p className="font-medium text-gray-900 mb-2">Sponsors:</p>
    <div className="overflow-hidden relative">
      <div className="flex gap-6 animate-marquee whitespace-nowrap">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div
            key={index}
            className="flex items-center gap-2 flex-shrink-0"
          >
            {sponsor.image && (
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="h-8 w-auto object-contain"
              />
            )}
            <span className="text-gray-700 text-sm">{sponsor.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)} */}

          {/* Link indicator */}
          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <span aria-hidden="true">→</span>
              <span className="font-medium">Visit Event</span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}