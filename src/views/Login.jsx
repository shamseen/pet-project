import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { signIn } from '../services/user'

export default function Login(props) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { setUser } = props;
  const history = useHistory();

  const handleSubmit = async (signInData) => {
    const user = await signIn(signInData);
    setUser(user);
    history.push("/");
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevInput) => ({
      ...prevInput,
      [id]: value
    }))
  };
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData)
      }}>
        <label>Email</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>Sign In</button>
      </form>
    </>
  )
}
