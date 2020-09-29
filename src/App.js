import React from "react";
import "./styles.css";

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }
  
  render(){ 
    return (
    <div>
      The time is {this.state.date.toLocaleTimeString()}
    </div>
  )}
}

function App(){
  return (
    <Clock />
  )
}

export default App;