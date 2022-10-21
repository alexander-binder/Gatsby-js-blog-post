import React from "react";
import { ContactForm, Label, Input, SubmitButton, SubmitButtonWrapper } from "../../elements/contact";



 export const Form = () => {
    return (
    <>
        <ContactForm>
            <Label>
                Prénom
                <Input type="text"  />
            </Label>

            <Label>
                Nom
                <Input type="text"  />
            </Label>


            <Label>
                Email professionnel*
                <Input type="text"  />
            </Label>

            <Label>
                Entreprise*
                <Input type="text"  />
            </Label>

            <Label>
                Pays*
                <Input type="text"  />
            </Label>
            <Label>
                Volume d'emails mensuel*
                <Input type="text"  />
            </Label>
            
            <SubmitButtonWrapper>
                <SubmitButton>Discutons-en</SubmitButton>
            </SubmitButtonWrapper>
          
        </ContactForm>
    </>
    );
}


