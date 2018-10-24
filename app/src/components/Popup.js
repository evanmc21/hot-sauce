import React, { Component } from 'react';

class Popup extends Component {
  constructor(props){
  super(props);

  this.state = {
    time: "start",
    title: "Hot Sauce",
    text: "This is a quiz to see if you're a true fan of the Queen Bey",
    buttonText: "You Ready?"
  }
  this.handlePopup = this.handlePopup.bind(this);
}

handlePopup() {
  let { time } = this.state;

  if(time === "start"){
    this.setState({
    time: "end",
    title: "Finished!",
    buttonText: "Restart"
  })
  this.props.startQuiz();
} else {
  location.reload();
}
}

getDerivedStateFromProps(nextProps) {
  this.setState({
    text: 'You got: <Strong>' + this.props.correct + '</strong> right and <strong>' + this.props.blasphemy + '</strong> questions wrong.'
  })
}

createMarkup(text) {
  return {__html: text};
}

render() {
  let { title, text, buttonText } = this.state;

  let { style } = this.props;

  return(
    <div className="popup-container" style={style}>
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="popup">
            <h1>{ title }</h1>
              <p dangerouslySetInnerHTML={this.createMarkup(text)} />
              <button className="fancy-btn" onClick={this.handlePopup}>
                {buttonText}
              </button>
            </div>
          </div>
      </div>
    </div>
    )
  }
}

export default Popup;
