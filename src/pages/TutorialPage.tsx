import React from 'react';
import '../css/App.css';
import Callout from '../components/Callout';

interface TutorialProps {
    id: string;
}

// TutorialPage needs to be rewritten so that depending on which module you are on (different id),
// Info and visuals are swapped out

function TutorialPage({id}: TutorialProps) {
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
