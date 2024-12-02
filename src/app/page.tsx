import { SearchBar } from '@components/search/SearchBar';

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-text-primary dark:text-white">
        Music Artist Analytics
      </h1>
      <SearchBar />
    </div>
  );
}