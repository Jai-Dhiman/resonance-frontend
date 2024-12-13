'use client'

import SearchBar from '@/components/SearchBar'
import { useState } from 'react'
import { ArtistStats } from '@/types/spotify'

export default function Home() {
  const [searchResults, setSearchResults] = useState<ArtistStats[]>([])
  const [query, setQuery] = useState('')

  const handleClear = () => {
    setSearchResults([])
    setQuery('')
  }

  return (
    <main className="min-h-screen bg-spotify-dark">
      <div className="container mx-auto px-4 py-16">
        <button 
          onClick={handleClear}
          className="text-4xl font-bold text-spotify-green hover:text-white transition-colors mb-8 mx-auto block"
        >
          Resonance
        </button>
        <SearchBar 
          onSearchResults={setSearchResults} 
          results={searchResults}
          query={query}
          onQueryChange={setQuery}
        />
      </div>
    </main>
  )
}