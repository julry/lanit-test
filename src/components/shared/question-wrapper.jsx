import styled from "styled-components";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Button } from "./button";
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

const QuestionBlock = styled.div`
    margin: ${({$ratio}) => $ratio * 20}px 0; 
    height: ${({$ratio}) => $ratio * 200}px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: ${({$ratio, $fontSize}) => $ratio * ($fontSize ?? 16)}px;
    border: 1px solid #FFFFFF;
    border-radius: ${({$ratio}) => $ratio * 7}px;
    padding: ${({$ratio}) => $ratio * 10}px;

    @media screen and (min-height: 700px) and (min-width: 320px) and (max-width: 450px) {
        margin: 8.3vw 0;
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
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

const Element = styled.div`
    position: absolute;
    top: ${({$top, $ratio}) => $top * $ratio}px;
    left: 0;
    right: 0;
    height: ${({$height, $ratio}) => $height * $ratio}px;
    z-index: 2;
    background: url(${({$src}) => $src}) no-repeat center 0 / cover;

    @media screen and (min-height: 800px) and (min-width: 320px) and (max-width: 450px) {
        height: ${({$height}) => 100 * 1.2 * $height / 375}vw;
        top: ${({$top}) => 100 * 1.2 * $top / 375}vw;
    }
`;

const ButtonStyled = styled(Button)`
    width: calc(100% - ${({$ratio}) => $ratio * 12}px / 2);

    & + & {
        margin-left: ${({$ratio}) => $ratio * 12}px;
    }
`;

export const QuestionWrapper = ({ question }) => {
    const ratio = useSizeRatio();
    const { answerQuestion, next } = useProgress();

    const { id, questionFont, svg = {}, pic = {} } = question;

    const handleAnswer = (isTrue) => {
        answerQuestion(isTrue === question.isTrue);
        next();
    }
    
    return (
        <Wrapper>
            <Picture $ratio={ratio} $height={pic.height} $src={pic.src}/>
            <Element $src={svg.src} $height={svg.height} $top={svg.top} $ratio={ratio}/>
            <Content $ratio={ratio}>
                <CommonTitle $ratio={ratio}>Уровень №{id}</CommonTitle>
                <QuestionBlock $ratio={ratio} $fontSize={questionFont}>
                    {question.text}
                </QuestionBlock>
                <ButtonsWrapper>
                    <ButtonStyled $ratio={ratio} onClick={() => handleAnswer(true)}>Правда</ButtonStyled>
                    <ButtonStyled $ratio={ratio} onClick={() => handleAnswer(false)} isAdditional>Ложь</ButtonStyled>
                </ButtonsWrapper>
            </Content>
        </Wrapper>
    )
}