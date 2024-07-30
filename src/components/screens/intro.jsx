import styled from "styled-components";
import start from '../../assets/images/start.png';
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Button } from "../shared/button";
import { useProgress } from "../../contexts/ProgressContext";
import { Logo } from "../shared/logo";
import { reachMetrikaGoal } from "../../utils/reachMetrikaGoal";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${start}) no-repeat center 0 / cover;
    padding: ${({$ratio}) => $ratio * 40}px ${({$ratio}) => $ratio * 20}px;
`;

const TextWrapper = styled.div`
    padding: ${({$ratio}) => $ratio * 39}px 0 ${({$ratio}) => $ratio * 30}px;
`;

const Title = styled.h1`
    font-size: ${({$ratio}) => $ratio * 32}px;
    margin-bottom: ${({$ratio}) => $ratio * 15}px;
`;

const Text = styled.p`
    font-size: ${({$ratio}) => $ratio * 20}px;
`;

export const Intro = () => {
    const ratio = useSizeRatio();
    const { next } = useProgress();

    const handleNext = () => {
        reachMetrikaGoal('start');
        next();
    }

    return (
        <Wrapper $ratio={ratio}>
            <Logo />
            <TextWrapper $ratio={ratio}>
                <Title $ratio={ratio}>
                    Как много вы знаете о группе компаний ЛАНИТ?
                </Title>
                <Text $ratio={ratio}>
                    Сейчас проверим!{'\n'}
                    Угадайте, какие из собранных нами фактов о компании правда,{' '}
                    а какие — ложь, и узнайте больше о наших преимуществах!
                </Text>
            </TextWrapper>
            <Button onClick={handleNext}>Вперёд!</Button>
        </Wrapper>
    )
}