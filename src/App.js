import './App.css';
import {useState} from 'react';


function App() {

  const [data,setData] = useState(0)

  function updateData(){
    setData(data + 1)
  }
     return (
    <div className="App">
      <h1>state in functional component</h1>
    <h1>{data}</h1>
    <button onClick={updateData}>Update data</button> <br></br>   
      
    </div>
  );
}

export default App;
