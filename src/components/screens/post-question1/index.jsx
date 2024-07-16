import styled from "styled-components";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { getQuestionById } from "../../../utils/getQuestionById";
import { PostQuestionWrapper } from "../../shared/post-question-wrapper";
import truePic from "../../../assets/images/q1_cor.png";
import falsePic from "../../../assets/images/q1_incor.png";
import { ElementQ1 } from "./element";

const ElementStyled = styled(ElementQ1)`
    position: absolute;
    top: ${({$ratio}) => 230 * $ratio}px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 2;

    @media screen and (min-height: 800px) and (min-width: 320px) and (max-width: 450px) {
        top: 73.6vw;
    }
`;

export const PostQuestion1 = () => {
    const ratio = useSizeRatio();
    const { isLastCorrect } = useProgress();

    const pic = isLastCorrect ? {
        src: truePic,
        height: 349,
    } : {
        src: falsePic,
        height: 349,
    }

    return (
        <PostQuestionWrapper isCorrect={isLastCorrect} question={getQuestionById(1)} pic={pic}>
            <ElementStyled $ratio={ratio} isCorrect={isLastCorrect}/>
        </PostQuestionWrapper>
    )
}