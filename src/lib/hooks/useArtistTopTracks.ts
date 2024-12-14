import { useQuery } from '@tanstack/react-query'
import { getArtistTopTracks } from '@/lib/api'
import { TopTrack } from '@/types/spotify'

export function useArtistTopTracks(artistId: string) {
  return useQuery<{ tracks: TopTrack[], lastUpdated: string }>({
    queryKey: ['artistTracks', artistId],
    queryFn: () => getArtistTopTracks(artistId),
    enabled: !!artistId,
  })
}