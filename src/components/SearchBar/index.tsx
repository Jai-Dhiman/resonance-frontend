'use client'
import { useState, useEffect } from 'react'
import { useArtistSearch } from '@/lib/hooks/useArtistSearch'
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
  const { data, isLoading, error } = useArtistSearch(query)

  useEffect(() => {
    if (data) {
      onSearchResults(data)
    }
  }, [data, onSearchResults])

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!query.trim()) return
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
        error={error instanceof Error ? error : null}
      />
    </div>
  )
}