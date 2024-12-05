import type SpotifyApi from 'spotify-web-api-node'

export interface SpotifyImage {
  url: string;
  height?: number | null;
  width?: number | null;
}

export interface MonthlyListenersData {
  monthly_listeners: number;
  timestamp: string;
}

export interface ArtistStats {
  id: string;
  name: string;
  popularity: number;
  followers: {
    total: number;
  };
  genres: string[];
  images: SpotifyImage[];
  spotifyUrl: string;
  lastUpdated: string;
  monthlyListenersHistory: MonthlyListenersData[];
}

export type SpotifyArtist = SpotifyApi.ArtistObjectFull;