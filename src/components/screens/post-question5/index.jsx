import styled from "styled-components";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { getQuestionById } from "../../../utils/getQuestionById";
import { PostQuestionWrapper } from "../../shared/post-question-wrapper";
import pic5 from "../../../assets/images/q5_answer.png";
import { ElementQ5} from "./element";

const ElementStyled = styled(ElementQ5)`
    position: absolute;
    top: ${({$ratio}) => 133 * $ratio}px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 2;

    @media screen and (min-height: 800px) and (min-width: 320px) and (max-width: 450px) {
        top: 35.46vw;
    }
`;

export const PostQuestion5 = () => {
    const ratio = useSizeRatio();
    const { isLastCorrect } = useProgress();

    const pic = {
        src: pic5,
        height: 357,
    } 

    return (
        <PostQuestionWrapper isCorrect={isLastCorrect} question={getQuestionById(5)} pic={pic}>
            <ElementStyled $ratio={ratio} isCorrect={isLastCorrect}/>
        </PostQuestionWrapper>
    )
}