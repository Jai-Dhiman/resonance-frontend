import { ArtistStats } from '@/types/spotify'

interface SearchResultsProps {
  results: ArtistStats[];
  isLoading: boolean;
  error: Error | null;
}

export default function SearchResults({ results, isLoading, error }: SearchResultsProps) {
  if (isLoading) {
    return <div className="text-gray-400 text-center mt-4">Searching...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">Error: {error.message}</div>;
  }

  if (!results.length) {
    return null;
  }

  return (
    <div className="mt-4 space-y-2">
      {results.map((artist) => (
        <div 
          key={artist.id}
          className="p-4 bg-spotify-light rounded-lg flex items-center space-x-4"
        >
          {artist.images[0] && (
            <img 
              src={artist.images[0].url} 
              alt={artist.name}
              className="w-12 h-12 rounded-full"
            />
          )}
          <div>
            <h3 className="text-white font-semibold">{artist.name}</h3>
            <p className="text-gray-400 text-sm">
              {artist.followers.toLocaleString()} followers
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}