import React from "react";
import {  FormGroup, FormControl, ControlLabel, HelpBlock} from "react-bootstrap";

const badInput="Only commas and numbers can be input to DataSegment"
const badNumber = "One of the numbers is invalid. Make sure all negative signs are leading."
const goodInput="Example input is : 34, 43, 72 "

export default class Register extends React.Component {


  constructor(props){
    super(props);
    this.state={
      //dataArray : this.props.dataArray,
      value: "",
      feedback: goodInput,
    }
  }


  handleChange(e) {
    let str=e.target.value;
    var isValid=/^[-0-9, ]*$/.test(str);
    console.log(isValid);

    if(isValid){
      let newStr=str.replace(/\s+/g,"");
      let numbers=newStr.replace(/(\r\n|\n|\r|)/gm,"");
      let data=numbers.split(",")
      let badNumPres = false;

      for (var i=0; i < data.length; i++){
        if(isNaN(data[i])){
          this.setState({
            value: str,
            feedback: badNumber
          });

          badNumPres = true;
        }else{
          this.props.updateDataArray(i*4, data[i]);


        }
      }

      console.log(this.props.dataArray);
      if(!badNumPres){
          this.setState({
                          value: str,
                          feedback: goodInput
                          });
          }
    }
    else{
      this.setState({
                    value: str,
                    feedback: badInput
                    });
    }

  }

  render(){

  //        console.log(this.props.dataArray);
    return(
    <FormGroup
      controlId="formBasicText"

    >
      <center>
        <ControlLabel> Data Segment </ControlLabel>
      </center>
      <FormControl
        type="text"
        value={this.state.value}
        placeholder="Enter numbers separated by commas"
        onChange={this.handleChange.bind(this)}
      />
      <FormControl.Feedback />
      <center>
        <HelpBlock>{this.state.feedback}</HelpBlock>
      </center>
    </FormGroup>


    )
  }
}
