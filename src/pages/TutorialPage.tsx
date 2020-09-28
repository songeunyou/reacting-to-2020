import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';
import '../css/Australia.css';
import {allModules} from '../objects/Modules';
import CodeEditor from '../components/CodeEditor';
import AuForestFire from '../components/AuForestFire';


interface TutorialProps {
    id: number;
}

function TutorialPage({id}: TutorialProps) {
  const module = allModules[id-1];
  const nextModuleIndex = Number(id) + 1;
  const [question, setQuestion] = useState(0);

  useEffect(() => {
    setQuestion(0);
  }, [id]);


  return (
    <div className="tutorial-page">
        <div className="info">
            <div className="instructions">
                {
                    module.questions[question] !== undefined
                    ? <p>{module.questions[question].explanation}</p>
                    : null
                }
                {
                question < module.questions.length-1
                ? <button onClick={() => setQuestion(question + 1)}>Next</button>
                // reached the end of all modules
                : id == 3
                  ? <div className="start-btn">
                        <Link to={`/success}`}>
                            <p>Finish</p>
                        </Link>
                    </div>
                  : <div className="start-btn">
                      <Link to={`/tutorial/${nextModuleIndex}`} key={nextModuleIndex}>
                          <p>Next Module</p>
                      </Link>
                    </div>
                }
            </div>
            <div className="code-editor">
                <CodeEditor />
            </div>
        </div>
        <div className="visual">
          {
            id == 1 ?
            <AuForestFire id={question+1} />
            : null
          }
        </div>
    </div>
  );
}

export default TutorialPage;
