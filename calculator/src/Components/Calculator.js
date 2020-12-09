import React, { Component } from 'react';

class Calculator extends Component{
    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            number3: 'Your reseults here'
        }
    }

    changeInput1= (evt) => {
        let newValue1 = parseInt(evt.target.value || 0)
       
        this.setState({number1: newValue1})
  }

  changeInput2= (evt) => {
    let newValue2 = parseInt(evt.target.value || 0)
   
    this.setState({number2: newValue2})
}

add =(e)=> {
    
    const newCount = this.state.number1 +  this.state.number2;
    this.setState({ number3: newCount})
  }

  subtract=(e)=> {
    
    const newCount = this.state.number1 -  this.state.number2;
    this.setState({ number3: newCount})
  }

  multiply =(e)=> {
    
    const newCount = this.state.number1 *  this.state.number2;
    this.setState({ number3: newCount})
  }

  devide=(e)=> {
    
    const newCount = this.state.number1 /  this.state.number2;
    this.setState({ number3: newCount})
  }

  clear =(e)=> {
    
    
    this.setState({ number1: 0, 
    number2: 0,
    number3: 'Your Results Here' })
  }
    render(){
        return (
            <div className="App">
        <div className="container">
          <h1>Add with React!</h1>
        
          <div className="add">
            <input type="text" value={this.state.number1} onChange={this.changeInput1}/>
            <span></span>
            <input type="text" value={this.state.number2} onChange={this.changeInput2}/>
            <button onClick={this.add}>+</button>
            <button onClick={this.subtract}>-</button>
            <button onClick={this.multiply}>*</button>
            <button onClick={this.devide}>/</button>
            <button onClick={this.clear}>Clear</button>
            <h3>{this.state.number3}</h3>
          </div>
        </div>
            </div>
          )
    }
  
  }
  
  export default Calculator;