import { useQuery } from '@tanstack/react-query'
import { searchArtists } from '@/lib/api'
import { ArtistStats } from '@/types/spotify'

export function useArtistSearch(query: string) {
  return useQuery<ArtistStats[]>({
    queryKey: ['artistSearch', query],
    queryFn: () => searchArtists(query),
    enabled: query.length > 0,
    staleTime: 1000 * 60 * 5,
  })
}