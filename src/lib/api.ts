const API_BASE_URL = 'http://localhost:3001/api/artists';

export async function searchArtists(query: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Search failed');
    }
    return await response.json();
  } catch (error) {
    console.error('Error searching artists:', error);
    throw error;
  }
}