import styled from "styled-components";


export const AboutTextWrapper = styled.div`
  grid-area: 3 / 2 / auto / 6;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h1{
    color: white;
    line-height: 40px;
    margin-bottom: 24px;
  }

  & :nth-child(1){
    margin-bottom: 8px;
  }

  & :nth-child(3){
    margin-bottom: 40px;
    line-height: 32px;
    font-weight: 300;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

`;

