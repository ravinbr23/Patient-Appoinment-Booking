
const mongoose = require('mongoose');

const PatientSchema= new mongoose.Schema({

    name:{type:String , required:true},
    Dob:{type:Date, required:true},
    Mobile:{type:Number , required:true},
   
    DateOfAppoinment:{type:Date , required:true}

});

const Patient = mongoose.model('Patient',PatientSchema);

module.exports=Patient;