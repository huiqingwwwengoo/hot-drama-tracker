export interface Drama {
  id: string;
  name: string;
  type: '短剧' | '漫剧';
  poster: string;
  description: string;
  heatScore: number;
  heatTrend: 'up' | 'down' | 'stable';
  status: '连载中' | '已完结';
  episodes: string;
  totalEpisodes: number;
  category: string[];
  douyinUrl: string;
  updateTime: string;
  platforms: {
    douyin: {
      views: number;
      likes: number;
      comments: number;
    };
  };
}

export type TimeRange = 3 | 7 | 15 | 30;
export type DramaType = 'all' | '短剧' | '漫剧';
