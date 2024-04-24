import styled from "styled-components";

export const BoxStyles = styled.div`
    width: 260px;
    height: 140px;
    background: ${(props) => props.bg === 'gradient' ? 'linear-gradient(70deg , rgba(58, 0, 161, 1) 40%, rgba(103, 58, 183, 1))' : 'none'};
    border: ${(props) => props.bg === 'gradient' ? 'none' : '2px solid #38353d'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    gap: 5px;
`