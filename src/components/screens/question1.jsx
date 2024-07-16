import { getQuestionById } from "../../utils/getQuestionById";
import { QuestionWrapper } from "../shared/question-wrapper";

export const Question1 = () => <QuestionWrapper question={getQuestionById(1)}/>