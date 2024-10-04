const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const bodyParser =require('body-parser');
const PatientControler = require('./Control/Control');

const app=express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true });

  const PORT =8200;
  app.listen(PORT, ()=>{
    console.log(`app is running on port: ${PORT}`);
  });

  //Routing should be done here
  app.get('/api/GetPatients',PatientControler.GetAllPatients);
  app.post('/api/PostPatients',PatientControler.AddNewPatients);
  app.delete('/api/Patients/:id',PatientControler.DeletePatients);
  app.put('/api/EditedPatients',PatientControler.UpdatePatientDetails);