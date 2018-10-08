import React, {Component} from 'react';
import beybraids from './images/beybraids.jpg';
import bey2 from './images/bey2.jpg';
import bey3 from './images/bey3.jpg';
import bey4 from './images/bey4.jpg';

import Pictures from './Pictures';

class App extends Component {
  constructor(props) {
    super(props);

    const dataSet = [
      {
        question: "How many #1 solo albums does Beyonce have?",
        answers: [
          "4", "5", "6", "8"
        ],
        correct: 2
      }, {
        question: "How many years has Beyonce been a professional recording artist?",
        answers: [
          "9", "21", "15", "7"
        ],
        correct: 1
      }, {
        question: "What is Beyonce's favorite number?",
        answers: [
          "4", "31", "7", "23"
        ],
        correct: 0
      }, {
        question: "What song did Beyonce perform at the 2010 Grammy Awards?",
        answers: [
          "Halo", "If I Were A Boy", "Sweet Dreams", "Bleeding Love"
        ],
        correct: 1
      }, {
        question: "In what year did Beyonce and Jay-Z get married?",
        answers: [
          "2011", "2012", "2008", "Who is Jay-Z?"
        ],
        correct: 2
      },
      {
        question: "Which artist inspired Beyonce to start performing?",
        answers: [
          "Michael Jackson", "Tina Turner", "Whitney Houston", "Prince", "Dolly Parton"
        ],
        correct: 0
      },
      {
        question: "Beyonce performed with whom at the 2016 Country Music Awards?",
        answers: [
          "Faith Hill & Tim McGraw", "The Dixie Chicks", "Carrie Underwood", "Jason Aldean"
        ],
        correct: 1
      },
      {
        question: "What was Destiny's Child's first hit single?",
        answers: ["Say My Name", "No, No, No", "Survivor", "Bills, Bills, Bills"
        ],
        correct: 1
      }
    ]
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

    // for when the quiz ends
    if (this.state.current === 7) {
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
      },
      {
        src: bey2
      },
      {
        src: bey3
      },
      {
        src: bey4
      }
    ]
    return (<div>
      <Results correct={this.state.correct} blasphemy={this.state.blasphemy}/>
      <Quiz handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]}/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Pictures images={Bey_Pictures} />

    </div>)
  };
}
// formatting the quiz and passing data through props
function Answer(props) {
  const style = {
    height: 40,
    background: "grey",
    width: "100%",
    color: "lightgreen",
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
    margin: "10%",
    fontWeight: "lighter"
  }
  return (<h2 style={style}>{props.dataSet.question}</h2>)
}

function AnswerList(props) {
  // need to fix this loop
  var answers = []
  for (let i = 0; i < props.dataSet.answers.length; i++) {
    answers.push(<Answer input={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]}/>)
  }
  return (<div>
    {answers}
  </div>)
}

function CorrectTotal(props) {
  var style = {
    display: "inline-block",
    background: "grey",
    color: "lightgreen",
    margin: "2.5%",
    fontSize: "2em",
    fontWeight: "lighter"
  }
  return (<h3 style={style}>Correct: {props.correct}
  </h3>)
}

function BlasphemyTotal(props) {
  var style = {
    display: "inline-block",
    background: "grey",
    color: "lightgreen",
    fontSize: "2em",
    fontWeight: "lighter"
  }
  return (<h3 style={style}>Blasphemy: {props.blasphemy}
  </h3>)
}

function Quiz(props) {
  var style = {
    display: "block",
    width: "40%",
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
  var style = {
    display: "block",
    width: "100%",
    textAlign: "center",
    background: "grey"
  }
  return (<div style={style}>
    <CorrectTotal correct={props.correct}/>
    <BlasphemyTotal blasphemy={props.blasphemy}/>
  </div>)
}

export default App;
