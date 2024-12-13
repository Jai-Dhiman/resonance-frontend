'use client';

import { useParams, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { ArtistStats } from '@/types/spotify';

export default function ArtistPage() {
  const searchParams = useSearchParams();
  const artistData = searchParams.get('data');
  const router = useRouter();

  if (!artistData) {
    return <div>No artist data available</div>;
  }

  const artist: ArtistStats = JSON.parse(decodeURIComponent(artistData));

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => router.back()}
        className="mb-6 text-gray-400 hover:text-white"
      >
        ← Back to search
      </button>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          {artist.images[0] && (
            <img
              src={artist.images[0].url}
              alt={artist.name}
              className="w-full rounded-lg shadow-lg"
            />
          )}
        </div>
        
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold mb-4 text-white">{artist.name}</h1>
          
          <div className="mb-6">
  <div className="bg-spotify-light px-4 py-2 rounded-lg inline-block">
    <h3 className="text-gray-400 text-sm font-semibold">Followers</h3>
    <p className="text-2xl text-white">{artist.followers.toLocaleString()}</p>
  </div>
</div>

          <div className="mt-6">
            <h3 className="text-gray-400 font-semibold mb-2">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {artist.genres.map((genre) => (
                <span
                  key={genre}
                  className="bg-spotify-light text-white px-3 py-1 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <a 
            href={artist.spotifyUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
          >
            Open in Spotify
          </a>
        </div>
      </div>
    </div>
  );
}