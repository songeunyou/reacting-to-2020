import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function HomePage() {
  return (
    <div className="home-page">
        <p className="emojis">🤝🔥💩😷◾️</p>
        <h1 className="title">Reacting to 2020</h1>
        <p className="subtitle">You'll learn about the basics of React through an interactive tour of 2020~</p>

        <Link to={`/tutorial/1`} key={1}>
            <div className="start-btn">
                <p>START</p>
            </div>
        </Link>
        <div className="credits">
            <p>Brought to you by</p>
            <p>♥ <a href="https://github.com/suminkimm">Su Min Kim</a>, <a href="https://github.com/StuffByLiang">Liang Liu</a>, <a href="https://github.com/JustinSo1">Justin So</a>, <a href="https://github.com/songeunyou">Song You</a> ♥</p>
        </div>
    </div>
  );
}

export default HomePage;
