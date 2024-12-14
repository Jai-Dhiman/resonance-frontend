import { useQuery } from '@tanstack/react-query'
import { getArtistYoutubeStats } from '@/lib/api'

interface YoutubeStats {
  channelFound: boolean;
  channelId?: string;
  channelTitle?: string;
  channelThumbnail?: string;
  stats?: {
    viewCount: string;
    subscriberCount: string;
    videoCount: string;
  }
}

export function useArtistYoutubeStats(artistId: string) {
  return useQuery<YoutubeStats>({
    queryKey: ['artistYoutube', artistId],
    queryFn: () => getArtistYoutubeStats(artistId),
    enabled: !!artistId,
  })
}