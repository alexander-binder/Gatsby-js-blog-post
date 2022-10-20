import styled from "styled-components";


export const P = styled.p`
    margin: ${props => props.margin ? props.margin : 0 };

    letter-spacing: ${props => props.spacing ? props.spacing : 0 };

    font-family: ${props => {
        switch (props.fontFamily) {
            case "code":
                return props.theme.fonts.code
            case "main":
                return props.theme.fonts.main
            default:
                return props.theme.fonts.main
        }
    }};

    font-size: ${props => {
        switch (props.size) {
            case "large":
                return "22px"
            case "xLarge":
                return "28px"
            case "medium":
                return "1.125rem"
            case "small":
                return "1rem"
            case "xSamll":
                return "0.875rem"
            case "xxSamll":
                return "12px"
            default:
                return "1.125rem"
        }
    }};

    line-height: ${props => {
        switch (props.size) {
            case "medium":
                return "1.4375rem"
            case "small":
                return "1.375rem"
            case "xSamll":
                return "1.125rem"
            default:
                return "1.4375rem"
        }
    }};
    
    text-decoration: ${props => props.textDecoration ? props.textDecoration : "none" };

    font-weight: ${props => {
        switch (props.weight) {
            case "normal":
                return 400
            case "bold":
                return 700
            default:
                return 400
        }
    }};

    color: ${props => {
        switch (props.color) {
            case "dark1":
                return props.theme.color.dark1
            case "dark2":
                return props.theme.color.dark2
            case "dark3":
                return props.theme.color.dark3
            case "light1":
                return props.theme.color.light1
            case "light2":
                return props.theme.color.light2
            case "lightGray":
                return props.theme.color.lightGray
            case "lightGray2":
                return props.theme.color.lightGray2
            default:
                return props.theme.color.dark1
        }
    }};

    text-align: ${props => props.textAlign ? props.textAlign : "left" };  
    
`;


export const H1 = styled.h1`

    font-size: 2.25rem;
    line-height: 2.5;

    color: ${props => {
        switch (props.color) {
            case "dark1":
                return props.theme.color.dark1
            case "dark2":
                return props.theme.color.dark2
            case "dark3":
                return props.theme.color.dark3
            case "light1":
                return props.theme.color.light1
            case "light2":
                return props.theme.color.light2
            default:
                return props.theme.color.dark1
        }
    }};

    font-weight: 400;
    text-align: ${props => props.textAlign ? props.textAlign : "left" };
    margin: ${props => props.margin ? props.margin : 0 };
`;


export const H2 = styled.h2`

    font-size: 1.5rem;
    line-height: 1.875;

    color: ${props => {
        switch (props.color) {
            case "dark1":
                return props.theme.color.dark1
            case "dark2":
                return props.theme.color.dark2
            case "dark3":
                return props.theme.color.dark3
            case "light1":
                return props.theme.color.light1
            case "light2":
                return props.theme.color.light2
            default:
                return props.theme.color.dark1
        }
    }};

    font-weight: 400;
    text-align: ${props => props.textAlign ? props.textAlign : "left" };
    margin: ${props => props.margin ? props.margin : 0 };
`;