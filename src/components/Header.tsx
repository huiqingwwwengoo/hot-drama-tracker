import React from 'react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
              🔥
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                爆款短剧漫剧监测
              </h1>
              <p className="text-sm text-purple-200">
                实时追踪全网热门内容
              </p>
            </div>
          </div>

          <div className="w-full md:w-96">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索剧名、关键词..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
