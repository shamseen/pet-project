import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { signUp } from '../services/user'

export default function SignUp(props) {
  const [signUpData, setSignUpData] = useState({ name: "", email: "", password: "" });
  const { setUser } = props;
  const history = useHistory();

  const handleSubmit = async (e) => {
    const user = await signUp(signUpData);
    setUser(user);
    history.push("/");
  }

  const handleInput = (e) => {
    const { id, value } = e.target;
    setSignUpData((prevInput) => ({
      ...prevInput,
      [id]: value
    }))
  };
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(signUpData)
      }}>
        <label>Name</label>
        <input
          id="name"
          type="text"
          value={signUpData.name}
          onChange={handleInput}
        />
        <label>Email</label>
        <input
          id="email"
          type="email"
          value={signUpData.email}
          onChange={handleInput}
        />
        <label>Password</label>
        <input
          id="password"
          type="password"
          value={signUpData.password}
          onChange={handleInput}
        />
        <button>Sign Up</button>
      </form>
    </>
  )
}
