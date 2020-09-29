import React from 'react';

interface FireProps {
    style: object
}

function Fire({style}:FireProps) {
    return (
        <div className="fire appear" style={style}>
            <div className="fire-left">
                <div className="main-fire"></div>
                <div className="particle-fire"></div>
            </div>
            <div className="fire-main">
                <div className="main-fire"></div>
                <div className="particle-fire"></div>
            </div>
            <div className="fire-right">
                <div className="main-fire"></div>
                <div className="particle-fire"></div>
            </div>
            <div className="fire-bottom">
                <div className="main-fire"></div>
            </div>
        </div>
    )
}

export default Fire;
