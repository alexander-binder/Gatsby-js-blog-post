import React from 'react'
import Navbar from './Navbar'

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <div className='layout'>

        <div className='content'>
                {children}
        </div>
        <footer>
          <p> Copyright by Alexander Binder</p>
        </footer>
      </div>
    </>
  )
}
