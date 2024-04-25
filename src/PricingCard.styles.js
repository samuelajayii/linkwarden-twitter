import styled from "styled-components";

export const StyledPricingCards = styled.div`
    border: 0.1px solid #928181;
    border-radius: 20px;
    padding: 35px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: ${(props) => props.bg === 'gradient' ? '87vh' : '70vh'};
    background: rgb(255, 255, 255);
    background: ${(props) => props.bg === 'gradient' ? 'linear-gradient(126deg, rgba(255, 255, 255, 0.14) 1%, rgb(0, 0, 0) 40%, rgba(255, 255, 255, 0.14) 100%)' : 'none'};
    
`