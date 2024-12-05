import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ArtistStats } from '@/types/spotify'

export const artistApi = createApi({
  reducerPath: 'artistApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    searchArtists: builder.query<ArtistStats[], string>({
      query: (searchTerm) => `/api/search?q=${encodeURIComponent(searchTerm)}`,
    }),
    getArtistById: builder.query<ArtistStats, string>({
      query: (id) => `/api/artist/${id}`,
    }),
  }),
})

export const { useSearchArtistsQuery, useGetArtistByIdQuery } = artistApi