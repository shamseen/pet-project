import React from 'react'
import './Landing.css'
import dogLarge from '../assets/dogLarge.png'
import dogSmall from '../assets/dogSmall.png'
import LandingForm from './LandingForm'

export default function Landing() {

  return (
    <div className='landing-container'>
      <div className='landing-text-container'>
        <div className='landing-text'>
          <h1 className='landing-main-text'>Animals that need you most</h1>
          <h2 className='landing-sub-text'>We’re changing the way the world sees and treats unwanted animals.</h2>
          <h2 className='landing-sub-text'>We specialize in giving animals that have <span>special needs</span> or that are in their <span>senior
            years</span> a chance at a loving home. Be our dogs and cats fur-ever home today.</h2>
          <button className='landing-button'>FIND YOUR PERFECT MATCH</button>
        </div>
        <div className='landing-image-container'>
          <img className='landing-image-large' src={dogLarge} alt='dogs sitting on and in front of a couch' />
          <img className='landing-image-small' src={dogSmall} alt='person holding dog' />
        </div>
      </div>
      <div className='landing-bottom-container'>
        <LandingForm />
      </div>
    </div>
  )
}
