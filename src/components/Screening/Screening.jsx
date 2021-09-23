// import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import '../../components/SignUp/SignUp.css'
import './Screening.css'

export default function Sreening(props) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className='landing-button' onClick={handleClickOpen}>
        FIND YOUR PERFECT MATCH
      </button>
      <Dialog className='dialog' open={open} onClose={handleClose}>
        <div className='dialog-left-box'>
          <h1 className='modal-left-title'>How it works</h1>
          <ol className='ol-screen'>
            <li className='form-list'><div><>Fill out a 60 sec screener</>
              <p>Tell us about yourself and the pet you’re looking for</p>
            </div>
            </li>
            <li className='form-list'><div><>Get matched with your future pet</>
              <p>We’ll match you with your ideal pet according to your screener </p>
            </div>
            </li>
            <li className='form-list'><div><>Take your purrposeful pal home</>
              <p>We’ll guide you to the shelter or organization that will help you take your new pet home.</p>
            </div>
            </li>
          </ol>
        </div>
        <div className='dialog-right-box'>
          <h1 className='modal-right-title'>Find your perfect match</h1>
          <DialogContent>
            <div className='dialog-top'>
              <p>To help you find your perfect match, tell us about yourself and the pet you’re looking for. Not sure for now? skip and go back later.
              </p>
            </div>
            <input
              className='dialog-input'
              margin="dense"
              id="location"
              label="Location"
              type="text"
              // value={form.name}
              placeholder="Location"
              autoComplete="off"
            // onChange={handleInput}
            />
            <input
              className='dialog-input'
              margin="dense"
              id="desired-pet"
              label="Desired Pet"
              type="text"
              // value={form.email}
              placeholder="Desired Pet"
              autoComplete="off"
            // onChange={handleInput}
            />
            <input
              className='dialog-input'
              margin="dense"
              id="breed"
              label="Breed"
              type="text"
              // value={form.password}
              placeholder="Breed"
              autoComplete="off"
            // onChange={handleInput}
            />
          </DialogContent>
          <div className='sign-up-buttons'>
            <button
              className='sign-up'
              onClick={handleClose}>CONTINUE</button>
            <button className='guest-skip' onClick={handleClose}>Skip</button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
