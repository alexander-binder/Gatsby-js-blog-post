import React from 'react'
import { AboutContainer, RightFeatureImage } from '../components/about';
import { AboutTextWrapper, ButtonWrapper} from '../elements/about';
import { Button, Header} from '../components';
import { P } from '../elements';


export default function About() {
  return (
    <AboutContainer>
       <AboutTextWrapper>
        <P fontFamily="code" size="xxSamll" color="lightGray" spacing="2px" weight="bold">COMMUNIQUEZ AVEC VOS CLIENTS</P>
        <h1>Créez et envoyez de superbes emails sans écrire une ligne de code</h1>
         <P size="large" color="lightGray">Découvrez notre plateforme facile à utiliser pour concevoir et envoyer vos campagnes d’email marketing, vos newsletters et vos emails automatisés. Que vous soyez un auto-entrepreneur ou que vous collaboriez en équipe, créez des courriels qui auront un impact sur vos clients et feront croître votre entreprise.</P>
         <ButtonWrapper>
          <Button>Commencer maintenant</Button>
          <Button>Contacter un expert</Button>
         </ButtonWrapper>
      </AboutTextWrapper>
<RightFeatureImage />

    </AboutContainer>
   
  );
}
