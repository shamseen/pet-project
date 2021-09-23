import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import "./Layout.css"
import logo from '../assets/logo.png'

export default function Layout(props) {
  const { user, handleLogout } = props;
  return (
    <>
      <div className='nav-header'>
        <div className='title-search'>
          <div className='website-name'>
            <Link exact to='/'><img className='website-logo' src={logo} alt='website logo' /></Link>
          </div>
          <div>
            <input value={props.searchInput} onChange={(e) => props.handleSearch(e.target.value)}
              className='nav-search'
              placeholder='WHAT PET ARE YOU LOOKING FOR?' />
              

          </div>
        </div>
        <div className='nav-links'>
          {user ? (
            <>
              <NavLink className='nav-button' to='/adopt'>ADOPT</NavLink>
              <NavLink className='nav-button' to='/about'>ABOUT</NavLink>
              <NavLink className='nav-profile' to={`/profile/${user.name}`}>{(user.name).toUpperCase()}</NavLink>
              <button className='nav-button' onClick={handleLogout}>LOGOUT</button>
              <NavLink className='nav-button work-with-button' to='/find-pet'>WORK WITH US</NavLink>

            </>
          ) : (
            <>
              <NavLink className='nav-button' to='/adopt'>ADOPT</NavLink>
              <NavLink className='nav-button' to='/about'>ABOUT</NavLink>
              <NavLink className='nav-button work-with-button' to='/find-pet'>WORK WITH US</NavLink>
            </>
          )}
        </div>
      </div>
      {props.children}
    </>
  )
}
