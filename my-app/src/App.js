import './App.css';
//import {SpreadsheetComponent} from '@syncfusion/ej2-react-spreadsheet';
import * as XLSX from "xlsx";
import { useEffect, useState } from 'react';
import {editButton, handleChange, getExcellFile, insertEmployee, hideMainList, insertAllEmployees} from './functions/functions.js';

function App() {
  const [spreadSheet, setSpreadSheet] = useState([]);
  const [input, setInput] = useState({});
  const [hideList, setHideList] = useState(false);
  const [allAdded, setAllAdded] = useState(false);

  return (
    <div className="App">
      <h1 class="employee-manager-heading">Employee Manager</h1><br></br>

      <input class="choose-file" type='file' onChange={(e)=> {
        const file = e.target.files[0];
        getExcellFile(file, spreadSheet, setSpreadSheet);
      }} />

{/* IF ALL RECORDS ADDED IS TRUE HIDE EVERYTHING */}

{allAdded === true? (
  <div>
    <br></br>
    <br></br>
    <br></br>
    <h1>All Records Added</h1>
  </div>
) 
: 
(

  <div>

  {/* IF EDIT BUTTON IS NOT CLICKED, SHOW LIST */}

  {hideList === false ? (
    <div>
    <br></br>
    <br></br>
  
    {spreadSheet.length !== 0 ? (
        <button class="btn btn-primary" onClick={(e)=>insertAllEmployees(e, input, setInput, setAllAdded, spreadSheet)}>ADD ALL TO DATABASE</button>
    ) : ""}
  
  
    <table class="table container">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">City</th>
        <th scope="col">Source</th>
        <th scope="col">Status</th>
        <th scope="col">Level</th>
        <th scope="col">URI Gender</th>
        <th scope="col">URI Diversity</th>
        <th scope="col">Emp#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Training Path</th>
        <th scope="col">Resource Pool</th>
        <th scope="col">Client</th>
        <th scope="col">Gx PoC</th>
        <th scope="col">Project</th>
        <th scope="col">Current Role</th>
        <th scope="col">Primar/Skill</th>
        <th scope="col">Meeting Expectations</th>
        <th scope="col">Gx Start Date</th>
        <th scope="col">02 End Date</th>
        <th scope="col">Proj Start Date</th>
        <th scope="col">Planned Billing Date</th>
        <th scope="col">Utilization %</th>
        <th scope="col">Starting Comp</th>
        <th scope="col">Current Cost</th>
        <th scope="col">Bill Rate</th>
        <th scope="col">Margin</th>
        <th scope="col">Comments</th>
      </tr>
    </thead>
    <tbody>
          {spreadSheet.map((input, i) => (
              <tr id={`TableRow${i}`} key={i}>
                <td>{i}</td>
                <td className='resource-field'>{input.City}</td>
                <td className='resource-field'>{input.Source}</td>
                <td className='resource-field'>{input.Status}</td>
                <td className='resource-field'>{input.Level}</td>
                <td className='resource-field'>{input.URIGender}</td>
                <td className='resource-field'>{input.URIDiversity}</td>
                <td className='resource-field'>{input.EmpNo}</td>
                <td className='resource-field'>{input.First}</td>
                <td className='resource-field'>{input.Last}</td>
                <td className='resource-field'>{input.TrainingPath}</td>
                <td className='resource-field'>{input.ResourcePool}</td>
                <td className='resource-field'>{input.Client}</td>
                <td className='resource-field'>{input.GXPoC}</td>
                <td className='resource-field'>{input.Project}</td>
                <td className='resource-field'>{input.CurrentRole}</td>
                <td className='resource-field'>{input.PrimarSkill}</td>
                <td className='resource-field'>{input.MeetingExpectations}</td>
                <td className='resource-field'>{input.GxStartDate}</td>
                <td className='resource-field'>{input.O2EndDate}</td>
                <td className='resource-field'>{input.ProjStartDate}</td>
                <td className='resource-field'>{input.PlannedBillingDate}</td>
                <td className='resource-field'>{input.UtilizationPercentage}</td>
                <td className='resource-field'>{input.StartingComp}</td>
                <td className='resource-field'>{input.CurrentCost}</td>
                <td className='resource-field'>{input.BillRate}</td>
                <td className='resource-field'>{input.Margin}</td>
                <td className='resource-field'>{input.Comments}</td>
                <td className='resource-field'><button EditButton={`${i}`} class="btn btn-primary" type="submit" value="Edit" onClick={(e)=>editButton(e, setInput, spreadSheet, hideList, setHideList)}>Edit</button></td>
              </tr>
              
          )
          )}
    </tbody>
  </table>
  </div>
  ) : (
  
  <div>

    {/* IF EDIT BUTTON IS CLICKED, GO TO EDIT RECORD */}

  <br></br>
  <br></br>
  <h4>EDIT RECORD</h4>
  <table class="table container">
    
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">City</th>
        <th scope="col">Source</th>
        <th scope="col">Status</th>
        <th scope="col">Level</th>
        <th scope="col">URI Gender</th>
        <th scope="col">URI Diversity</th>
        <th scope="col">Emp#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Training Path</th>
        <th scope="col">Resource Pool</th>
        <th scope="col">Client</th>
        <th scope="col">Gx PoC</th>
        <th scope="col">Project</th>
        <th scope="col">Current Role</th>
        <th scope="col">Primar/Skill</th>
        <th scope="col">Meeting Expectations</th>
        <th scope="col">Gx Start Date</th>
        <th scope="col">02 End Date</th>
        <th scope="col">Proj Start Date</th>
        <th scope="col">Planned Billing Date</th>
        <th scope="col">Utilization %</th>
        <th scope="col">Starting Comp</th>
        <th scope="col">Current Cost</th>
        <th scope="col">Bill Rate</th>
        <th scope="col">Margin</th>
        <th scope="col">Comments</th>
      </tr>
    </thead>
    <tbody>
    <tr>
  <td>#</td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"City"} value={input.City}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"Source"} value={input.Source}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"Status"} value={input.Status}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"Level"} value={input.Level}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"URIGender"} value={input.URIGender}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"URIDiversity"} value={input.URIDiversity}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"EmpNo"} value={input.EmpNo}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"First"} value={input.First}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"Last"} value={input.Last}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"TrainingPath"} value={input.TrainingPath}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"ResourcePool"} value={input.ResourcePool}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"Client"} value={input.Client}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"GXPoC"} value={input.GXPoC}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"Project"} value={input.Project}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"CurrentRole"} value={input.CurrentRole}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"PrimarSkill"} value={input.PrimarSkill}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"MeetingExpectations"} value={input.MeetingExpectations}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"GxStartDate"} value={input.GxStartDate}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"O2EndDate"} value={input.O2EndDate}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"ProjStartDate"} value={input.ProjStartDate}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"PlannedBillingDate"} value={input.PlannedBillingDate}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"UtilizationPercentage"} value={input.UtilizationPercentage}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"StartingComp"} value={input.StartingComp}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"CurrentCost"} value={input.CurrentCost}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"BillRate"} value={input.BillRate}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"Margin"} value={input.Margin}/></td>
  <td className='resource-field'><input onChange={(e)=> handleChange(e, setInput)} name={"Comments"} value={input.Comments}/></td>
  <td className='resource-field'></td>
  </tr>
  <tr>
  <td>#</td>
  <td><button class="btn btn-primary" onClick={(e)=>insertEmployee(e, input, setInput)}>ADD TO DATABASE</button></td>

  {/* IF THIS BUTTON IS CLICKED, EDIT OPTIONS ARE HIDDEN */}
  <td><button class="btn btn-primary"  onClick={(e)=>hideMainList(e, hideList, setHideList)}>BACK TO LIST</button></td>
  </tr>
  
  
  
    </tbody>
  </table>
  </div>)}
  </div>
)}




<br></br>
<br></br>
<br></br>
<br></br>



    </div>
  );
}

export default App;
