import styled from 'styled-components';
import { useSizeRatio } from '../../contexts/SizeRatioContext';

const Wrapper = styled.button`
    outline: none;
    border: none;
    padding: ${({$ratio}) => $ratio * 12}px 0 ${({$ratio}) => $ratio * 14}px;
    border-radius: ${({$ratio}) => $ratio * 12}px;
    font-weight: 700;
    background-color: ${({ $isAdditional }) =>  $isAdditional ? '#FF8F1C' : '#FFFFFF'};
    width: 100%;
    font-size: ${({$ratio}) => $ratio * 18}px;
    color:  ${({ $isAdditional }) =>  $isAdditional ? '#FFFFFF' : '#009EDE'};
    cursor: pointer;
`;

export const Button = ({isAdditional, ...props}) => {
    const ratio = useSizeRatio();

    return <Wrapper {...props} $isAdditional={isAdditional} $ratio={ratio} />
}
