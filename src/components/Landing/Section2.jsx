import React from 'react'
import './Section2.css'
import boyDog from '../../assets/boyDog.png'
import ladyDog from '../../assets/ladyDog.png'

export default function Section2() {
  return (
    <div className='section2-container'>
      <div className='section2-boxes-container'>
        <div className='box-one'>
          <div className="image-one-outline"></div>
          <div className='image-one-box'>
            <img className='section2-image-one' src={boyDog} alt='boy with dog' />
          </div>
          <div className="image-two-outline"></div>
          <div className='image-two-box'>
            <img className='section2-image-two' src={ladyDog} alt='lady with dog' />
          </div>
        </div>
        <div className='box-two'>
          <h1 className="box-two-title">How it works</h1>
          <ol>
            <li className="box-two-list"><div><h2 className='list-title'>Fill out a 60 sec screener</h2>
              <p className='list-text'>Tell us about yourself and the pet you’re looking for</p>
            </div>
            </li>
            <li className="box-two-list"><div><h2 className='list-title'>Get matched with your future pet</h2>
              <p className='list-text'>We’ll match you with your ideal pet according to your screener </p>
            </div>
            </li>
            <li className="box-two-list"><div><h2 className='list-title'>Take your purrposeful pal home</h2>
              <p className='list-text'>We’ll guide you to the shelter or organization that will help you take your new pet home.</p>
            </div>
            </li>
          </ol>
          <button className='section2-button'>FIND YOUR PERFECT MATCH</button>
        </div>
      </div>
      <div className='box-three'>
        <div className='box-three-left'>
          <h1 className='box-three-title'>Our Philosphy</h1>
          <p>Animals that are elderly, have disabilities, or are less desireable for any
            reason are deserving of a loving home.We seek out families willing to give
            their pets the extra care they need to succeed.</p>
        </div>
        <div className='box-three-right'>
          <h2>Animals with varying needs: </h2>
          <ul>
            <li className="box-three-list">Don't feel sorry for themselves, we do it for them
            </li>
            <li className="box-three-list">Don't know that their needs are greater than normal</li>
            <li className="box-three-list">Are accepting of what life has to offer
            </li>
            <li className="box-three-list">Have more patience than we'll ever have in the same situation
            </li>
            <li className="box-three-list">Don't worry if we love them, they know we do
            </li>
            <li className="box-three-list">Do worry if we'll take care of their needs - and shouldn't have to
            </li>
            <li className="box-three-list">Are not a burden, but a reason to slow down our own hectic lives
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
