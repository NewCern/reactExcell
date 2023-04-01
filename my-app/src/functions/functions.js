import axios from "axios";
import * as XLSX from "xlsx";


  // Create a function to Read .xlsx file
  export const getExcellFile = (file, spreadSheet, setSpreadSheet) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      // Handle "onload" event
      fileReader.onload = (e) => {
        const arrayBuffer = e.target.result;
        const workBook = XLSX.read(arrayBuffer, {
          type:'buffer',
        });
        const workSheetName = workBook.SheetNames[0];
        const workSheet = workBook.Sheets[workSheetName];
        const data = XLSX.utils.sheet_to_json(workSheet);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((data) => {
      //console.log(data);
      setSpreadSheet(data);
    })
  };


// EDIT BUTTON 
export const editButton = (e, setInput, spreadSheet, hideList, setHideList) => {
    //console.log(e.target.getAttribute("EditButton"))

    spreadSheet.forEach((record, i) => {
        if(e.target.getAttribute("EditButton") == i){
            //console.log(spreadSheet[i].City)
            setInput({
                    City: record.City,
                    Source: record.Source,
                    Status: record.Status,
                    Level: record.Level,
                    URIGender: record.URIGender,
                    URIDiversity: record.URIDiversity,
                    EmpNo: record.EmpNo,
                    First: record.First,
                    Last: record.Last,
                    TrainingPath: record.TrainingPath,
                    ResourcePool: record.ResourcePool,
                    Client: record.Client,
                    GXPoC: record.GXPoC,
                    Project: record.Project,
                    CurrentRole: record.CurrentRole,
                    PrimarSkill: record.PrimarSkill,
                    MeetingExpectations: record.MeetingExpectations,
                    GxStartDate: record.GxStartDate,
                    O2EndDate: record.O2EndDate,
                    ProjStartDate: record.ProjStartDate,
                    PlannedBillingDate: record.PlannedBillingDate,
                    UtilizationPercentage: record.UtilizationPercentage,
                    StartingComp: record.StartingComp,
                    CurrentCost: record.CurrentCost,
                    BillRate: record.BillRate,
                    Margin: record.Margin,
                    Comments: record.Comments,
                }
            )
        }
    });

    hideMainList(e, hideList, setHideList)
}

// HANDLE CHANGE
export const handleChange = (e, setInput, index, sprea) =>  {   
    const {name, value} = e.target;
    setInput(prevState => {
        return {
            ...prevState,
            [name]: value,
        }
    })
}


// Hide List
export const hideMainList = (e, hideList, setHideList) => {
    setHideList(!hideList);
}


export const insertEmployee = async (
    e, 
    input, 
    setInput) => {
    
    const newRecord = {
        City: input.City,
        Source: input.Source,
        Status: input.Status,
        Level: input.Level,
        URIGender: input.URIGender,
        URIDiversity: input.URIDiversity,
        EmpNo: input.EmpNo,
        First: input.First,
        Last: input.Last,
        TrainingPath: input.TrainingPath,
        ResourcePool: input.ResourcePool,
        Client: input.Client,
        GXPoC: input.GXPoC,
        Project: input.Project,
        CurrentRole: input.CurrentRole,
        PrimarSkill: input.PrimarSkill,
        MeetingExpectations: input.MeetingExpectations,
        GxStartDate: input.GxStartDate,
        O2EndDate: input.O2EndDate,
        ProjStartDate: input.ProjStartDate,
        PlannedBillingDate: input.PlannedBillingDate,
        UtilizationPercentage: input.UtilizationPercentage,
        StartingComp: input.StartingComp,
        CurrentCost: input.CurrentCost,
        BillRate: input.BillRate,
        Margin: input.Margin,
        Comments: input.Comments,
    }

    await axios.post(`http://localhost:3000/addemployee`, newRecord);
    
    setInput({
        City: '',
        Source: "",
        Status: '',
        Level: '',
        URIGender: '',
        URIDiversity: '',
        EmpNo: '',
        First: '',
        Last: '',
        TrainingPath: '',
        ResourcePool: '',
        Client: '',
        GXPoC: '',
        Project: '',
        CurrentRole: '',
        PrimarSkill: '',
        MeetingExpectations: '',
        GxStartDate: '',
        O2EndDate: '',
        ProjStartDate: '',
        PlannedBillingDate: '',
        UtilizationPercentage: '',
        StartingComp: '',
        CurrentCost: '',
        BillRate: '',
        Margin: '',
        Comments: "",
    })
}

// Add all records to DataBase
export const insertAllEmployees = (
    e, 
    input, 
    setInput,
    setAllAdded,
    spreadSheet) => {
        spreadSheet.forEach( async (input) => {
            const newRecord = {
                City: input.City,
                Source: input.Source,
                Status: input.Status,
                Level: input.Level,
                URIGender: input.URIGender,
                URIDiversity: input.URIDiversity,
                EmpNo: input.EmpNo,
                First: input.First,
                Last: input.Last,
                TrainingPath: input.TrainingPath,
                ResourcePool: input.ResourcePool,
                Client: input.Client,
                GXPoC: input.GXPoC,
                Project: input.Project,
                CurrentRole: input.CurrentRole,
                PrimarSkill: input.PrimarSkill,
                MeetingExpectations: input.MeetingExpectations,
                GxStartDate: input.GxStartDate,
                O2EndDate: input.O2EndDate,
                ProjStartDate: input.ProjStartDate,
                PlannedBillingDate: input.PlannedBillingDate,
                UtilizationPercentage: input.UtilizationPercentage,
                StartingComp: input.StartingComp,
                CurrentCost: input.CurrentCost,
                BillRate: input.BillRate,
                Margin: input.Margin,
                Comments: input.Comments,
            }

            await axios.post(`http://localhost:3000/addemployee`, newRecord);
        })
    allAddedConfirmation(setAllAdded);
}

const allAddedConfirmation = (setAllAdded) => {
    setAllAdded(true);
}
