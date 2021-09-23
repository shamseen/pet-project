import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './SignUp.css'
import manDog from '../../assets/manDog.png'

export default function SignUp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className='nav-button' onClick={handleClickOpen}>
        SIGN UP
      </button>
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
              fullWidth
              variant="standard"
              placeholder="Name"
            />
            <input
              className='dialog-input'
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              placeholder="Email"
              autoComplete="off"
            />
            <input
              className='dialog-input'
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              placeholder="Password"
              autoComplete="off"
            />
          </DialogContent>
          <div className='sign-up-buttons'>
            <button className='sign-up' onClick={handleClose}>SIGN UP</button>
            <button className='guest' onClick={handleClose}>Continue as Guest</button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
