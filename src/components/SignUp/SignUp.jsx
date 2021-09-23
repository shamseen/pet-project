import { useState, useEffect } from 'react'
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import './SignUp.css'
import manDog from '../../assets/manDog.png'
import { signUp } from '../../services/user'

export default function SignUp(props) {
  const [open, setOpen] = React.useState(false);
  const [signUpData, setSignUpData] = useState({ name: "", email: "", password: "" });
  const { setUser } = props;

  const handleSubmit = async (e) => {
    const user = await signUp(signUpData);
    setUser(user);
  }

  const handleInput = (e) => {
    const { id, value } = e.target;
    setSignUpData((prevInput) => ({
      ...prevInput,
      [id]: value
    }))
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('timer')
      setOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog className='dialog' open={open} onClose={handleClose}>
        <div className='dialog-left-box'>
          <h1 className='modal-left-title'>Welcome to Purrposeful Paws</h1>
          <h2 className='modal-text'>Create an account and find your perfect match</h2>
          <img src={manDog} alt='man holding a dog' />
        </div>
        <div className='dialog-right-box'>
          <h1 className='modal-right-title'>Get Started</h1>
          <DialogContent>
            <div className='dialog-top'>
              <p>Already have an account?</p> <span className='sign-in-span'>Sign in</span>
            </div>
            <input
              className='dialog-input'
              margin="dense"
              id="name"
              label="Name"
              type="text"
              value={signUpData.name}
              placeholder="Name"
              autoComplete="off"
              onChange={handleInput}
            />
            <input
              className='dialog-input'
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              value={signUpData.email}
              placeholder="Email"
              autoComplete="off"
              onChange={handleInput}
            />
            <input
              className='dialog-input'
              margin="dense"
              id="password"
              label="Password"
              type="password"
              value={signUpData.password}
              placeholder="Password"
              autoComplete="off"
              onChange={handleInput}
            />
          </DialogContent>
          <div className='sign-up-buttons'>
            <button
              className='sign-up'
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(signUpData)
                handleClose()
              }}>SIGN UP</button>
            <button className='guest-skip' onClick={handleClose}>Continue as Guest</button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
