import React from 'react';
import giphyLogo from '../../assets/images/logos/Giphy-logo.svg';

interface GifItemProps {
  gif: any;
}

const GifItem: React.FC<GifItemProps> = ({ gif }) => {
  return (
    <div key={gif.id} className="gif-item">
      <img src={gif.images.fixed_height.url} alt={gif.title} className="gif-image" />
      <div className="buttons container">
        <button onClick={() => navigator.clipboard.writeText(gif.url)} className="copy-url-button">
          📋
        </button>
        <a href={gif.url} target="_blank" rel="noopener noreferrer" className="gif-link">
          <img src={giphyLogo} alt="Giphy Logo" />
        </a>
      </div>
    </div>
  );
};

export default GifItem;
