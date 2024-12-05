import SearchBar from '@/components/SearchBar'

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Artist Analytics</h1>
      <SearchBar />
    </main>
  )
}