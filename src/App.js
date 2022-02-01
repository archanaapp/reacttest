
import './App.css';
import React,{Component} from 'react';


class  App extends Component{

  constructor(){
    super(); 
    this.state = {
      data: 1
    }
  }

  updatedata() {
    alert("function called");
    this.setState({data:this.state.data+1})
  }
  render () {
    return(
      <div className='App'>
        <h1>State in class component</h1>
        <h2>{this.state.data}</h2>
        <button onClick={()=>this.updatedata()}>Update Data</button>
      </div>
    )
  }
}

export default App;