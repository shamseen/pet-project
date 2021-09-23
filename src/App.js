import { useState, useEffect } from 'react'
import { Route, useHistory, Switch } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';

import Layout from './layouts/Layout';
import {verify, signOut} from './services/user';
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
    <>
      <Layout
        user={user}
        setUser={setUser}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/results'>
            <Results mockData={data}/>
          </Route>
        </Switch>
        <SignUp />
        {/* <Switch>
          <Route path='/'>
          <MainContainer user={user} />
          </Route>
        </Switch> */}
      </Layout>
    </>
  );
}

export default App;