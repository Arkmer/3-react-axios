import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        count: 0,
      }
  }

  handleClick = () => {
    let repeat = 0;
    let stop = Math.floor((Math.random() * 1000) + 1);
    while(repeat < stop){
      this.setState({
        count: this.state.count + stop,
      })
      console.log('Clicked!');
      repeat = repeat + 1;
      if(repeat === stop){
        console.log('Gettin it done!', stop);
      }
    }
  }

  handleClick2 = () => {
    axios.get('/test')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Do the thing a bunch!</button>
        <button onClick={this.handleClick2}>Do the axios thing!</button>
        <p>Thing counter: { this.state.count } things done!</p>
      </div>
    );
  }
}

export default App;
