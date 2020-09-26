export interface Question {
    id: number;
    explanation: string;
    mission: string;
    answer: string;
}

const M1Q1: Question = {
    id: 1,
    explanation: "M1Q1. This is an explanation of a React concept.",
    mission: "M1Q1. This is the mission that you should accomplish",
    answer: "M1Q1. The answer"
}

const M1Q2: Question = {
    id: 2,
    explanation: "M1Q2. This is another explanation of a React concept.",
    mission: "M1Q2. This is the second mission that you should accomplish",
    answer: "M1Q2. The answer"
}

const M2Q1: Question = {
    id: 1,
    explanation: "M2Q1. This is an explanation of a React concept.",
    mission: "M2Q1. This is the mission that you should accomplish",
    answer: "M2Q1. The answer"
}

const M2Q2: Question = {
    id: 2,
    explanation: "M2Q2. This is another explanation of a React concept.",
    mission: "M2Q2. This is the second mission that you should accomplish",
    answer: "M2Q2. The answer"
}

const M3Q1: Question = {
    id: 1,
    explanation: "M3Q1. This is an explanation of a React concept.",
    mission: "M3Q1. This is the mission that you should accomplish",
    answer: "M3Q1. The answer"
}

const M3Q2: Question = {
    id: 2,
    explanation: "M3Q2. This is another explanation of a React concept.",
    mission: "M3Q2. This is the second mission that you should accomplish",
    answer: "M3Q2. The answer"
}

export const M1Questions = [M1Q1, M1Q2];
export const M2Questions = [M2Q1, M2Q2];
export const M3Questions = [M3Q1, M3Q2];

