import { questions } from "../constants/questions"

export const getQuestionById = (questionId) => {
    return questions?.find(({id}) => id === questionId) ?? {};
}