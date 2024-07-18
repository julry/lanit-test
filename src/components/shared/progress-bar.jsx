import styled from "styled-components";
import { useSizeRatio } from "../../contexts/SizeRatioContext";

const Wrapper = styled.div`
    position: absolute;
    top: ${({$ratio}) => $ratio * 20}px;
    left: ${({$ratio}) => $ratio * 20}px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 100;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: ${({$ratio}) => $ratio * 15}px;
    height: ${({$ratio}) => $ratio * 15}px;
    background: ${({$isActive}) => $isActive ? '#FC8F1F' : '#30BDF7'};
    & + & {
        margin-left: ${({$ratio}) => $ratio * 6}px;
    }
`;


export const ProgressBar = ({currentLevel}) => {
    const ratio = useSizeRatio();
    const levels = Array.from({length: 6}, (_, i) => i);

    return (
        <Wrapper $ratio={ratio}>
            {levels.map(level => (
                <Circle key={`level_${level}`} $ratio={ratio} $isActive={level < currentLevel} />
            ))}
        </Wrapper>
    )
}