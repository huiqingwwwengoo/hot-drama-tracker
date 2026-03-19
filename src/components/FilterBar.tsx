import React from 'react';
import { TimeRange, DramaType } from '../types/drama';

interface FilterBarProps {
  timeRange: TimeRange;
  dramaType: DramaType;
  onTimeRangeChange: (range: TimeRange) => void;
  onDramaTypeChange: (type: DramaType) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  timeRange,
  dramaType,
  onTimeRangeChange,
  onDramaTypeChange,
}) => {
  const timeRanges: { value: TimeRange; label: string }[] = [
    { value: 3, label: '3天' },
    { value: 7, label: '7天' },
    { value: 15, label: '15天' },
    { value: 30, label: '30天' },
  ];

  const dramaTypes: { value: DramaType; label: string }[] = [
    { value: 'all', label: '全部' },
    { value: '短剧', label: '短剧' },
    { value: '漫剧', label: '漫剧' },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6 border border-white/20">
      <div className="flex flex-col md:flex-row gap-6">
        {/* 时间范围筛选 */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-purple-200 mb-2">
            📅 时间范围
          </label>
          <div className="flex gap-2">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => onTimeRangeChange(range.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  timeRange === range.value
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* 类型筛选 */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-purple-200 mb-2">
            🎭 剧集类型
          </label>
          <div className="flex gap-2">
            {dramaTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => onDramaTypeChange(type.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  dramaType === type.value
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
