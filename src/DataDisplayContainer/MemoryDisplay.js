import React from "react";
import RegisterDisplay from "./RegisterDisplay.js"
import Center from 'react-center';
import DataRow from "./DataRow.js"

import { Label, Navbar, NavItem, Nav, Grid, Row, Col , Button} from "react-bootstrap";

import './datatables.css';

const $ = require('jquery');

const columns = [
    {
        title: 'Name',
        width: 120,
        data: 'name'
    },
    {
        title: 'Nickname',
        width: 180,
        data: 'nickname'
    },
];

export default class MemoryDisplay extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      memoryOps : this.props.memoryOps
    }
  }

   render() {
     let  memoryShown;
     if (this.props.memoryOps.length <= 0){
       memoryShown = (

         <center>
            <h6>
              No Contents in Memory
            </h6>
         </center>

       )
     }
     //console.log("MEM DISPLAY!", this.props.memoryOps);
       return (
         <div>

         <Center>
           <h2> Memory Display </h2>
         </Center>
            {memoryShown}
           {this.props.memoryOps.map((op, index) => (
             <center>
             <DataRow
                 instruction = {op.instruction}
                 address = {op.address}
                 value = {op.value}
                 width = "200px"
               />
               </center>
           ))}
         </div>
       )
   }

}


/*
<div>
    <table id="example" class="display" cellspacing="0" width="100%" />

    <thead>
<tr>
    <th>Name</th>
    <th>Position</th>
    <th>Office</th>
    <th>Age</th>
    <th>Start date</th>
    <th>Salary</th>
</tr>
</thead>

</div>

*/
