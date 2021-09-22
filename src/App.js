import { useState, useEffect } from 'react'
import { Route, useHistory, Switch } from 'react-router-dom'

import Layout from './layouts/Layout';
import {verify, signOut} from './services/user';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Landing from './views/Landing';
import Results from './views/Results'

function App() {
  const [user, setUser] = useState(null)
  const [data,setData]=useState([]);
  const history = useHistory()
  
  const getData=()=>{
    fetch('mockData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

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
          <Route path='/results'>
            <Results mockData={data}/>
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