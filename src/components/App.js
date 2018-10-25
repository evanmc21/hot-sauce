import React, { Component } from 'react';
import beybraids from '../images/beybraids.jpg';
import bey2 from '../images/bey2.jpg';
import bey3 from '../images/bey3.jpg';
import bey4 from '../images/bey4.jpg';
import Pictures from './Pictures';
import dataSet from '../data/dataSet';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      dataSet: dataSet,
      correct: 0,
      blasphemy: 0
    }
    this.handleClick = this.handleClick.bind(this)
  } //constructor ends

  handleClick = input => {
    if (input === this.state.dataSet[this.state.current].correct) {
      this.setState({
        correct: this.state.correct + 1
      })
    } else {
      this.setState({
        blasphemy: this.state.blasphemy + 1
      })
    }
    if (this.state.current === 11) {
      this.setState({current: 0})
      this.setState({blasphemy: 0})
      this.setState({correct: 0})
    } else {
      this.setState({
        current: this.state.current + 1
      })
    }
  }

  render() {
    const Bey_Pictures = [
      {
        src: beybraids
      }, {
        src: bey2
      }, {
        src: bey3
      }, {
        src: bey4
      }
    ]
    return (<div>
      <Results correct={this.state.correct} blasphemy={this.state.blasphemy}/>
      <Quiz handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Pictures images={Bey_Pictures}/>

    </div>)
  };
}
function Answer(props) {
  const style = {
    height: "auto",
    background: "lightgreen",
    width: "33%",
    borderColor: "white",
    color: "white",
    fontSize: "1.25em"
  }
  return (<div>
    <button style={style} onClick={() => props.handleClick(props.input)}>{props.answer}
    </button>
  </div>)
}

function Question(props) {
  var style = {
    color: "lightpink",
    fontSize: "1.5em",
    margin: "5%",
    fontWeight: "lighter"
  }
  return (<h2 style={style}>{props.dataSet.question}</h2>)
}

function AnswerList(props) {
  let answers = []
  for (let i = 0; i < props.dataSet.answers.length; i++) {
    answers.push(<Answer input={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]}/>)
  }
  return (<div>
    {answers}
  </div>)
}

function CorrectTotal(props) {
  const style = {
    display: "inline-block",
    color: "lightgreen",
    margin: "2.5%",
    fontSize: "2em",
    fontWeight: "lighter"
  }
  return (<h3 style={style}>Correct: {props.correct}
  </h3>)
}

function BlasphemyTotal(props) {
  const style = {
    display: "inline-block",
    color: "lightgreen",
    fontSize: "2em",
    fontWeight: "lighter"
  }
  return (<h3 style={style}>Blasphemy: {props.blasphemy}
  </h3>)
}

function Quiz(props) {
  const style = {
    display: "block",
    width: "45%",
    textAlign: "center",
    margin: "0 auto",
    boxSizing: "border-box"
  }
  return (<div style={style}>
    <Question dataSet={props.dataSet}/>
    <AnswerList dataSet={props.dataSet} handleClick={props.handleClick}/>
  </div>)
}

function Results(props) {
  const style = {
    display: "block",
    width: "100%",
    textAlign: "center",
    background: "white"
  }
  return (<div style={style}>
    <CorrectTotal correct={props.correct}/>
    <BlasphemyTotal blasphemy={props.blasphemy}/>
  </div>)
}

export default App;
