import styled from "styled-components";

export const FormWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr) ;
    grid-template-rows: repeat(4, 1fr);
       
`;


export const ContactForm = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr) ;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 4rem;
    grid-row-gap: 1rem;

    margin-top: 2rem;
       
`;

export const Label = styled.label`
    width: 100%;
    display: flex;
    flex-direction: column;

    color: #4e5d78 !important;
    font-family: "Roboto", sans-serif !important;
    font-size: 14px !important;
       
`;

export const Input = styled.input`
    font-size: 14px;
    height: 22px;
    padding: 8px 6px;
    width: 100%;

    background-color: #FFFFFF;
    border: solid 1px #E1E4E8;
    border-radius: 0px;
    color: #4E5D78 !important;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    padding: 5px 5px;
    font-weight: 400;
       
`;

export const SubmitButtonWrapper = styled.div`
    grid-column: 1/ span 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SubmitButton = styled.button`

    border-radius: 3px;
    background-color: #6F66D9;
    border: solid 0px #6F66D9;
    border-radius: 3px;
    color: #FFFFFF;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-right: 0 !important;
    padding: 12px 24px !important;
    cursor: pointer;

    grid-column: 1/ span 2;
`;










