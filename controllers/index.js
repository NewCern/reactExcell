const connection = require('../db');

const addEmployee = async (req, res) => {
    const {City, Source, Status, Level, URIGender, URIDiversity, EmpNo, 
        First, Last, TrainingPath, ResourcePool, Client, GXPoC, Project, 
        CurrentRole, PrimarSkill, MeetingExpectations, GxStartDate, O2EndDate, ProjStartDate, PlannedBillingDate, 
        UtilizationPercentage, StartingComp, CurrentCost, BillRate, Margin, Comments 
    } = req.body;
    await connection.query(`INSERT INTO employees (City, Source, Status, Level, URIGender, URIDiversity, EmpNo, 
        First, Last, TrainingPath, ResourcePool, Client, GXPoC, Project, 
        CurrentRole, PrimarSkill, MeetingExpectations, GxStartDate, O2EndDate, ProjStartDate, PlannedBillingDate, 
        UtilizationPercentage, StartingComp, CurrentCost, BillRate, Margin, Comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [City, Source, Status, Level, URIGender, URIDiversity, EmpNo, 
        First, Last, TrainingPath, ResourcePool, Client, GXPoC, Project, 
        CurrentRole, PrimarSkill, MeetingExpectations, GxStartDate, O2EndDate, ProjStartDate, PlannedBillingDate, 
        UtilizationPercentage, StartingComp, CurrentCost, BillRate, Margin, Comments], (err, result) => {
        res.json({result});
    })
}

module.exports = {
    addEmployee,

}