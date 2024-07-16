import { getQuestionById } from "../../utils/getQuestionById";
import { QuestionWrapper } from "../shared/question-wrapper";

export const Question3 = () => <QuestionWrapper question={getQuestionById(3)}/>