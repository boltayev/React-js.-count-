import {Component} from 'react';
import './App.css';

class App extends Component {
      
  constructor(ropsp){
    super()
    this.state = {
      counter: 0
    }
  }

  enc = ()=>{
    if(this.state.counter < 25){
      this.setState(()=>{
        return{
          counter:this.state.counter + 1
        }
      })
    }
  }

  dec = () =>{
    if(this.state.counter > -25){
    this.setState(()=>{
      return{
        counter:this.state.counter - 1
      }
    })
  }
  }

  rst = ()=>{
    this.setState(()=>{
      return{
        counter: 0
      }
    })
  }

  rnd = ()=>{
    this.setState(()=>{
      return{
        counter:Math.floor(Math.random() * (25 -(-25)+1)) +(-25)
      }
  })
  }
  
  render(){
    
    return(
      <div className='block'>
        <div className='counter'>{this.state.counter}</div>
        <div className='button_block'>
          <button className='dec' onClick={this.dec}>Dec</button>
          <button className='enc' onClick={this.enc}>Enc</button>
          <button className='rst' onClick={this.rst}>Rst</button>
          <button className='rnd' onClick={this.rnd}>Rnd</button>
        </div>
      </div>
      )
  }
}

export default App;
