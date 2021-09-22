import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Layout(props) {
  const { user, handleLogout } = props;
  return (
    <header>
      <div className='nav-header'>
        <div className='website-name'>
          <NavLink exact to='/'><h1>PURRPOSEFUL PAWS</h1></NavLink>
        </div>
        <div className='nav-links'>
          {user && (
            <>

            </>
          )}
          {user ? (
            <>
              <NavLink className='nav-button' to='/adopt'>ADOPT</NavLink>
              <NavLink className='nav-button' to='/about'>ABOUT</NavLink>
              <NavLink className='nav-profile' to={`/profile/${user.name}`}></NavLink>
              <button className='nav-button' onClick={handleLogout}>LOGOUT</button>

            </>
          ) : (
            <>
              <NavLink className='nav-button' to='/adopt'>ADOPT</NavLink>
              <NavLink className='nav-button' to='/about'>ABOUT</NavLink>
              <NavLink className='nav-button' to='/adopt'>SIGN UP</NavLink>
              <NavLink className='nav-button' to='/about'>LOGOUT</NavLink>
            </>
          )}
        </div>
      </div>

      {props.children}
    </header>
  )
}
