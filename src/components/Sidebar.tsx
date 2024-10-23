import { Home, Search, Library, Plus, Heart } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-black h-full p-6">
      <div className="space-y-4">
        <div className="text-white font-bold text-2xl mb-8">
          <span className="text-green-500">Spotify</span> Clone
        </div>
        
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
            <Home className="w-6 h-6" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
            <Search className="w-6 h-6" />
            <span>Search</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
            <Library className="w-6 h-6" />
            <span>Your Library</span>
          </a>
        </nav>

        <div className="pt-8 space-y-4">
          <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
            <div className="p-1 bg-gray-300 rounded-sm">
              <Plus className="w-4 h-4 text-black" />
            </div>
            <span>Create Playlist</span>
          </button>
          <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
            <div className="p-1 bg-gradient-to-br from-indigo-600 to-pink-500 rounded-sm">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span>Liked Songs</span>
          </button>
        </div>

        <div className="border-t border-gray-800 pt-4 mt-4">
          <div className="space-y-2">
            {['Chill Vibes', 'Rock Classics', 'Jazz Essentials', 'Workout Mix'].map((playlist) => (
              <a key={playlist} href="#" className="block text-sm text-gray-300 hover:text-white transition">
                {playlist}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}