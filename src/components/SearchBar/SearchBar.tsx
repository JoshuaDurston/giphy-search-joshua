import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange, onSearchClick, onKeyPress }) => {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        onKeyDown={onKeyPress}
        placeholder="Search for GIFs..."
      />
      <button onClick={onSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;
