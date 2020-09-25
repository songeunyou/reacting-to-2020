import React from 'react';
import logo from './logo.svg';
import '../css/App.css';

function HomePage() {
  return (
    <div className="home-page">
        <p className="emojis">🤝🔥💩😷◾️</p>
        <h1 className="title">Reacting to 2020</h1>
        <p className="subtitle">You'll learn about the basics of React through an interactive tour of 2020~</p>
        <div className="start-btn">
            <p>START</p>
        </div>
        <div className="credits">
            <p>Brought to you by</p>
            <p>Gull Requests</p>
        </div>
    </div>
  );
}

export default HomePage;
