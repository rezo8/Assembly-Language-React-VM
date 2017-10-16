import React from "react";
import RegisterDisplay from "./DataDisplayContainer/RegisterDisplay.js"
import MemoryDisplay from "./DataDisplayContainer/MemoryDisplay.js"
import Center from 'react-center';

import { Label, Navbar, NavItem, Nav, Grid, Row, Col , Button} from "react-bootstrap";

export default class DataDisplay extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      opRegs : this.props.opRegs,
      utilRegs : this.props.utilRegs,
      memoryOps : this.props.memoryOps

    }
  }
  render(){
    console.log("DAT DISP", this.props.memoryOps);
    return(
      <div id = "parent">

        <div id = "Registers">
        <Center>
          <h3> Registers </h3>
        </Center>
        <Center>

          <RegisterDisplay utilRegs = {this.props.utilRegs} memoryOps = {this.props.memoryOps} opRegs = {this.props.opRegs} />

        </Center>
        </div>
        <center>
          <h3> Memory Display </h3>
        </center>
        <div>
              <MemoryDisplay
                  memoryOps = {this.props.memoryOps}
              />
        </div>

      </div>
    )
  }
}
