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
            <p>Gull Requests</p>
        </div>
    </div>
  );
}

export default Completed;
