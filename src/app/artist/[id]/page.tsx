'use client';

import { useGetArtistByIdQuery, useGetArtistMonthlyListenersQuery } from '@/lib/store/services/artistApi';
import MonthlyListenersChart from '@/components/charts/monthly-listeners-chart';


interface ArtistPageProps {
  params: {
    id: string
  }
}

export default function ArtistPage({ params }: ArtistPageProps) {
  const { data: artist, isLoading: isArtistLoading, error: artistError } = useGetArtistByIdQuery(params.id);
  const { 
    data: monthlyListeners, 
    isLoading: isMonthlyLoading, 
    error: monthlyError 
  } = useGetArtistMonthlyListenersQuery(params.id);

  if (isArtistLoading || isMonthlyLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (artistError || monthlyError) {
    return <div className="container mx-auto px-4 py-8">Error loading artist data</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {artist && (
        <>
          <h1 className="text-2xl font-bold mb-4">{artist.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Artist Stats</h2>
              <p>Followers: {artist.followers.total.toLocaleString()}</p>
              <p>Popularity: {artist.popularity}</p>
              <p>Genres: {artist.genres.join(', ')}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              {monthlyListeners && monthlyListeners.length > 0 ? (
                <MonthlyListenersChart data={monthlyListeners} />
              ) : (
                <p>No monthly listeners data available</p>
              )}
            </div>
          </div>
        </>
      )}
    </main>
  );
}