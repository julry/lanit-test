import { getQuestionById } from "../../utils/getQuestionById";
import { QuestionWrapper } from "../shared/question-wrapper";

export const Question2 = () => <QuestionWrapper question={getQuestionById(2)}/>