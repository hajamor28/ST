import './App.css';
import { Component } from 'react';


class App extends Component {


  
  constructor(){
    super()
  this.user={
    name:'kawther',
    counter : "0" ,
    show : false 
  }
  }
  Incerement (){
    this.setuser({
      counter: this.this.user.counter+1
    })
  }
  Decrement = () =>{
    if(this.state.counter>0){
      this.setuser({
        counter : this.state.counter - 1
      })
    }







  return (
    <div className='App'>
    
    <h1> WS KHA </h1>
       <h2> {name}</h2>
       <hr/>
       <h2> {this.user.counter}</h2>
       <button onClick={()=> this.Incerement()}>+</button>
        
    <p> Bonjour </p>
  </div>  



  );
}
}

export default App;
