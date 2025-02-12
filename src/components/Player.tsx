import React from 'react';
import { Play, SkipBack, SkipForward, Shuffle, Repeat, Volume2 } from 'lucide-react';

const Player = () => {
  return (
    <div className="bg-[#181818] text-white p-4 flex items-center justify-between border-t border-[#282828]">
      <div className="flex items-center w-1/3">
        <img src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&h=80&q=80" alt="Now playing" className="w-14 h-14 object-cover mr-4" />
        <div>
          <h4 className="font-semibold">Viva La Vida</h4>
          <p className="text-xs text-gray-400">Coldplay</p>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center mb-2">
          <Shuffle size={20} className="text-gray-400 mr-4 hover:text-white cursor-pointer" />
          <SkipBack size={20} className="mr-4 hover:text-white cursor-pointer" />
          <button className="bg-white text-black rounded-full p-2 mx-4 hover:scale-105 transition-transform">
            <Play size={24} fill="black" />
          </button>
          <SkipForward size={20} className="ml-4 hover:text-white cursor-pointer" />
          <Repeat size={20} className="text-gray-400 ml-4 hover:text-white cursor-pointer" />
        </div>
        <div className="w-full bg-gray-600 rounded-full h-1">
          <div className="bg-white w-1/3 h-1 rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center w-1/3 justify-end">
        <Volume2 size={20} className="text-gray-400 hover:text-white cursor-pointer" />
        <div className="w-32 bg-gray-600 rounded-full h-1 ml-2">
          <div className="bg-white w-2/3 h-1 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;
