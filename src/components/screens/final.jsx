import styled from "styled-components";
import final from '../../assets/images/final.png';
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Button } from "../shared/button";
import { useProgress } from "../../contexts/ProgressContext";
import { Logo } from "../shared/logo";
import { reachMetrikaGoal } from "../../utils/reachMetrikaGoal";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${final}) no-repeat center 0 / cover;
    padding: ${({$ratio}) => $ratio * 40}px ${({$ratio}) => $ratio * 20}px;
`;

const TextWrapper = styled.div`
    padding: ${({$ratio}) => $ratio * 39}px 0 ${({$ratio}) => $ratio * 20}px;
`;

const Title = styled.h3`
    font-size: ${({$ratio}) => $ratio * 32}px;
    margin-bottom: ${({$ratio}) => $ratio * 15}px;
`;

const SubTitle = styled.h4`
    font-size: ${({$ratio}) => $ratio * 24}px;
    margin-bottom: ${({$ratio}) => $ratio * 20}px;
`;

const Divider = styled.div`
    width: ${({$ratio}) => $ratio * 173}px;
    height: ${({$ratio}) => $ratio * 20}px;
    border-radius: ${({$ratio}) => $ratio * 100}px;
    background: #FF901F;
    margin: ${({$ratio}) => $ratio * 20}px 0;
`;


const Text = styled.p`
    font-size: ${({$ratio}) => $ratio * 20}px;
`;

export const Final = () => {
    const ratio = useSizeRatio();
    const { points } = useProgress();

    const handleOpen = () => {
        reachMetrikaGoal('calendar');
        window.open('https://advent.lanit.ru/', '_blank');
    }

    return (
        <Wrapper $ratio={ratio}>
            <Logo />
            <TextWrapper $ratio={ratio}>
                <Title $ratio={ratio}>
                    Ваш результат: {points ?? 0}/6
                </Title>
                <Divider $ratio={ratio}/>
                <SubTitle $ratio={ratio}>
                    Ура! Теперь вы знаете больше о ЛАНИТ:)
                </SubTitle>
                <Text $ratio={ratio}>
                    Переходите к нашему адвент&#8209;календарю и погружайтесь в новые открытия!
                </Text>
            </TextWrapper>
            <Button onClick={handleOpen}>Перейти!</Button>
        </Wrapper>
    )
}