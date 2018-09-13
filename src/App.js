import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    var dataSet = [
      {
      question: "How many #1 solo albums does Beyonce have?",
      answers: [
        "4",
        "5",
        "6",
        "8"
      ],
      correct: 2
    },
      {
      question: "How many years has Beyonce been a professional recording artist?",
      answers: [
        "9",
        "21",
        "15",
        "7"
      ],
      correct: 2
    },
      {
      question: "What is Beyonce's favorite number?",
      answers: [
        "4",
        "31",
        "7",
        "23"
      ],
      correct: 0
    },
    {
      question: "What song did Beyonce perform at the 2010 Grammy Awards?",
      answers: [
        "Halo",
        "If I Were A Boy",
        "Sweet Dreams",
        "Bleeding Love"
      ],
      correct: 1
    },
    {
      question: "In what year did Beyonce and Jay-Z get married?",
      answers: [
        "2011",
        "2012",
        "2008",
        "Who is Jay-Z?"
      ],
        correct: 2
    }
    ]
    this.state = {current: 0, dataSet:dataSet, correct: 0, blasphemy: 0}
    this.handleClick = this.handleClick.bind(this)
  } //constuctor ends

  handleClick = input => {
    if (input ==
    this.state.dataSet[this.state.current].correct) {
      this.setState({correct: this.state.correct + 1})
    } else {
      this.setState({blasphemy: this.state.blasphemy + 1})
    }
// for when the quiz ends
    if (this.state.current == 5) {
      this.setState({current: 0})
      this.setState({blasphemy: 0})
      this.setState({correct: 0})
    } else {
      this.setState({current: this.state.current + 1})
    }
  }

  render(){
    return(
      <div>
        <Results correct={this.state.correct}
        blasphemy={this.state.blasphemy} />
        <Quiz handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
      </div>
    )
  };
}
// formatting the quiz and passing data through props
function Answer(props) {
  var style = {
    height: 40,
    width: "100%",
    color: "lightblue"
  }
  return(
    <div>
      <button style={style} onClick={() =>
      props.handleClick(props.input)}>{props.answer} </button>
    </div>
  )
}

function Question(props) {
  var style = {
    color: "lightpink",
    fontSize: "1.5em",
    margin: "10%",
    fontWeight: "lighter"
  }
  return(
    <h2 style={style}>{props.dataSet.question}</h2>
  )
}

function AnswerList(props) {
  var answers = []
  for (let i = 0; i < props.dataSet.answers.length; i++){
    answers.push(<Answer choice={i} handleClick={props.handleClick}
      answer={props.dataSet.answers[i]} />)
  }
  return(
    <div>
      {answers}
    </div>
  )
}

function CorrectTotal(props) {
  var style = {
    display: "inline-block",
    background: "grey",
    color: "lightgreen"
  }
  return(
    <h3 style={style}>Correct: {props.correct} </h3>
  )
}

function BlasphemyTotal(props) {
  var style = {
    display: "inline-block",
    background: "grey",
    color: "lightgreen"
  }
  return(
    <h3 style={style}>Blasphemy: {props.blasphemy} </h3>
  )
}

function Quiz(props) {
  var style = {
    display: "block",
    width: "40%",
    textAlign: "center"
  }
  return(
    <div style={style}>
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handleClick = {props.handleClick} />
      </div>
  )
}

function Results(props) {
  var style = {
    display: "block",
    width: "100%",
    float: "left",
    background: "grey"
  }
  return(
    <div style={style}>
    <CorrectTotal correct = {props.correct} />
    <BlasphemyTotal blasphemy={props.blasphemy} />
    </div>
  )
}


export default App;
