import styled from "styled-components";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { reachMetrikaGoal } from "../../utils/reachMetrikaGoal";
import { Button } from "./button";
import { ProgressBar } from "./progress-bar";
import { CommonTitle } from "./text";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    position: relative;
    z-index: 10;
    margin-top: ${({$ratio}) => $ratio * 334}px;
    padding: 0 ${({$ratio}) => $ratio * 20}px ${({$ratio}) => $ratio * 20}px; 
    flex-shrink: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-height: 700px) and (min-width: 320px) and (max-width: 450px) {
        margin-top: 89vw;
    }
`;

const TextBlock = styled.div`
    margin: ${({$ratio}) => $ratio * 20}px 0; 
    height: ${({$ratio}) => $ratio * 200}px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: ${({$ratio, $fontSize}) => $ratio * ($fontSize ?? 16)}px;
    border-radius: ${({$ratio}) => $ratio * 7}px;
    padding: ${({$ratio}) => $ratio * 10}px;
    background: ${({$isCorrect}) => $isCorrect ? '#30BDF7' : '#FF8F1C'};

    @media screen and (min-height: 700px) and (min-width: 320px) and (max-width: 450px) {
        margin: 8.3vw 0;
    }
`;

const Picture = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    height: ${({$height, $ratio}) => $height * $ratio}px;
    background: url(${({$src}) => $src}) no-repeat center 0 / cover;

    @media screen and (min-height: 800px) and (min-width: 320px) and (max-width: 450px) {
        height: ${({$height}) => 100 * 1.2 * $height / 375}vw;
    }
`;

export const PostQuestionWrapper = ({ question, isCorrect, pic, children}) => {
    const ratio = useSizeRatio();
    const { next } = useProgress();

    const { answerFont, correctAnswer, incorrectAnswer } = question;

    const handleNext = () => {
        reachMetrikaGoal(`level${question.id}`);
        next();
    }
    
    return (
        <Wrapper>
            <ProgressBar currentLevel={question.id}/>
            <Picture $ratio={ratio} $height={pic?.height} $src={pic?.src}/>
            {children}
            <Content $ratio={ratio}>
                <CommonTitle $ratio={ratio}>{isCorrect ? 'Верно!' : 'Не верно!'}</CommonTitle>
                <TextBlock $ratio={ratio} $fontSize={answerFont} $isCorrect={isCorrect}>
                    {isCorrect ? correctAnswer : incorrectAnswer}
                </TextBlock>
                <Button $ratio={ratio} onClick={handleNext}>Далее</Button>
            </Content>
        </Wrapper>
    )
}