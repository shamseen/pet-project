import { useState } from 'react'

export default function LandingForm() {
  const [clickedDog, setClickedDog] = useState(false)
  const [clickedCat, setClickedCat] = useState(false)

  const isClickedDog = (e) => {
    e.preventDefault()
    setClickedDog(!clickedDog)
  }

  const isClickedCat = (e) => {
    e.preventDefault()
    setClickedCat(!clickedCat)
  }

  const notClickedCat = clickedCat ? true : false
  const notClickedDog = clickedDog ? true : false

  // const handleSubmit = () => {

  // }
  return (
    <>

      <form onSubmit>
        <p className='form-top-text'>I'm looking for</p>
        <button onClick={isClickedDog} disabled={notClickedCat} className={`dog-cat-button ${clickedDog ? 'clickedDog' : ''}`}>DOGS</button>
        <button onClick={isClickedCat} disabled={notClickedDog} className={`dog-cat-button ${clickedCat ? 'clickedCat' : ''}`}>CATS</button>

        <div className='landing-form-input-container'>
          <div className='landing-form-inputs'>
            <div className='landing-form-text'>
              <label>Location</label>
            </div>
            <div>
              <input
                className='form-input'
                placeholder='Address or Zip Code'
              />
            </div>
          </div>


          <div className='landing-form-inputs'>
            <div className='landing-form-text'>
              <label>Age</label>
            </div>
            <div>
              <select className='form-input' name='age' defaultValue='default'>
                <option
                  disabled
                  value='default'
                >Any</option>
                <option></option>
              </select>
            </div>
          </div>

          <div className='landing-form-inputs'>
            <div className='landing-form-text'>
              <label>Breed</label>
            </div>
            <div>
              <select className='form-input' name='breed' defaultValue='default'>
                <option
                  disabled
                  value='default'
                >Any</option>
                <option></option>
              </select>
            </div>
          </div>

          <button className='landing-button-search'>search</button>
        </div>
      </form>
    </>
  )
}
