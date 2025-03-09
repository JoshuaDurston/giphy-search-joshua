import React from 'react';
import GifItem from '../GIFItem/GIFItem';

interface GifResultsProps {
  gifs: any[];
  totalCount: number;
}

const GifResults: React.FC<GifResultsProps> = ({ gifs, totalCount }) => {
  return (
    <div className="gif-result">
      {totalCount > 0 && (
        <p>{`Showing ${gifs.length} of ${totalCount} results`}</p>
      )}

      <div className="gifs-container">
        {gifs.length > 0 && gifs.map((gif) => <GifItem key={gif.id} gif={gif} />)}
      </div>
    </div>
  );
};

export default GifResults;
