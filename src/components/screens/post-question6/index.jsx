import styled from "styled-components";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { getQuestionById } from "../../../utils/getQuestionById";
import { PostQuestionWrapper } from "../../shared/post-question-wrapper";
import truePic from "../../../assets/images/q6_cor.png";
import falsePic from "../../../assets/images/q6_incor.png";
import { ElementQ6 } from "./element";

const ElementStyled = styled(ElementQ6)`
    position: absolute;
    top: ${({$ratio}) => 278 * $ratio}px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 2;

    @media screen and (min-height: 800px) and (min-width: 320px) and (max-width: 450px) {
        top: 74.1vw;
    }
`;

export const PostQuestion6 = () => {
    const ratio = useSizeRatio();
    const { isLastCorrect } = useProgress();

    const pic = isLastCorrect ? {
        src: truePic,
        height: 357,
    } : {
        src: falsePic,
        height: 343,
    }

    return (
        <PostQuestionWrapper isCorrect={isLastCorrect} question={getQuestionById(6)} pic={pic}>
            <ElementStyled $ratio={ratio} isCorrect={isLastCorrect}/>
        </PostQuestionWrapper>
    )
}