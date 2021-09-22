import React,{useState,useEffect} from 'react';
import './App.css';
import Results from './views/Results'

function App() {
  const [data,setData]=useState([]);
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
  return (
    <div className="App">
        <Results mockData={data}/>
    </div>
  );
}

export default App;