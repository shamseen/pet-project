import React from 'react'
import './Section3.css'
import couple from '../../assets/couple.png'

export default function Section3() {
  return (
    <div className='section3-container'>
      <div className='section3-boxes-container'>
        <div className='section3-box-left'>
          <h1 className='section3-box-left-title'>Purrposeful Paws Stories</h1>
          <blockquote className='section3-box-left-text'>"Oreo is a Special needs Cat since he had to have his leg removed
            prior to Adoption. His story melted my heart and, I knew that I
            could give him a great home. He is so normal that sometimes I
            forget that he has a disability. He seems very happy and content
            and, loves to cuddle while purring the whole time. We are the Family that Oreo needed."
            <button className='quote-button'>READ MORE</button>
          </blockquote>
        </div>
        <div className='section3-box-right'>
          <img className='section3-box-right-img' src={couple} alt='two people holding a cat' />
        </div>
      </div>
    </div>
  )
}
