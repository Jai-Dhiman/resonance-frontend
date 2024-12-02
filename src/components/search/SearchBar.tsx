export const SearchBar = () => {
  return (
    <div className="max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search for an artist..."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
  );
};