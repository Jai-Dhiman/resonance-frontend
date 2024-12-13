'use client'

import { useState } from 'react'
import { searchArtists } from '@/lib/api'
import SearchResults from '@/components/SearchResults'
import { ArtistStats } from '@/types/spotify'

interface SearchBarProps {
  onSearchResults: (results: ArtistStats[]) => void
  results: ArtistStats[]
  query: string
  onQueryChange: (query: string) => void
}

export default function SearchBar({ 
  onSearchResults, 
  results, 
  query, 
  onQueryChange 
}: SearchBarProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    setError(null)
    
    try {
      const searchResults = await searchArtists(query)
      onSearchResults(searchResults)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Search failed'))
      onSearchResults([])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="w-full max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search for an artist..."
            className="w-full p-4 rounded-lg bg-spotify-light text-white border-none 
                     focus:outline-none focus:ring-2 focus:ring-spotify-green 
                     placeholder-gray-400"
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 
                     bg-spotify-green text-black font-semibold rounded-md 
                     hover:bg-white transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      <SearchResults 
        results={results}
        isLoading={isLoading}
        error={error}
      />
    </div>
  )
}