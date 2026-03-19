import React, { useEffect } from 'react';
import { Drama } from '../types/drama';

interface DramaDetailProps {
  drama: Drama;
  onClose: () => void;
}

const DramaDetail: React.FC<DramaDetailProps> = ({ drama, onClose }) => {
  useEffect(() => {
    // 禁止背景滚动
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 100000000) {
      return (num / 100000000).toFixed(1) + '亿';
    } else if (num >= 10000) {
      return (num / 10000).toFixed(1) + '万';
    }
    return num.toString();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* 头部 */}
        <div className="relative">
          <div className="h-64 bg-gradient-to-br from-purple-600 to-indigo-600 relative overflow-hidden">
            <img
              src={drama.poster}
              alt={drama.name}
              className="w-full h-full object-cover opacity-30"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* 海报和标题 */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex gap-4">
              <img
                src={drama.poster}
                alt={drama.name}
                className="w-32 h-48 rounded-lg object-cover shadow-2xl"
              />
              <div className="flex-1 text-white">
                <h2 className="text-3xl font-bold mb-2">{drama.name}</h2>
                <div className="flex gap-2 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    {drama.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    drama.status === '连载中' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    {drama.status}
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {drama.category.map((cat) => (
                    <span
                      key={cat}
                      className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="p-6">
          {/* 数据统计 */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">🔥</div>
              <div className="text-sm text-gray-600 mb-1">热度值</div>
              <div className="text-2xl font-bold text-purple-600">
                {formatNumber(drama.heatScore)}
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">👀</div>
              <div className="text-sm text-gray-600 mb-1">播放量</div>
              <div className="text-2xl font-bold text-pink-600">
                {formatNumber(drama.platforms.douyin.views)}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">❤️</div>
              <div className="text-sm text-gray-600 mb-1">点赞数</div>
              <div className="text-2xl font-bold text-blue-600">
                {formatNumber(drama.platforms.douyin.likes)}
              </div>
            </div>
          </div>

          {/* 剧情简介 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">📖 剧情简介</h3>
            <p className="text-gray-600 leading-relaxed">{drama.description}</p>
          </div>

          {/* 剧集信息 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">ℹ️ 剧集信息</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">更新状态：</span>
                <span className="font-medium">{drama.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">集数：</span>
                <span className="font-medium">{drama.episodes}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">总集数：</span>
                <span className="font-medium">{drama.totalEpisodes}集</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">热度趋势：</span>
                <span className="font-medium">
                  {drama.heatTrend === 'up' ? '📈 上升' : drama.heatTrend === 'down' ? '📉 下降' : '➡️ 稳定'}
                </span>
              </div>
            </div>
          </div>

          {/* 观看按钮 */}
          <a
            href={drama.douyinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
          >
            🎬 前往抖音观看
          </a>

          <p className="text-center text-sm text-gray-500 mt-3">
            点击后将跳转到抖音平台热度最高的相关视频
          </p>
        </div>
      </div>
    </div>
  );
};

export default DramaDetail;
