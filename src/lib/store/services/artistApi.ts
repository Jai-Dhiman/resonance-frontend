import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ArtistStats } from '@/types/spotify'
import { API_BASE_URL } from '@/lib/api';

export const artistApi = createApi({
  reducerPath: 'artistApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    searchArtists: builder.query<ArtistStats[], string>({
      query: (searchTerm) => `/api/search?q=${encodeURIComponent(searchTerm)}`,
    }),
  }),
});

export const { 
  useSearchArtistsQuery, 
} = artistApi