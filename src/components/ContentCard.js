import React from "react";
import { CardWrapper, P, H2 } from "../elements";
import { Button } from "../components";


export const ContentCard = ({ date, title, content, slug }) => {
    return (
        <CardWrapper>
            <P size="xSmall" textAlign="center" margin="0 0 0.5 0" color="dark2" >
                {date}
            </P>
            <H2 textAlign="center" margin="0 0 1rem 0" >
                {title}
            </H2>

            <P size="small" textAlign="center" margin="0 0 1.5rem 0" color="dark2" >
                {content}
            </P>
            <Button href={slug}>Read More</Button>
        </CardWrapper>
    );
}

