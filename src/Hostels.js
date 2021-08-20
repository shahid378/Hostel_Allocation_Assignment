import React from "react";
import Button from "react-bootstrap/Button";
import Rooms from "./Rooms";

class Hostel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="hostelGroup">
          <Button as="input" type="reset" value="B 1" />
          <Button as="input" type="reset" value="B 2" />
          <Button as="input" type="reset" value="B 3" />
          <Button as="input" type="reset" value="B 4" />
        </div>
      </>
    );
  }
}

export default class Hostels extends React.Component {
  constructor(props) {
  super(props);
  this.state={
    showrooms: false
  };
  this.handleGender=this.handleGender.bind(this);

  }
  handleRooms(event){
    console.log("clicking");
    this.setState(
        {showrooms:!this.state.showrooms}
    );    
  }
  getComponent(){
    console.log("clicking");
    if(this.state.showrooms){
        return <Rooms/>
    }
    else{
        return null;
    }
  }


  

  render(){
    return(
      <>
        <div>Choose A Hostel</div>
        <Hostel onclick={this.getComponent}></Hostel>
        <Rooms></Rooms>
      </>
      
    )
  }
} 