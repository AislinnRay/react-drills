import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super();

    this.state= {
      text: ['Hi', 'How', "are", "you","?"]

    }
  }

  render () {
    const texts = this.state.text.map((element,index) => {
      return<h2 key={index}> {element} </h2>
    })
  return (
    <div className="App">
      {texts}
      {/* <p> {texts} </p> */}
      {/* <h2> Hi </h2>
      <h2> How </h2>
      <h2> are </h2>
      <h2> you </h2>
      <h2> ? </h2> */}
    </div>
  );
}
}

export default App;
