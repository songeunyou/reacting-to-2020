import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Australia.scss';
import {allModules} from '../objects/Modules';
import CodeEditor from '../components/CodeEditor';
import AuForestFire from '../components/AuForestFire';
import BLMVisual from '../components/BLMVisual';
import CoronaVisual from '../components/CoronaVisual';

interface TutorialProps {
    id: number;
}

function TutorialPage({id}: TutorialProps) {
  const module = allModules[id-1];
  const nextModuleIndex = Number(id) + 1;
  const [questionNumber, setquestionNumber] = useState(0);
  const [description, setDescriptionVisibility] = useState(true);
  
  const question = module.questions[questionNumber];

  useEffect(() => {
    setquestionNumber(0);
  }, [id]);

  const checkCode = (event: React.FormEvent) => {
    let condensedCode = document.getElementById("editor")?.firstChild?.firstChild?.textContent?.replace(/\s+/g, '') || "";
    let resultingHTML = document.getElementById("result")?.children[0].innerHTML || "";

    console.log(resultingHTML);

    let errors = []

    // check to see if code contains all the strings specified in question.answerStrings
    for(const s of question.answerStrings) {
      if(!condensedCode.includes(s.replace(/\s+/g, ''))) {
        errors.push(`code doesn't contain '${s}'`)
      }
    }

    if(resultingHTML.includes(question.answerHTML)) {
      errors.push(`HTML doesn't match`)
    }

    console.log("LOGGING!!!")
    console.log("---question---")
    console.log(question)
    console.log("---errors---")
    console.log(errors)
    console.log("---resulting html---")
    console.log(resultingHTML)
    console.log("---expected html---")
    console.log(question.answerHTML)

    // tests passed, goto next question
    if(errors.length === 0) {
      setDescriptionVisibility(true)
      setquestionNumber(questionNumber + 1)
    }
  }

  return (
    <div className={`tutorial-page module-${id}`}>
        <div className="info">
            <div className={`instructions inst-module-${id}`}>
                <button className="desc-btn" onClick={() => setDescriptionVisibility(!description)}>{description ? "Hide Description" : "Show Description"}</button>
                <div className={`desc-container ${description ? "" : "hide-desc"}`}>
                    {
                        question !== undefined
                        ? <p>{question.explanation}</p>
                        : null
                    }
                </div>

                <div className="mission">
                    <h2>Mission</h2>
                    {
                        question !== undefined
                        ? <p>{question.mission}</p>
                        : null
                    }
                </div>
            </div>
            <div className="code-editor">
                <CodeEditor question={question}/>
            </div>
            {
                questionNumber < module.questions.length-1 ?
                <button onClick={checkCode}>Submit</button>
                // reached the end of all modules
                : id == 3
                  ? <div className="next-btn">
                        <Link to={`/success`}>
                            <p>Finish</p>
                        </Link>
                    </div>
                  : <div className="next-btn">
                      <Link to={`/tutorial/${nextModuleIndex}`} key={nextModuleIndex}>
                          <p>Next Module</p>
                      </Link>
                    </div>
            }
        </div>
        <div className="visual">
          {
            id == 1 ?
            <AuForestFire id={questionNumber+1} />
            : id == 2 ?
            <CoronaVisual id={3} />
            : id == 3 ?
            <BLMVisual id={questionNumber+1} />
            : null
          }
        </div>
    </div>
  );
}

export default TutorialPage;
