import styled from "styled-components";


export const AboutTextWrapper = styled.div`
  grid-area: 1 / 3 / auto / 7;
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

  @media ${props => props.theme.breakpoints.mobile} {
    grid-area: 2 / 2 / auto / 9;
    
    & h1{
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 14px;
    }

    & :nth-child(3){
    font-size: 18px;
    margin-bottom: 20px;
    line-height: 24px;
    font-weight: 300;
  }
  }

`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${props => props.theme.breakpoints.tablet} {
        flex-wrap: wrap;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    flex-wrap: nowrap;
    grid-column: 1/ span 7;
    width: 100%;
  }
`;


export const PWrapper = styled.div`
    grid-area: 2 / 5 / auto / 11;
    
    @media ${props => props.theme.breakpoints.mobile} {
      grid-area: 3 / 2 / auto / 9;
      margin-top: 2rem;
  }

`;
