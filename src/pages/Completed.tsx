import React from 'react';
import { Link } from 'react-router-dom';

function Completed() {
  return (
    <div className="completed-page">
        <p className="emojis">👏⚡️🥳✨🎉</p>
        <h1 className="title">Success!!</h1>
        <p className="subtitle">You made it through 2020. It's time to celebrate with some fireworks</p>
        <Link to="/">
            <div className="start-btn">
                <p>Play Again</p>
            </div>
        </Link>
        <div className="credits">
            <p>Brought to you by</p>
            <p>♥ <a href="https://github.com/suminkimm">Su Min Kim</a>, <a href="https://github.com/StuffByLiang">Liang Liu</a>, <a href="https://github.com/JustinSo1">Justin So</a>, <a href="https://github.com/songeunyou">Song You</a> ♥</p>
        </div>
    </div>
  );
}

export default Completed;
