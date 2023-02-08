import React from 'react';
import Nav from '../Nav/Nav';



function Layout({ children, location }) {


    return (
        <>
            <Nav className={`${location.pathname === '/home' ? 'nav-home' : ""} `} />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout