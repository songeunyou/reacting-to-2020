import {Question, M1Questions, M2Questions, M3Questions} from './Questions' 

interface Module {
    id: number;
    questions: Question[];
}

const M1: Module = {
    id: 1,
    questions: M1Questions
}
  
const M2: Module = {
    id: 2,
    questions: M2Questions
}

const M3: Module = {
    id: 3,
    questions: M3Questions
}

export const allModules = [M1, M2, M3]