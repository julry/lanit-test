import styled from "styled-components";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { getQuestionById } from "../../../utils/getQuestionById";
import { PostQuestionWrapper } from "../../shared/post-question-wrapper";
import pic3 from "../../../assets/images/q3_answer.png";
import { ElementQ3 } from "./element";

const ElementStyled = styled(ElementQ3)`
    position: absolute;
    top: ${({$ratio}) => 282 * $ratio}px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 2;

    @media screen and (min-height: 800px) and (min-width: 320px) and (max-width: 450px) {
        top: 75.2vw;
    }
`;

export const PostQuestion3 = () => {
    const ratio = useSizeRatio();
    const { isLastCorrect } = useProgress();

    const pic = {
        src: pic3,
        height: 361,
    } 

    return (
        <PostQuestionWrapper isCorrect={isLastCorrect} question={getQuestionById(3)} pic={pic}>
            <ElementStyled $ratio={ratio} isCorrect={isLastCorrect}/>
        </PostQuestionWrapper>
    )
}