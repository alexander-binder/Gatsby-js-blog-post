import React from "react";
import { PaginationWrapper, PaginationLink } from "../elements";



export const Pagination = ({isFirst, isLast, prevPage, nextPage}) => {
    return (
        <PaginationWrapper isFirst={isFirst} isLast={isLast}>
            <PaginationLink to={prevPage} >Previous Page</PaginationLink> 
            <PaginationLink to={nextPage} >Next Page</PaginationLink> 
        </PaginationWrapper>
    );
}

