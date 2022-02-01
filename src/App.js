
import './App.css';
import Test from './Test.js';
import {useState} from 'react';


function App() {

  const [data,setData] = useState(0)

  function updateData(){
    setData(data + 1)
  }
     return (
    <div className="App">
    <h1>{data}</h1>
    <button onClick={updateData}>Update data</button> <br></br>     
    <Test/>  
    </div>
  );
}

export default App;
 
