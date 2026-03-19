import React from 'react';
import { Drama } from '../types/drama';

interface DramaCardProps {
  drama: Drama;
  rank: number;
  onClick: () => void;
}

const DramaCard: React.FC<DramaCardProps> = ({ drama, rank, onClick }) => {
  const formatNumber = (num: number): string => {
    if (num >= 100000000) {
      return (num / 100000000).toFixed(1) + '亿';
    } else if (num >= 10000) {
      return (num / 10000).toFixed(1) + '万';
    }
    return num.toString();
  };

  const getTrendIcon = () => {
    switch (drama.heatTrend) {
      case 'up':
        return '📈';
      case 'down':
        return '📉';
      default:
        return '➡️';
    }
  };

  const getRankBadgeColor = () => {
    if (rank === 1) return 'bg-gradient-to-br from-yellow-400 to-yellow-600';
    if (rank === 2) return 'bg-gradient-to-br from-gray-300 to-gray-500';
    if (rank === 3) return 'bg-gradient-to-br from-orange-400 to-orange-600';
    return 'bg-gradient-to-br from-purple-500 to-purple-700';
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105 group"
    >
      {/* 海报区域 */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={drama.poster}
          alt={drama.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* 排名徽章 */}
        <div className={`absolute top-3 left-3 w-10 h-10 ${getRankBadgeColor()} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
          {rank}
        </div>

        {/* 类型标签 */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
          {drama.type}
        </div>

        {/* 状态标签 */}
        <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-full text-white text-sm ${
          drama.status === '连载中' ? 'bg-green-500' : 'bg-blue-500'
        }`}>
          {drama.status === '连载中' ? `🔄 ${drama.episodes}` : `✅ ${drama.episodes}`}
        </div>
      </div>

      {/* 内容区域 */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-1 group-hover:text-purple-600 transition-colors">
          {drama.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {drama.description}
        </p>

        {/* 标签 */}
        <div className="flex flex-wrap gap-1 mb-3">
          {drama.category.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* 热度信息 */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{getTrendIcon()}</span>
            <div>
              <div className="text-xs text-gray-500">热度值</div>
              <div className="text-sm font-bold text-purple-600">
                {formatNumber(drama.heatScore)}
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-gray-500">播放</div>
            <div className="text-sm font-bold text-gray-700">
              {formatNumber(drama.platforms.douyin.views)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DramaCard;
