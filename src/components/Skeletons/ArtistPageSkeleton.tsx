export const ArtistPageSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="w-20 h-4 bg-spotify-light animate-pulse rounded" />
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <div className="aspect-square bg-spotify-light animate-pulse rounded-lg" />
        </div>

        <div className="w-full md:w-2/3">
          <div className="h-10 w-64 bg-spotify-light animate-pulse rounded mb-4" />
          
          <div className="mb-6">
            <div className="bg-spotify-light px-4 py-2 rounded-lg inline-block">
              <div className="h-4 w-32 bg-gray-600 animate-pulse rounded mb-2" />
              <div className="h-8 w-24 bg-gray-600 animate-pulse rounded" />
            </div>
          </div>

          <div className="mt-6">
            <div className="h-4 w-20 bg-spotify-light animate-pulse rounded mb-2" />
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-6 w-24 bg-spotify-light animate-pulse rounded-full" />
              ))}
            </div>
          </div>

          <div className="mt-8 w-24 h-10 bg-green-500 animate-pulse rounded-full" />
        </div>
      </div>

      <div className="mt-12">
        <div className="h-8 w-32 bg-spotify-light animate-pulse rounded mb-6" />
        <div className="grid gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 bg-spotify-light p-4 rounded-lg">
              <div className="w-16 h-16 bg-gray-600 animate-pulse rounded" />
              <div>
                <div className="h-5 w-48 bg-gray-600 animate-pulse rounded mb-2" />
                <div className="h-4 w-32 bg-gray-600 animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};