import React from 'react';
import '../css/App.css';

interface CalloutProps {
    emoji: string;
    text: string;
}

function Callout({emoji, text}: CalloutProps) {
    return (
        <div className="callout">
            <p>{emoji}</p>
            <p>{text}</p>
        </div>
    );
}

export default Callout;
