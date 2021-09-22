import { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import './App.css';

import Layout from './layouts/Layout';
import {verify, signOut} from './services/user';

function App() {
  const [user, setUser] = useState(null)
  const history = useHistory()
  
  useEffect(() => {
    const verifyUser = async() => {
      setUser(await verify())
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
    <div className="App">
      <Layout
        user={user}
        setUser={setUser}
        handleLogout={handleLogout}
      >
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