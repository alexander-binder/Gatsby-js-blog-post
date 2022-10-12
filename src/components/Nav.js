import React from 'react'
import { NavWrapper } from '../elements'
import {useStaticQuery, Link, graphql } from 'gatsby'

export const Nav = () => {

  const data = useStaticQuery(graphql`
      query {
        logo: file(relativePath: { eq: "logo.png"}){
          publicURL
        }
      }
  `);

  return (
    <NavWrapper>
     
        <div className='liks'>
            <Link to='/'>
              <img src={data.logo.publicURL} alt="My logo" />
            </Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
        </div>
    </NavWrapper>
    
  )
}


