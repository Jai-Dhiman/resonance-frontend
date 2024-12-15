const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}` : 'http://localhost:3001/api/artists';

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

export async function getArtistTopTracks(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}/top-tracks`);
    if (!response.ok) {
      throw new Error('Failed to fetch top tracks');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching top tracks:', error);
    throw error;
  }
}

export async function getArtistYoutubeStats(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}/youtube-stats`);
    if (!response.ok) {
      throw new Error('Failed to fetch YouTube stats');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching YouTube stats:', error);
    throw error;
  }
}