// src/App.js
import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import './styles/App.css'; // Ensure this path is correct

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}

export default App;
