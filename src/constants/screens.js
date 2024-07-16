import { Intro } from "../components/screens/intro";
import { PostQuestion1 } from "../components/screens/post-question1";
import { PostQuestion2 } from "../components/screens/post-question2";
import { PostQuestion3 } from "../components/screens/post-question3";
import { PostQuestion4 } from "../components/screens/post-question4";
import { PostQuestion5 } from "../components/screens/post-question5";
import { PostQuestion6 } from "../components/screens/post-question6";
import { Question1 } from "../components/screens/question1";
import { Question2 } from "../components/screens/question2";
import { Question3 } from "../components/screens/question3";
import { Question4 } from "../components/screens/question4";
import { Question5 } from "../components/screens/question5";
import { Question6 } from "../components/screens/question6";
import { Final } from "../components/screens/final";

import question1 from '../assets/images/question1.svg';
import question2 from '../assets/images/question2.svg';
import question3 from '../assets/images/question3.svg';
import question4 from '../assets/images/question4.svg';
import question5 from '../assets/images/question5.svg';
import question6 from '../assets/images/question6.svg';

import q1 from '../assets/images/q1_question.png';
import q2 from '../assets/images/q2.png';
import q3 from '../assets/images/q3_question.png';
import q4 from '../assets/images/q4.png';
import q5 from '../assets/images/q5_question.png';
import q6 from '../assets/images/q6_question.png';

import q1_cor from "../assets/images/q1_cor.png";
import q1_incor from "../assets/images/q1_incor.png";
import q3_cor from "../assets/images/q3_answer.png";
import q5_cor from "../assets/images/q5_answer.png";
import q6_cor from "../assets/images/q6_cor.png";
import q6_incor from "../assets/images/q6_incor.png";

export const screens = [
    {
        id: 0,
        component: Intro
    },
    {
        id: 1,
        component: Question1
    },
    {
        id: 2,
        component: PostQuestion1,
    },
    {
        id: 3,
        component: Question2
    },
    {
        id: 4,
        component: PostQuestion2,
    },
    {
        id: 5,
        component: Question3
    },
    {
        id: 6,
        component: PostQuestion3,
    },
    {
        id: 7,
        component: Question4
    },
    {
        id: 8,
        component: PostQuestion4,
    },
    {
        id: 9,
        component: Question5
    },
    {
        id: 10,
        component: PostQuestion5,
    },
    {
        id: 11,
        component: Question6
    },
    {
        id: 12,
        component: PostQuestion6,
    },
    {
        id: 13,
        component: Final
    },
];


export const preloadImages = [
    question1, q1, q1_cor, q1_incor, question2, q2, question3, q3, q3_cor,
    question4, q4, question5, q5, q5_cor, question6, q6, q6_cor, q6_incor,
];