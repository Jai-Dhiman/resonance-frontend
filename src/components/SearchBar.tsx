'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/lib/store/hooks'
import { setCurrentQuery, addToHistory } from '@/lib/store/slices/searchSlice'
import { useSearchArtistsQuery } from '@/lib/store/services/artistApi'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { data, isLoading, error } = useSearchArtistsQuery(query, {
    skip: !query.trim(),
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      dispatch(setCurrentQuery(query))
      dispatch(addToHistory(query))
      
      if (data?.[0]) {
        router.push(`/artist/${data[0].id}`)
      }
    }
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for an artist..."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error occurred while searching</div>}
    </form>
  )
}