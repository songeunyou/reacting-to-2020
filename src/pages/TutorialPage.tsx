import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';
import Callout from '../components/Callout';
import {allModules} from '../objects/Modules';

interface TutorialProps {
    id: number;
}

function TutorialPage({id}: TutorialProps) {
  const module = allModules[id-1];
  const nextModuleIndex = Number(id) + 1;
  const numberOfQuestions = module.questions.length;
  const [question, setQuestion] = useState(0);

  useEffect(() => {
    setQuestion(0);
  }, [id]);

  return (
    <div className="tutorial-page">
        <div className="info">
            <div className="instructions">
                {module.questions[question].explanation}
                {/* FILLER INSTRUCTIONS: My all-time favorite oven baked chicken breasts recipe!  It never fails me, thanks to this simple 5-step method that is easy to make and customize with your favorite seasonings. */}
                <Callout emoji="💩" text="This is a callout, for little texts you might wanna add about things!"/>
                {
                question < numberOfQuestions-1 
                ? <button onClick={() => setQuestion(question + 1)}>Next</button> 
                : <div className="start-btn">
                      <Link to={`/tutorial/${nextModuleIndex}`} key={nextModuleIndex}>
                          <p>Next Module</p>
                      </Link>
                  </div>
                }
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
