import './App.css';

import {useState} from 'react';


function App() {

  const [data,setData] = useState("Archana")

  function updateData(){
    setData("Pramod")
  }
     return (
    <div className="App">
      <h2>state in functional component</h2>
    <h1>{data}</h1>
    <button onClick={updateData}>Update data</button> <br></br>     
     
    </div>
  );
}

export default App;

