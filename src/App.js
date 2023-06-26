import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBox from './components/pages/SearchBox/SearchBox';
import SearchResults from './components/pages/SearchResults/SearchResults';
import ProductDetail from './components/pages/ProductDetail/ProductDetail';
import { searchItems } from '../src/components/services/api';

const App = () => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async (query) => {
    const results = await searchItems(query);
    setSearchResults(results);
  };

  return (
    <Router>
      <div>
        <SearchBox onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/items" element={<SearchResults data={searchResults} />} />
          <Route path="/items/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
