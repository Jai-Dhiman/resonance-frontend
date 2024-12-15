'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TopTrack } from '@/types/spotify';

interface TopTracksChartProps {
  tracks: TopTrack[];
}

export function TopTracksChart({ tracks }: TopTracksChartProps) {
  const data = tracks.slice(0, 5).map(track => ({
    name: track.name,
    popularity: track.popularity
  }));

  return (
    <div className="h-[300px] w-full bg-spotify-light p-4 rounded-lg">
      <h3 className="text-white text-lg font-semibold mb-4">Top Tracks Popularity</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <XAxis type="number" stroke="#fff" domain={[0, 100]} />
          <YAxis dataKey="name" type="category" stroke="#fff" width={150} />
          <Tooltip contentStyle={{ 
            backgroundColor: '#181818',
            border: 'none',
            borderRadius: '4px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }} 
          labelStyle={{ color: '#ffffff' }}
          itemStyle={{ color: '#1DB954' }} />
          <Bar dataKey="popularity" fill="#1DB954" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}