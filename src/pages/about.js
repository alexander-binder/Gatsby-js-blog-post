import React from 'react'
import { AboutContainer, RightFeatureImage } from '../components/about';
import { AboutTextWrapper, ButtonWrapper, PWrapper} from '../elements/about';
import { Button } from '../components';
import { P, Button2, MainWrapper} from '../elements';
import { ContactContainerWrapper, TopWrapper, BottomWrapper, TopTextWrapper } from '../elements/contact';


export default function About() {
  return (
    <MainWrapper>
      <AboutContainer>
        <AboutTextWrapper>
          <P fontFamily="code" size="xxSamll" color="lightGray" spacing="2px" weight="bold">COMMUNIQUEZ AVEC VOS CLIENTS</P>
          <h1>Créez et envoyez de superbes emails sans écrire une ligne de code</h1>
          <P size="large" color="lightGray">Découvrez notre plateforme facile à utiliser pour concevoir et envoyer vos campagnes d’email marketing, vos newsletters et vos emails automatisés. Que vous soyez un auto-entrepreneur ou que vous collaboriez en équipe, créez des courriels qui auront un impact sur vos clients et feront croître votre entreprise.</P>
          <ButtonWrapper>
            <Button2>Commencer maintenant</Button2>
            <Button2 border="2px solid white" color="rgb(5, 68, 81)">Contacter un expert</Button2>
          </ButtonWrapper>
        </AboutTextWrapper>
        <RightFeatureImage />
        <PWrapper>
            <P color="lightGray2" size="xSamll">Plus de 40 000 entreprises développent des applications et des stratégies emailing réussies avec Mailjet.</P>
        </PWrapper>
      </AboutContainer>

      <ContactContainerWrapper>
        <TopWrapper>
            <TopTextWrapper>
                <P fontFamily="code" size="xSamll" color="lightGray" spacing="2px" weight="bold">UN BESOIN COMMERCIAL ? CONTACTEZ-NOUS</P>
                <h1>Contacter notre équipe commerciale</h1>
                <P color="lightGray2" size="xLarge" spacing="2px" weight="normal">Notre équipe est à votre disposition pour trouver la solution qui vous convient, discuter des différentes options de fonctionnalités et de prix, et vous fournir les informations dont vous avez besoin.</P>
              </TopTextWrapper>
        </TopWrapper>
        <BottomWrapper></BottomWrapper>
      </ContactContainerWrapper>
    </MainWrapper>
  );
}
