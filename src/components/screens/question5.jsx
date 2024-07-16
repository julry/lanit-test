import { getQuestionById } from "../../utils/getQuestionById";
import { QuestionWrapper } from "../shared/question-wrapper";

export const Question5 = () => <QuestionWrapper question={getQuestionById(5)}/>