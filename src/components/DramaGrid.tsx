import React from 'react';
import { Drama } from '../types/drama';
import DramaCard from './DramaCard';

interface DramaGridProps {
  dramas: Drama[];
  onDramaClick: (drama: Drama) => void;
}

const DramaGrid: React.FC<DramaGridProps> = ({ dramas, onDramaClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {dramas.map((drama, index) => (
        <DramaCard
          key={drama.id}
          drama={drama}
          rank={index + 1}
          onClick={() => onDramaClick(drama)}
        />
      ))}
    </div>
  );
};

export default DramaGrid;
