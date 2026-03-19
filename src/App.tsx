import { useState, useMemo } from 'react';
import { Drama, TimeRange, DramaType } from './types/drama';
import { mockDramas } from './data/mockData';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import DramaGrid from './components/DramaGrid';
import DramaDetail from './components/DramaDetail';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [timeRange, setTimeRange] = useState<TimeRange>(7);
  const [dramaType, setDramaType] = useState<DramaType>('all');
  const [selectedDrama, setSelectedDrama] = useState<Drama | null>(null);

  // 筛选逻辑
  const filteredDramas = useMemo(() => {
    let result = [...mockDramas];

    // 类型筛选
    if (dramaType !== 'all') {
      result = result.filter(drama => drama.type === dramaType);
    }

    // 搜索筛选
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        drama =>
          drama.name.toLowerCase().includes(query) ||
          drama.description.toLowerCase().includes(query) ||
          drama.category.some(cat => cat.toLowerCase().includes(query))
      );
    }

    return result;
  }, [searchQuery, dramaType, timeRange]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main className="container mx-auto px-4 py-8">
        <FilterBar
          timeRange={timeRange}
          dramaType={dramaType}
          onTimeRangeChange={setTimeRange}
          onDramaTypeChange={setDramaType}
        />

        {filteredDramas.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-white text-xl">
              😔 没有找到相关剧集
            </div>
            <p className="text-purple-200 mt-4">
              试试其他搜索关键词或筛选条件
            </p>
          </div>
        ) : (
          <DramaGrid 
            dramas={filteredDramas}
            onDramaClick={setSelectedDrama}
          />
        )}
      </main>

      {selectedDrama && (
        <DramaDetail
          drama={selectedDrama}
          onClose={() => setSelectedDrama(null)}
        />
      )}

      <footer className="text-center py-8 text-purple-200">
        <p>© 2026 爆款短剧漫剧监测系统 | 数据每小时更新</p>
      </footer>
    </div>
  );
}

export default App;
