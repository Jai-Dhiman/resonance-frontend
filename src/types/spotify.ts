export interface SpotifyImage {
  url: string;
  height?: number | null;
  width?: number | null;
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