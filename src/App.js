import React from "react";
import './App.css';
import Gender from './Gender';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }

  }

  render(){
    return (
      <>
        <div>Choose Your Hostel</div>
        <Gender ></Gender>        
      </>
    );
  }
 
}

export default App;
