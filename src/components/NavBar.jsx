import React from 'react'

function NavBar() {
    const NavItems=[
    {
        name: 'Home',
        path:'/'
    },
    {
        name: 'About',
        path:'/about'
    },
    {
        name: 'Products',
        path:'/products'
    },
    {
        name: 'Services',
        path:'/services'
    },
    {
        name: 'Sign Up',
        path:'/sign-up'
    },
    {
        name: 'Contact',
        path:'/contact'
    }
    ]
  return (
    <nav>
        <h1>main navigation</h1>
        <ul className='flex'>
           {NavItems.map((item) => (
             <li className='navLink' key={item.name}><a href={item.path}>{item.name}</a></li>
           ))} 
            
        </ul>
    </nav>
  )
}

export default NavBar