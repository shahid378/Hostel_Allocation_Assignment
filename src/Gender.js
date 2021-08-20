import React from "react";
import Hostels from './Hostels';

export default class Gender extends React.Component {
  constructor(props) {
    super(props);    
    
    this.state={
        showhostel: false
    };
    this.handleGender=this.handleGender.bind(this);

  }
  handleGender(event){
      console.log("clicking");
      this.setState(
          {showhostel:!this.state.showhostel}
      );    
  }
  getComponent(){
      console.log("clicking");
      if(this.state.showhostel){
          return <Hostels/>
      }
      else{
          return null;
      }
  }
  
  render(){
      return(
          <>
          <div onClick={this.getComponent}>MALE</div>
          <div >FEMALE</div>
          </>
      )
  }
}  