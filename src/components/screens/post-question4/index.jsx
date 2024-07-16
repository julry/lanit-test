import styled from "styled-components";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { getQuestionById } from "../../../utils/getQuestionById";
import { PostQuestionWrapper } from "../../shared/post-question-wrapper";
import pic4 from "../../../assets/images/q4.png";
import { ElementQ4 } from "./element";

const ElementStyled = styled(ElementQ4)`
    position: absolute;
    top: ${({$ratio}) => 284 * $ratio}px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 2;

    @media screen and (min-height: 800px) and (min-width: 320px) and (max-width: 450px) {
        top: 75.7vw;
    }
`;

export const PostQuestion4 = () => {
    const ratio = useSizeRatio();
    const { isLastCorrect } = useProgress();

    const pic = {
        src: pic4,
        height: 374,
    } 

    return (
        <PostQuestionWrapper isCorrect={isLastCorrect} question={getQuestionById(4)} pic={pic}>
            <ElementStyled $ratio={ratio} isCorrect={isLastCorrect}/>
        </PostQuestionWrapper>
    )
}