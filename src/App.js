import { useState, useEffect } from 'react'
import { Route, useHistory, Switch } from 'react-router-dom'

import Layout from './layouts/Layout';
import {verify, signOut} from './services/user';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Landing from './views/Landing';

function App() {
  const [user, setUser] = useState(null)
  const history = useHistory()
  
  useEffect(() => {
    const verifyUser = async () => {
      const userData = await verify()
      setUser(userData)
    }
    verifyUser()
  }, [])

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
    signOut();
    history.push('/');
  };

  return (
    <div>
      <Layout
        user={user}
        setUser={setUser}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route path='/sign-up'>
            <SignUp setUser={setUser}/>
          </Route>
          <Route path='/login'>
            <Login setUser={setUser}/>
          </Route>
          <Route exact path='/'>
            <Landing />
          </Route>
        </Switch>
        {/* <Switch>
          <Route path='/'>
            <MainContainer user={user} />
          </Route>
        </Switch> */}
      </Layout>
    </div>
  );
}

export default App;