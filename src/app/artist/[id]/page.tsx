'use client';
import { useParams, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { ArtistStats } from '@/types/spotify';
import { useArtistTopTracks } from '@/lib/hooks/useArtistTopTracks';
import { useArtistYoutubeStats } from '@/lib/hooks/useArtistYoutubeStats';
import { ArtistPageSkeleton } from '@/components/Skeletons/ArtistPageSkeleton';
import { PlatformComparison } from '@/components/Charts/PlatformComparison';
import { TopTracksChart } from '@/components/Charts/TopTracksChart';
import Image from 'next/image';


export default function ArtistPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const artistData = searchParams.get('data');
  const router = useRouter();
  const artistId = params.id as string;

  const { data: topTracks, isLoading: tracksLoading } = useArtistTopTracks(artistId);
  const { data: youtubeStats, isLoading: youtubeLoading } = useArtistYoutubeStats(artistId);

  if (tracksLoading) {
    return <ArtistPageSkeleton />;
  }

  if (!artistData) {
    return <div>No artist data available</div>;
  }

  const artist: ArtistStats = JSON.parse(decodeURIComponent(artistData));

  return (
    <div className="container mx-auto px-4 py-8"> 
      <button onClick={() => router.back()} className="mb-6 text-gray-400 hover:text-white"> ← Back to search </button>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3"> {artist.images[0] && (<Image src={artist.images[0].url} alt={artist.name} width={artist.images[0].width || 300} height={artist.images[0].height || 300} className="rounded-lg shadow-lg"/>)} 
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold mb-4 text-white">{artist.name}</h1>
          <div className="mb-6 flex flex-wrap gap-4">
            <div className="bg-spotify-light px-4 py-2 rounded-lg">
              <h3 className="text-gray-400 text-sm font-semibold">Spotify Followers</h3>
              <p className="text-2xl text-white">{artist.followers.toLocaleString()}</p>
            </div>
            {youtubeStats?.channelFound && (
              <><div className="bg-spotify-light px-4 py-2 rounded-lg">
                <h3 className="text-gray-400 text-sm font-semibold">YouTube Subscribers</h3>
                <p className="text-2xl text-white">
                  {parseInt(youtubeStats.stats?.subscriberCount || '0').toLocaleString()}
                </p>
              </div>
              <div className="bg-spotify-light px-4 py-2 rounded-lg">
                <h3 className="text-gray-400 text-sm font-semibold">Total Youtube Views</h3>
                <p className="text-2xl text-white">
                  {parseInt(youtubeStats.stats?.viewCount || '0').toLocaleString()}
                </p>
              </div></>
            )}
          </div>
          <div className="mt-6">
            <h3 className="text-gray-400 font-semibold mb-2">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {artist.genres.slice(0,3).map((genre) => (<span key={genre} className="bg-spotify-light text-white px-3 py-1 rounded-full text-sm"> {genre} </span>))}
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <a href={artist.spotifyUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"> Spotify
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <PlatformComparison spotifyFollowers={artist.followers}youtubeSubscribers={youtubeStats?.stats ? parseInt(youtubeStats.stats.subscriberCount) : undefined}/>
        {topTracks && (
          <TopTracksChart tracks={topTracks.tracks} />
        )}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Top Tracks</h2> {tracksLoading ? (<p>Loading tracks...</p>) : (
          <div className="grid gap-4">
            {topTracks?.tracks.slice(0,3).map((track) => (
              <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer" key={track.id} className="block transition-transform hover:scale-[1.02]">
                <div className="flex items-center gap-4 bg-spotify-light p-4 rounded-lg">
                  <Image src={track.album.images[0]?.url} alt={track.album.name} width={64} height={64} className="rounded"/>
                  <div> 
                    <h3 className="text-white font-semibold">{track.name}
                    </h3>
                    <p className="text-gray-400 text-sm"> {track.album.name} • {new Date(track.album.release_date).getFullYear()}
                    </p>
                  </div>
                </div>
              </a>  
            ))}
          </div>
        )}
      </div>
    </div>
  );
}