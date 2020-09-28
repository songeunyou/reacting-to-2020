import React from 'react';
import Callout from '../components/Callout';
import { CodeBlock, atomOneDark } from "react-code-blocks";

export interface Question {
    id: number;
    explanation: JSX.Element;
    mission: string;
    answer: string;
}

const M1Q1e =
    <div className="explanation">
        <h2>JSX</h2>
        <p>JSX (JavaScript XML) is a syntax extension to JavaScript that allows us to write HTML in React. It is useful for describing what the UI should look like and produces React 'elements'</p>
        <CodeBlock
            text={`const name = "Jane"\nconst element = <h1>Hello {name}</h1>`}
            language={'jsx'}
            showLineNumbers={false}
            theme={atomOneDark}
        />
    </div>

const M1Q1: Question = {
    id: 1,
    explanation: M1Q1e,
    mission: "As you enter the woods, you see a sign that welcomes you to the Wollemi National Park. Create an element using JSX that displays 'Welcome to Wollemi National Park!'.",
    answer: "."
}

const M1Q2e =
    <div className="explanation">
        <h2>Components</h2>
        <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. They are like JavaScript functions in that they accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.</p>
        <CodeBlock
            text={`function Component() {\n     return <h1>Hello World</h1>\n}`}
            language={'jsx'}
            showLineNumbers={false}
            theme={atomOneDark}
        />
    </div>

const M1Q2: Question = {
    id: 2,
    explanation: M1Q2e,
    mission: "You are ready to start setting the forest ablaze. Create a component called 'Fire' that contains a header that says 'Burning everything down!'.",
    answer: "."
}

const M1Q3e =
    <div className="explanation">
        <h2>Nested Components</h2>
        <p>Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail.</p>
        <CodeBlock
            text={`function Component() {\n     return <h1>Hello World</h1>\n}\n\nfunction MainComponent() {\n      return (\n             <div>\n                 <Component />\n                 <Component />\n           </div>\n     )\n}`}
            language={'jsx'}
            showLineNumbers={false}
            theme={atomOneDark}
        />
    </div>

const M1Q3: Question = {
    id: 3,
    explanation: M1Q3e,
    mission: "You are trying to set the rest of the forest on fire, but it's currently taking too long by creating one fire at a time. Make a new component LargeFire that contains three Fire components.",
    answer: "M1Q3. The answer"
}

const M1Q4e =
    <div className="explanation">
        <h2>Putting it Together</h2>
        <p>You have a chance to save the people and animals of Australia by creating a boat for them to escape on. Create a component called People, a component called Animals, and a component called Boat that contains People and Animals.</p>
    </div>

const M1Q4: Question = {
    id: 4,
    explanation: M1Q4e,
    mission: "M1Q4. This is the fourth mission that you should accomplish",
    answer: "M1Q4. The answer"
}

const M2Q1e =
    <div className="explanation">
        <h2>State</h2>
        <p>State reflects the current attributes of a component. Pass the initial state to useState as an argument. useState returns two values: the current state and a function that updates it</p>
        <CodeBlock
            text={`function Example() {\n       // Declare a new state variable, which we'll call "count"\n     const [count, setCount] = useState(0);\n\n      return (\n          <div>\n              <p>You clicked {count} times</p>\n               <button onClick={() => setCount(count + 1)}>Click me</button>\n           </div>\n        )\n}`}
            language={'jsx'}
            showLineNumbers={false}
            theme={atomOneDark}
            highlight={"2,3,7,8"}
        />
    </div>

const M2Q1: Question = {
    id: 1,
    explanation: M2Q1e,
    mission: "Use useState to initiate the first case of COVID-19 in Wuhan.",
    answer: "M2Q1. The answer"
}

const M2Q2: Question = {
    id: 2,
    explanation: <div/>,
    mission: "M2Q2. This is the second mission that you should accomplish",
    answer: "M2Q2. The answer"
}

const M3Q1: Question = {
    id: 1,
    explanation: <div/>,
    mission: "M3Q1. This is the mission that you should accomplish",
    answer: "M3Q1. The answer"
}

const M3Q2: Question = {
    id: 2,
    explanation: <div/>,
    mission: "M3Q2. This is the second mission that you should accomplish",
    answer: "M3Q2. The answer"
}

export const M1Questions = [M1Q1, M1Q2, M1Q3, M1Q4];
export const M2Questions = [M2Q1, M2Q2];
export const M3Questions = [M3Q1, M3Q2];
