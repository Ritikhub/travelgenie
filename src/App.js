// src/App.js
import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
