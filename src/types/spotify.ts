import type SpotifyApi from 'spotify-web-api-node'

export interface SpotifyImage {
  url: string;
  height?: number | undefined | null;
  width?: number | undefined | null; 
}

export interface MonthlyListenersData {
  monthly_listeners: number;
  timestamp: string;
}

export interface ArtistStats {
  popularity: number;
  followers: number;
  genres: string[];
  name: string;
  images: SpotifyImage[];
  spotifyUrl: string;
  id: string;
  lastUpdated: string;
}

export type SpotifyArtist = SpotifyApi.ArtistObjectFull;