import React from 'react';
import logo from './logo.svg';
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

function TutorialPage() {
  return (
    <div className="tutorial-page">
        <div className="info">
            <div className="instructions">
                FILLER INSTRUCTIONS: My all-time favorite oven baked chicken breasts recipe!  It never fails me, thanks to this simple 5-step method that is easy to make and customize with your favorite seasonings.
                <Callout emoji="💩" text="This is a callout, for little texts you might wanna add about things!"/>
            </div>
            <div className="code-editor">
            </div>
        </div>
        <div className="visual">
        </div>
    </div>
  );
}

export default TutorialPage;
