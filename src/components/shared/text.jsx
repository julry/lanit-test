import styled from "styled-components";

export const CommonText = styled.p`
    font-size: ${({$ratio}) => $ratio * 16}px;
`;

export const CommonTitle = styled.h3`
    font-weight: 700;
    font-size: ${({$ratio}) => $ratio * 26}px;
`;