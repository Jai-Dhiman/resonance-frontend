import { ArtistStats } from '@/types/spotify'
import Image from 'next/image'

interface Props {
  results: ArtistStats[]
  isLoading: boolean
  onSelect: (artist: ArtistStats) => void
}

export default function AutocompleteResults({ results, isLoading, onSelect }: Props) {
  if (isLoading) {
    return (
      <div className="absolute w-full bg-white mt-1 rounded-lg shadow-lg border border-gray-200 p-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-2 p-2 animate-pulse">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        ))}
      </div>
    )
  }

  if (!results.length) return null

  return (
    <div className="absolute w-full bg-white mt-1 rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
      {results.map((artist) => (
        <button
          key={artist.id}
          className="w-full text-left hover:bg-gray-50 p-2 flex items-center gap-2"
          onClick={() => onSelect(artist)}
        >
          {artist.images[0] && (
            <Image
              src={artist.images[0].url}
              alt={artist.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <div>
            <p className="font-medium">{artist.name}</p>
            <p className="text-sm text-gray-500">
              {artist.followers.toLocaleString()} followers
            </p>
          </div>
        </button>
      ))}
    </div>
  )
}