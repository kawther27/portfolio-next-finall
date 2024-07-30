
import React, { Children } from 'react'
import HeaderClient from './HeaderClient';
import Footer from './Footer'
function Layout({children}) {
  return (
     <div className="d-flex flex-column min-vh-100">
       <HeaderClient />
        <main className="flex-grow-1">
         {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout

