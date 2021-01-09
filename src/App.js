import React from "react";
import Weather from './Weather';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        Lovingly coded by Anna V and 
      <a href="https://github.com/Ventanna94/react-weather-app" target="_blank"> open-sourced </a>
      </footer>
      </div>
    </div>
  );
}

