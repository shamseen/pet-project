import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Layout.css"

export default function Layout(props) {
  const { user, handleLogout } = props;
  return (
    <header>
      <div className='nav-header'>
        <div className='website-name'>
          <NavLink exact to='/'><h1>PURRPOSEFUL PAWS</h1></NavLink>
        </div>
        <div className='nav-links'>
          {user ? (
            <>
              <NavLink className='nav-button' to='/adopt'>ADOPT</NavLink>
              <NavLink className='nav-button' to='/about'>ABOUT</NavLink>
              <NavLink className='nav-profile' to={`/profile/${user.name}`}>{(user.name).toUpperCase()}</NavLink>
              <button className='nav-button' onClick={handleLogout}>LOGOUT</button>

            </>
          ) : (
            <>
              <NavLink className='nav-button' to='/adopt'>ADOPT</NavLink>
              <NavLink className='nav-button' to='/about'>ABOUT</NavLink>
              <NavLink className='nav-button' to='/login'>LOGIN</NavLink>
              <NavLink className='nav-button' to='/sign-up'>SIGN UP</NavLink>
            </>
          )}
        </div>
      </div>
      {props.children}
    </header>
  )
}
