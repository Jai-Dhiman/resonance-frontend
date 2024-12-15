'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface PlatformComparisonProps {
  spotifyFollowers: number;
  youtubeSubscribers: number | undefined;
}

export function PlatformComparison({ spotifyFollowers, youtubeSubscribers }: PlatformComparisonProps) {
  const data = [
    { platform: 'Spotify', followers: spotifyFollowers },
    { platform: 'YouTube', followers: youtubeSubscribers || 0 }
  ];

  return (
    <div className="h-[300px] w-full bg-spotify-light p-4 rounded-lg">
      <h3 className="text-white text-lg font-semibold mb-4">Platform Comparison</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="platform" stroke="#fff" />
          <YAxis stroke="#fff" tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`} />
          <Tooltip contentStyle={{ 
            backgroundColor: '#181818',
            border: 'none',
            borderRadius: '4px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }} 
          labelStyle={{ color: '#ffffff' }}
          itemStyle={{ color: '#1DB954' }} />
          <Bar dataKey="followers" fill="#1DB954" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}