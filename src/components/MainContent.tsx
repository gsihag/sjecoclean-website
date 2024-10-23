import { Play, Heart, MoreHorizontal, Clock3 } from 'lucide-react';

const tracks = [
  { id: 1, title: "Don't Stop Believin'", artist: "Journey", album: "Escape", duration: "4:11" },
  { id: 2, title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera", duration: "5:55" },
  { id: 3, title: "Sweet Dreams", artist: "Eurythmics", album: "Sweet Dreams", duration: "3:36" },
  { id: 4, title: "Take on Me", artist: "a-ha", album: "Hunting High and Low", duration: "3:46" },
  { id: 5, title: "Africa", artist: "Toto", album: "Toto IV", duration: "4:55" },
];

export default function MainContent() {
  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900 to-black overflow-auto">
      <div className="p-8">
        <div className="flex items-end space-x-6 mb-8">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
            alt="Playlist cover"
            className="w-60 h-60 shadow-2xl"
          />
          <div>
            <p className="text-sm font-bold text-white uppercase">Playlist</p>
            <h1 className="text-8xl font-bold text-white mt-2 mb-6">Synthwave</h1>
            <p className="text-gray-300 text-sm">
              Created by <span className="text-white">John Doe</span> • 50 songs, 3 hr 25 min
            </p>
          </div>
        </div>

        <div className="mb-8 flex items-center space-x-4">
          <button className="bg-green-500 text-black rounded-full p-4 hover:scale-105 transition">
            <Play className="w-6 h-6" fill="black" />
          </button>
          <button className="text-gray-400 hover:text-white transition">
            <Heart className="w-8 h-8" />
          </button>
          <button className="text-gray-400 hover:text-white transition">
            <MoreHorizontal className="w-8 h-8" />
          </button>
        </div>

        <div className="text-gray-300">
          <div className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 px-4 py-2 border-b border-gray-800 text-sm font-medium">
            <div>#</div>
            <div>Title</div>
            <div>Album</div>
            <div>Artist</div>
            <div className="flex justify-end">
              <Clock3 className="w-5 h-5" />
            </div>
          </div>

          {tracks.map((track, index) => (
            <div
              key={track.id}
              className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 px-4 py-3 hover:bg-white/10 rounded-lg transition cursor-pointer"
            >
              <div className="text-gray-400">{index + 1}</div>
              <div className="text-white font-medium">{track.title}</div>
              <div>{track.album}</div>
              <div>{track.artist}</div>
              <div className="text-right">{track.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}