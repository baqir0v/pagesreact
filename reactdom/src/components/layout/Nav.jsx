import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <nav>
        <Link to="/"><button>home</button></Link>
        <Link to="/about"><button>about</button></Link>
        <Link to="/contact"><button>contact</button></Link>
        <Link to="/login"><button>login</button></Link>
    </nav>
    <Outlet/>


    </>

  ) 
}

export default Layout