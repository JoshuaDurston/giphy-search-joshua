import React, { useState, useCallback } from 'react';
import { fetchGifs } from './api/GiphyApi';
import SearchBar from './components/SearchBar/SearchBar';
import GifResults from './components/GIFResult/GIFResult';
import Loader from './components/Loader/Loader';
import './App.css';

function App() {
  //States
  const [searchTerm, setSearchTerm] = useState<string>(''); 
  const [gifs, setGifs] = useState<any[]>([]); 
  const [totalCount, setTotalCount] = useState<number>(0); 
  const [loading, setLoading] = useState<boolean>(false); 
  const [noResults, setNoResults] = useState<boolean>(false);

  // handle input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    // reset no result value
    setNoResults(false); 
  };

  // perform search
  const handleSearch = async () => {
    if (!searchTerm) return;

    setGifs([]);
    setTotalCount(0);
    setLoading(true); // visible loader
    setNoResults(false); // reset no results message on new search

    try {
      const { gifs, totalCount } = await fetchGifs(searchTerm);

      setGifs(gifs);
      setTotalCount(totalCount);

      // only set noResults if totalCount is 0
      if (totalCount === 0) {
        setNoResults(true);
      }
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    } finally {
      setLoading(false); // stop loader
    }
  };

  // handle 'Enter' key press to trigger search
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>GIPHY SEARCH</h1>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearchClick={handleSearch}
          onKeyPress={handleKeyPress}
        />

        {loading && <Loader />}

        {/* show the no results message only after a search has been performed */}
        {noResults && !loading && searchTerm && (
          <p>No GIFs found for "{searchTerm}"</p>
        )}

        <GifResults gifs={gifs} totalCount={totalCount} />
      </header>
    </div>
  );
}

export default App;
