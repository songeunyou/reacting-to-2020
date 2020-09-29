import React from "react";
import Callout from "../components/Callout";
import { CodeBlock, atomOneDark } from "react-code-blocks";

export interface Question {
  id: number;
  explanation: JSX.Element;
  mission: string;
  answer: string;
  starterCode: string;
  answerHTML: string; // empty to disable
  answerStrings: String[]; // list of strings that must be in the code (with no whitespace)
}

const M1Q1e = (
  <div className="explanation">
    <h2>JSX</h2>
    <p>
      JSX (JavaScript XML) is a syntax extension to JavaScript that allows us to
      write HTML in React. It is useful for describing what the UI should look
      like and produces React 'elements'
    </p>
    <CodeBlock
      text={`const name = "Jane"\nconst element = <h1>Hello {name}</h1>`}
      language={"jsx"}
      showLineNumbers={false}
      theme={atomOneDark}
    />
  </div>
);

const M1Q1s = `const forestName = "replace me!";
const sign = <h1>Welcome to {  }!</h1>

render(sign)`;

const M1Q1: Question = {
  id: 1,
  explanation: M1Q1e,
  mission:
    "As you enter the woods, you see a sign that welcomes you to the Wollemi National Park. Create an element using JSX that displays 'Welcome to Wollemi National Park!'.",
  answer: ".",
  starterCode: M1Q1s,
  answerHTML: "<h1>Welcome to Wollemi National Park!</h1>",
  answerStrings: ["{ forestName }"],
};

const M1Q2e = (
  <div className="explanation">
    <h2>Components</h2>
    <p>
      Components let you split the UI into independent, reusable pieces, and
      think about each piece in isolation. They are like JavaScript functions in
      that they accept arbitrary inputs (called “props”) and return React
      elements describing what should appear on the screen.
    </p>
    <CodeBlock
      text={`function Component() {\n     return <h1>Hello World</h1>\n}`}
      language={"jsx"}
      showLineNumbers={false}
      theme={atomOneDark}
    />
  </div>
);

const M1Q2s = `function [input]() {
	return [input]
}
render();`;

const M1Q2: Question = {
  id: 2,
  explanation: M1Q2e,
  mission:
    "You are ready to start setting the forest ablaze. Create a component called 'Fire' that contains a header that says 'Burning everything down!'.",
  answer: ".",
  starterCode: M1Q2s,
  answerHTML: "<h1>Burning everything down!</h1>",
  answerStrings: ["Burning everything down!", "Fire"],
};

const M1Q3e = (
  <div className="explanation">
    <h2>Nested Components</h2>
    <p>
      Components can refer to other components in their output. This lets us use
      the same component abstraction for any level of detail.
    </p>
    <CodeBlock
      text={`function Component() {\n     return <h1>Hello World</h1>\n}\n\nfunction MainComponent() {\n      return (\n             <div>\n                 <Component />\n                 <Component />\n           </div>\n     )\n}`}
      language={"jsx"}
      showLineNumbers={false}
      theme={atomOneDark}
    />
  </div>
);

const M1Q3s = `
function Fire() {
	return <h1>Burning everything down!</h1>
}

function [input]() {
	return (
		[input]
	)
}
render()`;

const M1Q3: Question = {
  id: 3,
  explanation: M1Q3e,
  mission:
    "You are trying to set the rest of the forest on fire, but it's currently taking too long by creating one fire at a time. Make a new component LargeFire that contains three Fire components.",
  answer: "M1Q3. The answer",
  starterCode: M1Q3s,
  answerHTML:
    "<div><h1>Burning everything down!</h1><h1>Burning everything down!</h1><h1>Burning everything down!</h1></div>",
  answerStrings: ["Fire", "LargeFire"],
};

const M1Q4s = `function [input]() {
	const people = "All of the people"
	return <h1>[input]</h1>
}

function [input]() {
	const animals = "All of the animals"
	return <h1>[input]</h1>
}

function [input]() {
	return (
		[input]
	)
}
render(Boat);`;

const M1Q4a = `
<div>
<h1>All of the people</h1>
<h1>All of the animals</h1>
</div>
`;

const M1Q4e = (
  <div className="explanation">
    <h2>Putting it Together</h2>
    <p>
      You have a chance to save the people and animals of Australia by creating
      a boat for them to escape on. Create a component called People, a
      component called Animals, and a component called Boat that contains People
      and Animals.
    </p>
  </div>
);

const M1Q4: Question = {
  id: 4,
  explanation: M1Q4e,
  mission: "M1Q4. This is the fourth mission that you should accomplish",
  answer: "M1Q4. The answer",
  starterCode: M1Q4s,
  answerHTML: M1Q4a,
  answerStrings: ["People", "Animal"],
};

const M2Q1s = `function Coronavirus() {
    // Declare a state variable for the first infected country
    // and a function to update the country
    const [] = React.useState();
  
    return (
      <div>
              {/* Use your state below */}
        <p>There is a new case of COVID-19 in {}</p>
      </div>
    );
  }
  render(Coronavirus);`;
  
const M2Q1a = `<p>There is a new case of COVID-19 in Wuhan</p>`;
const M2Q1e = (
  <div className="explanation">
    <h2>State</h2>
    <p>
      State reflects the current property values of a component. The component
      re-renders whenever the state is updated. To begin, pass the initial state
      to useState as an argument. useState returns two values: the current state
      and a function that updates it
    </p>
    <CodeBlock
      text={`function Example() {\n       // Declare a new state variable, which we'll call "count"\n     const [count, setCount] = useState(0);\n\n      return (\n          <div>\n              <p>You clicked {count} times</p>\n               <button onClick={() => setCount(count + 1)}>Click me</button>\n           </div>\n        )\n}`}
      language={"jsx"}
      showLineNumbers={false}
      theme={atomOneDark}
      highlight={"2,3,7,8"}
    />
  </div>
);

const M2Q1: Question = {
  id: 1,
  explanation: M2Q1e,
  mission: "Use useState to initiate the first case of COVID-19 in Wuhan.",
  answer: "M2Q1. The answer",
  starterCode: M2Q1s,
  answerHTML: M2Q1a,
  answerStrings: ["Wuhan"],
};

const M2Q2s = `function Coronavirus() {
    const [covidCases, setCovidCases] = React.useState(1);
      setTimeout(function(){
          // double the number of covid cases every 2 seconds
      }, 2000);
  
    return (
      <div>
        <p>There are {covidCases} new global cases of COVID-19.</p>
      </div>
    );
  }
  render(Coronavirus)`;

const M2Q2a = "<p>There are 2 new global cases of COVID-19.</p>";

const M2Q2: Question = {
  id: 2,
  explanation: M2Q1e,
  mission: "Update the state so that COVID-19 spreads across the world!",
  answer: "M2Q2. The answer",
  starterCode: M2Q2s,
  answerHTML: M2Q2a,
  answerStrings: ["setCovidCases(covidCases * 2)"],
};

const M2Q3s = `
function componentDidMount() {
	virusInfect(person, carrier, severity);
}

function componentWillUnmount() {
	virusBreakdown(person, carrier, severity);
}

// Below is a skeleton to start with
function virusInfect(person, carrier, severity){return;}
function virusBreakdown(person, carrier, severity){return;}

function Coronavirus() {
    [input](() => {
        [input]
    });
};
render(Coronavirus)`;

const M2Q3e = (
  <div className="explanation">
    <h2>Hooks</h2>
    <p>
      You may have noticed the use of useState instead of this.state in the
      constructor. In 2018, React introduced Hooks, which let you use certain
      React features without writing a class. We have already seen the useState
      hook—the other popular hook is the useEffect hook, which replaces
      componentDidMount, componentDidUpdate, and componentDidUnmount.
    </p>
    <CodeBlock
      text={`// Similar to componentDidMount and componentDidUpdate:\nReact.useEffect(() => {\n     // Update the document title using the browser API\n        patient.catchCovid(date, covid);\n\n      // Similar to componentDidUnmount\n     return function cleanup() {\n           patient.produceAntibodies(date, covid);\n        };\n});`}
      language={"jsx"}
      showLineNumbers={false}
      theme={atomOneDark}
    />
  </div>
);

const M2Q3: Question = {
  id: 2,
  explanation: M2Q3e,
  mission: "Rewrite the COVID code to include useEffect.",
  answer: "M2Q2. The answer",
  starterCode: M2Q3s,
  answerHTML: "",
  answerStrings: ["React.useEffect", "cleanup"],
};

const M3Q1s = `
const Friend = (props) => {
	return (
        <div>
            <p>{props.details}</p>
        </div>
	)
}
const details = "BLM!"
const America = () => {
	return (
		<div>
            <Friend [input] />
		</div>
	)
}
render(America);
`;

const M3Q1a = `<div><p>BLM!</p></div>`;

const M3Q1e = (
  <div className="explanation">
    <h2>Props</h2>
    <p>
      Now that you have learned about components and state, a way of passing
      data around components is through the use of props. An important thing to
      remember is that props are being passed in a uni-directional flow. (one
      way from parent to child)
    </p>
    <CodeBlock
      text={`const Hello = (props) => {\n     return (\n            <div>\n               <p>Hello {props.greeting}</p>\n           </div>\n         )\n}\n\nconst App = () => {\n        const world = "World"\n     return (\n          <div>\n             <h1>Greetings</h1>\n                <Hello greeting={world} />\n                <Hello greeting="MLH" />\n          </div>\n        )\n}`}
      language={"jsx"}
      showLineNumbers={false}
      theme={atomOneDark}
    />
  </div>
);

const M3Q1: Question = {
  id: 1,
  explanation: M3Q1e,
  mission:
    "The BLM movement has started. You are now responsible to notify others the details of this event. Notify one other place 1 state by passing down the details prop to the Friend component",
  answer: "M3Q1. The answer",
  starterCode: M3Q1s,
  answerHTML: M3Q1a,
  answerStrings: ["details={details}"],
};

const M3Q2s = `
const states = [
	{
	    "name": "California",
	    "pop": 328.2
	},
	{
	    "name": "Texas",
	    "pop": 29
	},
	{
	    "name": "Florida",
	    "pop": 21.48
	},
	{
	    "name": "Washington",
	    "pop": 7.62
	},
	{
	    "name": "Minnesota",
	    "pop": 5.63
	},
	{
	    "name": "Massachusetts",
	    "pop": 6.89
	},
	{
	    "name": "New Jersey",
	    "pop": 8.88
	}
]
const res = <p>{[input]}</p>
render(res);
`;
const M3Q2a = `<p>CaliforniaTexasFloridaWashingtonMinnesotaMassachusettsNew Jersey</p>`;
const M3Q2e = (
  <div className="explanation">
    <h2>Lists</h2>
    <p>
      A nice way to interact with arrays is through higher-order functions.
      Higher-order functions are functions that take other functions as
      arguments or return functions as their results. Higher-order functions
      allow programmers to write more elegant code. An example of a higher-order
      function would be the map() method. The map() method creates a new array
      populated with the results of calling a provided function on every element
      in the calling array.
    </p>
    <CodeBlock
      text={`const array1 = [1, 4, 9, 16];\n\n// pass a function to map\nconst map1 = array1.map(x => x * 2);\n\nconsole.log(map1);\n// expected output: Array [2, 8, 18, 32]}`}
      language={"jsx"}
      showLineNumbers={false}
      theme={atomOneDark}
    />
  </div>
);

const M3Q2: Question = {
  id: 2,
  explanation: M3Q2e,
  mission:
    "You are trying to tell multiple people instead of a single friend about the details of the BLM movement. You need to find out which places you should head towards to make the most impact. Use the map method to output an array containing just the names of the objects inside the States array. (hint: call upon the name property of the objects)",
  answer: "M3Q2. The answer",
  starterCode: M3Q2s,
  answerHTML: M3Q2a,
  answerStrings: ["map"],
};

const M3Q3s = `
const states = [
    {
      id: 1,
      name: "California",
      pop: 328.2,
      content: "BLM"
    },
    {
      id: 2,
      name: "Texas",
      pop: 29,
      content: "BLM"
    },
    {
      id: 3,
      name: "Florida",
      pop: 21.48,
      content: "BLM"
    },
    {
      id: 4,
      name: "Washington",
      pop: 7.62,
      content: "BLM"
    },
    {
      id: 5,
      name: "Minnesota",
      pop: 5.63,
      content: "BLM"
    },
    {
      id: 6,
      name: "Massachusetts",
      pop: 6.89,
      content: "BLM"
    },
    {
      id: 7,
      name: "New Jersey",
      pop: 8.88,
      content: "BLM"
    }
  ];
  const Message = ({ state }) => {
    return (
      <li>
        {state.name} now knows about {state.content}
      </li>
    );
  };
  
  const Movement = () => {
    return (
      <div>
        <h1> Message </h1>
        <div>
          <ul>
            {states.[input]((state) => (
              <Message key={state.id} [input]} />
            ))}
          </ul>
        </div>
      </div>
    );
  };
`;

const M3Q3a = `
<li>California now knows about BLM</li>
<li>Texas now knows about BLM</li>
<li>Florida now knows about BLM</li>
<li>Washington now knows about BLM</li>
<li>Minnesota now knows about BLM</li>
<li>Massachusetts now knows about BLM</li>
<li>New Jersey now knows about BLM</li>
`;

const M3Q3e = (
  <div className="explanation">
    <h2>Putting it Together</h2>
    <p>
      Now that you know which places to spread the details to, it's time to
      spread the message to those states. Use the map method to render a list of
      message components from the list of states.
    </p>
  </div>
);

const M3Q3: Question = {
  id: 3,
  explanation: M3Q3e,
  mission: "M3Q3. This is the third mission that you should accomplish",
  answer: "M3Q3. The answer",
  starterCode: M3Q3s,
  answerHTML: M3Q3a,
  answerStrings: ["map", "state={state}"],
};

export const M1Questions = [M1Q1, M1Q2, M1Q3, M1Q4];
export const M2Questions = [M2Q1, M2Q2, M2Q3];
export const M3Questions = [M3Q1, M3Q2, M3Q3];
