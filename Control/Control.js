const Patient= require('./Modal/userModal');

//Operations like find , create , delete patient details

const GetAllPatients = async(req,res) =>{

    try {

        const patient= await Patient.find();
        res.json(patient);
    }
    catch (error){
        res.status(500).json({message :error.message});
    }
};

const AddNewPatients =async(req,res)=>{
    
        const NewPatientDetail= await Patient(req.body);
        
        try{
        await NewPatientDetail.save();
        res.status(200).json(NewPatientDetail); 
    }
    catch(error){
        res.status(400).json({message :error.message});
    }
};

const UpdatePatientDetails = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.status(200).json(patient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const DeletePatients= async(req,res)=>{
     try {
        await Patient.findByIdAndDelete(req.params.id);
        res.sendStatus(204);
     }
     catch(error){
        res.status(500).json({message:error.message});
     }
};

//Export Control functions 

module.exports={
    GetAllPatients,
    AddNewPatients,
    UpdatePatientDetails,
    DeletePatients
};