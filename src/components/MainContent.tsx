import React from 'react';
import { Play } from 'lucide-react';

const MainContent = () => {
  const recentlyPlayed = [
    { id: 1, title: "Chill Lofi Study Beats", artist: "Chillhop Music", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" },
    { id: 2, title: "Acoustic Favorites", artist: "Spotify", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" },
    { id: 3, title: "Deep Focus", artist: "Spotify", image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" },
    { id: 4, title: "Indie Pop Hits", artist: "Spotify", image: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" },
    { id: 5, title: "Peaceful Piano", artist: "Spotify", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" },
    { id: 6, title: "Jazz Vibes", artist: "Spotify", image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" },
  ];

  const madeForYou = [
    { id: 7, title: "Daily Mix 1", description: "Coldplay, The Killers, Imagine Dragons and more", image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" },
    { id: 8, title: "Daily Mix 2", description: "Ed Sheeran, Shawn Mendes, Justin Bieber and more", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" },
    { id: 9, title: "Daily Mix 3", description: "Dua Lipa, Ariana Grande, Taylor Swift and more", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" },
    { id: 10, title: "Discover Weekly", description: "Your weekly mixtape of fresh music", image: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" },
    { id: 11, title: "Release Radar", description: "Catch all the latest music from artists you follow", image: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" },
  ];

  return (
    <main className="flex-1 bg-gradient-to-b from-[#1F1F1F] to-[#121212] text-white p-8 overflow-y-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold">Good afternoon</h2>
      </header>
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Recently played</h3>
        <div className="grid grid-cols-3 gap-4">
          {recentlyPlayed.map((item) => (
            <div key={item.id} className="bg-[#181818] group p-4 rounded-md hover:bg-[#282828] transition duration-300">
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full aspect-square object-cover rounded-md mb-4" />
                <button className="absolute bottom-2 right-2 bg-[#1DB954] rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <Play size={24} fill="black" />
                </button>
              </div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.artist}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-2xl font-bold mb-4">Made for you</h3>
        <div className="grid grid-cols-5 gap-4">
          {madeForYou.map((item) => (
            <div key={item.id} className="bg-[#181818] group p-4 rounded-md hover:bg-[#282828] transition duration-300">
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full aspect-square object-cover rounded-md mb-4" />
                <button className="absolute bottom-2 right-2 bg-[#1DB954] rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <Play size={24} fill="black" />
                </button>
              </div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
