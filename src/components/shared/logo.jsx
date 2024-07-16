import { useSizeRatio } from "../../contexts/SizeRatioContext";
import logo from '../../assets/images/logo.svg';
import styled from "styled-components";

const Wrapper = styled.div`
    width: ${({$ratio}) => $ratio * 131}px;
    height: ${({$ratio}) => $ratio * 30}px;
    background: url(${logo}) no-repeat 0 0 / cover;
`;


export const Logo = (props) => {
    const ratio = useSizeRatio();

    return <Wrapper {...props} $ratio={ratio} />
}