import React from "react";
import { AboutContainerWrapper } from "../../elements/about";
import { Header } from "../Header";

export const AboutContainer = ({ children }) => {
    return (
        <AboutContainerWrapper>
           <Header/>
            {children}
          
        </AboutContainerWrapper>
    );
}
