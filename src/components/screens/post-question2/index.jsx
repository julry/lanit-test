import styled from "styled-components";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { getQuestionById } from "../../../utils/getQuestionById";
import { PostQuestionWrapper } from "../../shared/post-question-wrapper";
import pic2 from "../../../assets/images/q2.png";
import { ElementQ2 } from "./element";

const ElementStyled = styled(ElementQ2)`
    position: absolute;
    top: ${({$ratio}) => 248 * $ratio}px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 2;

    @media screen and (min-height: 800px) and (min-width: 320px) and (max-width: 450px) {
        top: 66.1vw;
    }
`;

export const PostQuestion2 = () => {
    const ratio = useSizeRatio();
    const { isLastCorrect } = useProgress();

    const pic = {
        src: pic2,
        height: 330,
    } 

    return (
        <PostQuestionWrapper isCorrect={isLastCorrect} question={getQuestionById(2)} pic={pic}>
            <ElementStyled $ratio={ratio} isCorrect={isLastCorrect}/>
        </PostQuestionWrapper>
    )
}