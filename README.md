# Artist Analytics Dashboard

A Next.js application that provides analytics and insights for music artists across different platforms, featuring real-time search, interactive visualizations, and cross-platform statistics.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Data Fetching**: TanStack React Query
- **Styling**: Tailwind CSS
- **Visualization**: Recharts
- **State Management**: React Hooks + Context

## Key Features

- Real-time artist search with Spotify integration
- Cross-platform statistics (Spotify + YouTube)
- Interactive data visualizations
- Responsive design with Spotify-inspired theme
- Server-side API integration
- Optimized performance with React Query caching

## Project Structure

src/
├── app/ # Next.js app router pages
│ ├── artist/[id]/ # Dynamic artist profile page
│ ├── layout.tsx # Root layout with providers
│ └── page.tsx # Homepage with search
├── components/
│ ├── Charts/ # Data visualization components
│ ├── SearchBar/ # Search functionality
│ ├── SearchResults/ # Results display
│ └── Skeletons/ # Loading states
├── lib/
│ ├── api.ts # API client
│ └── hooks/ # Custom React Query hooks
└── types/ # TypeScript definitions

## Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn
- Backend API running (see backend repository)

### Environment Variables

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001/api/artists

```

# Install dependencies

npm install

# Run development server

npm run dev

# Build for production

npm run build

# Core Components

Artist Search
Real-time search with React Query integration
Debounced API calls
Loading states and error handling
Responsive result display

# Artist Profile

Comprehensive artist statistics
Platform comparison charts
Top tracks visualization
YouTube integration
Responsive image handling

# Data Visualization

Platform comparison charts using Recharts
Top tracks performance metrics
Interactive data displays

# Styling

The application uses a custom Tailwind configuration with Spotify-inspired theming:
colors: {
spotify: {
green: "#1DB954",
dark: "#121212",
light: "#282828",
}
}

# Development

# Start development server

npm run dev

# Lint code

npm run lint

# Type check

npx tsc --noEmit

# Dependencies

Next.js 15.0.4
React Query 5.62.7
Recharts 2.15.0
TailwindCSS 3.4.1
TypeScript 5.x
