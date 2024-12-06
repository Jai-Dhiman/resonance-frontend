// components/SearchBar.tsx
'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/lib/store/hooks'
import { setCurrentQuery, addToHistory } from '@/lib/store/slices/searchSlice'
import { useSearchArtistsQuery } from '@/lib/store/services/artistApi'
import AutocompleteResults from './AutocompleteResults'
import { ArtistStats } from '@/types/spotify'
import { debounce } from 'lodash'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [showResults, setShowResults] = useState(false)
  const router = useRouter()
  const dispatch = useAppDispatch()
  const wrapperRef = useRef<HTMLDivElement>(null)
  
  const { data, isLoading, error, isFetching } = useSearchArtistsQuery(query, {
    skip: !query.trim() || query.length < 2,
  });

  const debouncedSetQuery = debounce((value: string) => {
    setQuery(value)
  }, 300)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleArtistSelect = (artist: ArtistStats) => {
    dispatch(setCurrentQuery(artist.name))
    dispatch(addToHistory(artist.name))
    setShowResults(false)
    router.push(`/artist/${artist.id}`)
  }

  return (
    <div ref={wrapperRef} className="w-full max-w-md relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            debouncedSetQuery(e.target.value)
            setShowResults(true)
          }}
          onFocus={() => setShowResults(true)}
          placeholder="Search for an artist..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        {(isLoading || isFetching) && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="w-5 h-5 border-t-2 border-blue-500 rounded-full animate-spin" />
          </div>
        )}
      </div>
      
      {error && (
        <div className="mt-2 text-red-500 text-sm">
          {error instanceof Error ? error.message : 'An error occurred while searching'}
        </div>
      )}

      {showResults && (
        <AutocompleteResults
          results={data || []}
          isLoading={isLoading || isFetching}
          onSelect={handleArtistSelect}
        />
      )}
    </div>
  )
}