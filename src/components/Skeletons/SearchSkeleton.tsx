export const SearchSkeleton = () => {
  return (
    <div className="mt-4 space-y-2">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="p-4 bg-spotify-light rounded-lg flex items-center space-x-4"
        >
          <div className="w-12 h-12 rounded-full bg-gray-600 animate-pulse" />
          <div>
            <div className="h-5 w-48 bg-gray-600 animate-pulse rounded mb-2" />
            <div className="h-4 w-32 bg-gray-600 animate-pulse rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};