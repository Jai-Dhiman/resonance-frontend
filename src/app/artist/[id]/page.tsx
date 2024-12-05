interface ArtistPageProps {
  params: {
    id: string
  }
}

export default function ArtistPage({ params }: ArtistPageProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Artist Profile</h1>
      {/* Artist data will be added here */}
    </main>
  )
}